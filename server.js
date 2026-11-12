
const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = path.join(__dirname, "public");

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".webp": "image/webp"
};

const server = http.createServer((req, res) => {
  if (req.method !== "GET" && req.method !== "HEAD") {
    res.writeHead(405, { "Content-Type": "text/plain" });
    return res.end("Method Not Allowed");
  }

  let requestedPath;

  try {
    requestedPath = decodeURIComponent(
      new URL(req.url, "http://localhost").pathname
    );
  } catch {
    res.writeHead(400);
    return res.end("Bad Request");
  }

  if (requestedPath === "/") {
    requestedPath = "/index.html";
  }

  const filePath = path.resolve(PUBLIC_DIR, "." + requestedPath);

  if (!filePath.startsWith(PUBLIC_DIR + path.sep)) {
    res.writeHead(403);
    return res.end("Forbidden");
  }

  fs.stat(filePath, (error, stats) => {
    if (error || !stats.isFile()) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      return res.end("Page Not Found");
    }

    const contentType =
      MIME_TYPES[path.extname(filePath).toLowerCase()] ||
      "application/octet-stream";

    res.writeHead(200, {
      "Content-Type": contentType,
      "X-Content-Type-Options": "nosniff"
    });

    if (req.method === "HEAD") {
      return res.end();
    }

    const stream = fs.createReadStream(filePath);

    stream.on("error", () => {
      if (!res.headersSent) {
        res.writeHead(500);
      }
      res.end("Internal Server Error");
    });

    stream.pipe(res);
  });
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`VIDYORA server running on port ${PORT}`);
});
