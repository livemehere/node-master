# node-server

## 요청에대한 정보 보기

```js
const http = require("http");
// const http2 = require("http2"); //https에 적용됨

const server = http.createServer((req, res) => {
  console.log(req.method);
  console.log(req.headers);
  console.log(req.httpVersion);
  console.log(req.url);
  res.write("hello");
  res.end();
});

server.listen(8080);
```

## 기초골격

```js
const http = require("http");
// const http2 = require("http2"); //https에 적용됨

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url == "/") {
    res.write("home");
  } else if (url == "/about") {
    res.write("about");
  } else {
    res.write("not found");
  }

  res.end();
});

server.listen(8080);
```

## html 전송하기

```js
const http = require("http");
// const http2 = require("http2"); //https에 적용됨

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url == "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<h1>Hello home</h1>");
  } else if (url == "/about") {
    res.setHeader("Content-Type", "text/html");
    res.write("<h1>about</h1>");
  } else {
    res.setHeader("Content-Type", "text/html");
    res.write("<h1>not found</h1>");
  }

  res.end();
});

server.listen(8080);
```

## html 파일로 전송하기 (동기적)

```js
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url == "/") {
    const data = fs.readFileSync(__dirname + "/html/index.html", {
      encoding: "utf8",
    });
    res.write(data);
  }
  res.end();
});

server.listen(8080);
```

## html 파일 전송 (비동기)

```js
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url == "/") {
    fs.promises
      .readFile(__dirname + "/html/index.html", {
        encoding: "utf8",
      })
      .then((data) => {
        res.write(data);
        res.end();
      });
  }
});

server.listen(8080);
```

## stream으로 읽어서 보내기

```js
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url == "/") {
    const data = fs.createReadStream(__dirname + "/html/index.html", {
      encoding: "utf8",
    });
    data.on("data", (e) => {
      console.log(e);
      res.write(e);
    });
    data.on("end", () => {
      res.end();
    });
  }
});

server.listen(8080);
```

## stream으로 읽어서 pipe로 연결하기

```js
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url == "/") {
    fs.createReadStream(__dirname + "/html/index.html").pipe(res);
  }
});

server.listen(8080);
```

## EJS를 사용한 SSR

```js
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
```

### index.ejs

```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EJS</title>
</head>
<body>
    <h1>Welcome <%= name %></h1>
</body>
</html>
```
