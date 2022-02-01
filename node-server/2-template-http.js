const http = require("http");
const fs = require("fs");
const ejs = require("ejs");

const name = "kong";
const server = http.createServer((req, res) => {
  const url = req.url;

  if (url == "/") {
    ejs
      .renderFile(__dirname + "/templates/index.ejs", {
        name,
      })
      .then((data) => {
        res.end(data);
      });
  }
});

server.listen(8080);
