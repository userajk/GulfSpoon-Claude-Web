import imageManifest from "@/content/generated/image-manifest.json";

const images = new Set<string>(imageManifest as string[]);

/** Today's date (YYYY-MM-DD) in the Gulf, where the site's publishing day starts. */
export function todayInGulf(): string {
  return new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Dubai" }).format(new Date());
}

/**
 * A recipe or guide is live once its publish date has arrived and its hero image exists.
 * Set PREVIEW_SCHEDULED=1 at build time to render everything (local preview only).
 */
export function isLive(item: { publishedAt: string; heroImage: string }): boolean {
  if (process.env.PREVIEW_SCHEDULED === "1") return true;
  return item.publishedAt <= todayInGulf() && images.has(item.heroImage);
}
