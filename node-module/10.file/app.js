const fs = require("fs");

// 파일을 다루는 API는 fs모듈에서 모두 제공된다
// renameSync는 동기작업임으로 try, catch 사용
try {
  fs.renameSync("./10.file/test.txt", "./10.file/new.txt");
} catch (error) {
  console.log(error);
}

//rename은 비동기작업임으로 3번째 인자로 error를 받는 callback 등록
fs.rename("./10.file/new.txt", "./10.file/kong.txt", (error) => {
  console.log(error); //null
});

// promise 제공
fs.promises
  .rename("./10.file/kong.txt", "./10.file/hajihyung.txt")
  .then(() => console.log(done))
  .catch((error) => console.log(error));
