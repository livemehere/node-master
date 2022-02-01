const http = require("http");

const data = {
  name: "kong",
  age: 25,
};
const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url == "/data") {
    if (method == "GET") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(data)); //한번만 응답할거라면 end의 파라미터에 전송할것을 넣어주면됨
    }
  }
});

server.listen(8080);
