const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Hello World</h1>");
    res.end();
  }

  if (req.url === "/api/courses") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify({ courses: [1, 2, 3] }));
  }

  res.end();
});

const PORT = 5000;
server.listen(PORT);
console.log(`Server running on port ${PORT}`);
