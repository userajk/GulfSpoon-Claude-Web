import { Marked, type Tokens } from "marked";
import { getRecipe } from "@/content/recipes";
import { getStory } from "@/content/stories";
import type { StoryImage } from "@/lib/schema/story";

const HEADING_ID = /\s*\{#([\w-]+)\}\s*$/;

function escapeAttr(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
}

/** Internal links to recipes or guides that are not live yet render as plain text. */
function isLiveInternalLink(href: string): boolean {
  const m = href.match(/^\/(recipes|beyond-the-recipes)\/([^/#?]+)\/?/);
  if (!m) return true;
  return m[1] === "recipes" ? Boolean(getRecipe(m[2])) : Boolean(getStory(m[2]));
}

const marked = new Marked({ gfm: true, breaks: false });
marked.use({
  renderer: {
    heading(token: Tokens.Heading) {
      const idMatch = token.text.match(HEADING_ID);
      const html = this.parser.parseInline(token.tokens).replace(HEADING_ID, "");
      const id = idMatch ? ` id="${idMatch[1]}"` : "";
      return `<h${token.depth}${id}>${html}</h${token.depth}>\n`;
    },
    link(token: Tokens.Link) {
      const text = this.parser.parseInline(token.tokens);
      const href = token.href;
      if (!isLiveInternalLink(href)) return text;
      const title = token.title ? ` title="${escapeAttr(token.title)}"` : "";
      const external = /^https?:\/\//.test(href) && !href.includes("gulfspoon.com");
      const rel = external ? ' rel="noopener" target="_blank"' : "";
      return `<a href="${escapeAttr(href)}"${title}${rel}>${text}</a>`;
    },
  },
});

/**
 * Render site markdown: `## Heading {#id}`, lists, GFM tables, bold/italic, links,
 * and `{{image:key}}` placeholders resolved from `images`.
 */
export function renderMarkdown(md: string, images?: Record<string, StoryImage>): string {
  const withImages = md.replace(/\{\{image:(.*?)\}\}/g, (_m, key: string) => {
    const img = images?.[key.trim()];
    if (!img) return "";
    const caption = img.caption ? `<figcaption>${escapeAttr(img.caption)}</figcaption>` : "";
    return `\n\n<figure><img src="${escapeAttr(img.src)}" alt="${escapeAttr(img.alt)}" loading="lazy" style="width:100%;height:auto;display:block;" />${caption}</figure>\n\n`;
  });
  const html = marked.parse(withImages, { async: false }) as string;
  return html
    .replace(/<table>/g, '<div class="table-scroll"><table>')
    .replace(/<\/table>/g, "</table></div>");
}
