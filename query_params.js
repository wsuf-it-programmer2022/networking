const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`
      <form method="GET" action="/results">
        <input type="text" name="search" />
        <button type="submit">Submit</button>
      </form>
      `);
    res.end();
  }

  if (req.url.startsWith("/results")) {
    const query = url.parse(req.url, true).query;
    console.log(query);
    if (query?.search) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(`<h1>Search results for ${query.search}</h1>`);
    }
    res.end();
  } else {
    res.writeHead(404);
    res.end();
  }

  res.end();
});

const PORT = 5000;
server.listen(PORT);
console.log(`Server running on port ${PORT}`);
