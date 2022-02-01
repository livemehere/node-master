const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url == "/") {
    fs.createReadStream(__dirname + "/html/index.html").pipe(res);
  }
});

server.listen(8080);
