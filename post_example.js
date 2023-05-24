const http = require("http");
const url = require("url");
let body = "";
const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`
      <form method="POST" action="/results">
        <input type="text" name="search" />
        <button type="submit">Submit</button>
      </form>
      `);
    res.end();
  }

  if (req.url === "/results" && req.method === "POST") {
    console.log("POST request");
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      res.writeHead(303, { "Content-Type": "text/html", Location: "/results" });
      res.end();
    });
  }
  if (req.url === "/results" && req.method === "GET") {
    if (!body) {
      res.write("No search");
      res.end();
      return;
    }
    res.write(`
        <h1>Searched for:</h1>
        <p>${body}</p>
    `);
    res.end();
  }
});

const PORT = 5000;
server.listen(PORT);
console.log(`Server running on port ${PORT}`);
