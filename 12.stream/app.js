const fs = require("fs");

//TODO: 스크림으로 읽기
const readStream = fs.createReadStream("./12.stream/file.txt", {
  highWaterMarkq: 8,
  encoding: "utf8",
});

// 한번읽을때마다 실행
readStream.on("data", (chunk) => {
  console.log(chunk);
});

//다읽으면 실행
readStream.on("end", (data) => {
  console.log("done");
});

//TODO: 스트림으로 쓰기
const writeStream = fs.createWriteStream("./12.stream/write.txt");
writeStream.on("finish", () => {
  console.log("write finish!");
});

writeStream.write("hello!");
writeStream.write("kong!");
writeStream.end();

//TODO: 파이핑하기 (스트림으로 읽어서, 스트림으로 쓰기)
const newWriteStream = fs.createWriteStream("./12.stream/pipFile.txt");
const piping = readStream.pipe(newWriteStream);
piping.on("finish", () => {
  console.log("pipe done :)");
});

//TODO: 압축 파이프라인 추가하기

// const zlib = require("zlib");
// const zipStream = zlib.createGzip();
// const newWriteStream = fs.createWriteStream("./12.stream/pipFile.zip");
// const piping = readStream.pipe(zipStream).pipe(newWriteStream);
// piping.on("finish", () => {
//   console.log("pipe done :)");
// });

//TODO: http서버에서 응답으로 stream으로 읽어서 전달하기

const http = require("http");
const server = http.createServer((req, res) => {
  const stream = fs.createReadStream("./12.stream/file.txt");
  stream.pipe(res);
});

// server.listen(3000);
