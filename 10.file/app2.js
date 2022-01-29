const fs = require("fs").promises;

// 파일읽기 + 옵션
fs.readFile("./10.file/hajihyung.txt", "utf8")
  .then((res) => console.log(res)) //<Buffer 68 65 6c 6c 6f 20 6b 6f 6e 67 21>
  .catch((err) => console.log(err));

//파일 생성하기
fs.writeFile("./10.file/kong.txt", `hello\n, kong's\n friends!!`).catch((err) =>
  console.log(err)
);

// 같은이름으로 파일을쓰면 덮어써짐(통째로말고 앞에서부터 부분적으로 덮어써짐)
fs.writeFile("./10.file/kong.txt", `Yo!`).catch((err) => console.log(err));

// 덮어쓰지않고 추가하고 싶을때는..
fs.appendFile("./10.file/kong.txt", "추가된 거에요!").catch((err) =>
  console.log(err)
);

//파일복사하기.. 현재같은 경우 비동기적으로 이루어지기 때문에, 복사하면 빈파일만 복사된다. 그렇기때문에 쓰고난다음 .then에다가 해줘야 정상적으로 내용도 복사가 된다
fs.copyFile("./10.file/kong.txt", "./10.file/copy-kong.txt").catch((err) =>
  console.log(err)
);

// 폴더만들기
fs.mkdir("./10.file/subdir")
  .then(() => {
    fs.writeFile("./10.file/subdir/subtext.scv", "name,kong").catch(
      (err) => console.log
    );
  })
  .catch(console.log);

//폴더 목록 가져오기
fs.readdir("./10.file")
  .then((res) => {
    console.log(res);
  })
  .catch(console.log);
