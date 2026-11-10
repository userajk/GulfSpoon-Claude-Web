// Minimal static server for the exported site in out/ (local preview only).
import http from "node:http";
import fs from "node:fs";
import path from "node:path";

const root = path.resolve("out");
const port = Number(process.env.PORT || 4173);
const types = { ".html": "text/html; charset=utf-8", ".css": "text/css", ".js": "text/javascript", ".json": "application/json", ".png": "image/png", ".jpg": "image/jpeg", ".webp": "image/webp", ".svg": "image/svg+xml", ".ico": "image/x-icon", ".txt": "text/plain", ".xml": "application/xml" };

http
  .createServer((req, res) => {
    let p = decodeURIComponent(new URL(req.url, "http://x").pathname);
    let file = path.join(root, p);
    if (!file.startsWith(root)) return res.writeHead(403).end();
    if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, "index.html");
    if (!fs.existsSync(file)) {
      res.writeHead(404, { "content-type": "text/html" });
      return res.end(fs.readFileSync(path.join(root, "404.html")));
    }
    res.writeHead(200, { "content-type": types[path.extname(file)] || "application/octet-stream" });
    fs.createReadStream(file).pipe(res);
  })
  .listen(port, () => console.log(`Serving out/ on http://localhost:${port}`));
