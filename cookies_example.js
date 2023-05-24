const http = require("http");
const parseCookies = require("./parse_cookies");

const server = http.createServer((req, res) => {
  console.log(req.headers);
  const cookies = parseCookies(req);
  if (cookies && cookies?.mycookie !== "test") {
    res.writeHead(200, {
      "Set-Cookie": "mycookie=test",
    });
  }

  res.write("Hello World");
  res.end();
});

const PORT = 5000;
server.listen(PORT);
console.log(`Server running on port ${PORT}`);
