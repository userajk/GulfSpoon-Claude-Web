const https = require("https");

const KEY = "bc6e4e223b269ce22022828e1af2e509";
const HOST = "gulfspoon.com";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

async function getUrls() {
  const urls = process.argv.slice(2);
  if (urls.length > 0) return urls;

  const sitemapUrl = `https://${HOST}/sitemap.xml`;
  return new Promise((resolve, reject) => {
    https.get(sitemapUrl, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        const matches = data.match(/<loc>(.*?)<\/loc>/g) || [];
        resolve(matches.map((m) => m.replace(/<\/?loc>/g, "")));
      });
      res.on("error", reject);
    });
  });
}

async function submit(urls) {
  const body = JSON.stringify({
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls,
  });

  return new Promise((resolve, reject) => {
    const req = https.request(
      {
        hostname: "api.indexnow.org",
        path: "/indexnow",
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "Content-Length": Buffer.byteLength(body),
        },
      },
      (res) => {
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => {
          console.log(`Status: ${res.statusCode}`);
          if (data) console.log(`Response: ${data}`);
          resolve(res.statusCode);
        });
      }
    );
    req.on("error", reject);
    req.write(body);
    req.end();
  });
}

(async () => {
  const urls = await getUrls();
  console.log(`Submitting ${urls.length} URLs to IndexNow...`);
  urls.forEach((u) => console.log(`  ${u}`));
  await submit(urls);
})();
