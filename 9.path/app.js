/**
 * 파일시스템에 접근하는 방법
 * OS별로 다름 (window, mac ,linux)
 */

const path = require("path");

console.log(__dirname); // /Users/gongtaemin/Documents/dream-coding/node/9.path
console.log(__filename); // /Users/gongtaemin/Documents/dream-coding/node/9.path/app.js
console.log(path.sep); // '/' 현재 운영체제의 구분자
console.log(path.delimiter); // ':' 환경변수 구분자

console.log(path.basename(__filename)); // app.js
console.log(path.basename(__filename, ".js")); // app

console.log(path.dirname(__filename)); // /Users/gongtaemin/Documents/dream-coding/node/9.path (디렉토리 정보)
console.log(path.extname(__filename)); // '.js' (확장자 정보)

const parsed = path.parse(__filename); // 모든 정보가져오기
console.log(parsed);
// {
//     root: '/',
//     dir: '/Users/gongtaemin/Documents/dream-coding/node/9.path',
//     base: 'app.js',
//     ext: '.js',
//     name: 'app'
//   }

const str = path.format(parsed); // obejct다 합치기
console.log(str); // /Users/gongtaemin/Documents/dream-coding/node/9.path/app.js

// 절대경로의 여부
console.log(path.isAbsolute(__dirname)); //true
console.log(path.isAbsolute("../")); // false

// 경로를 똑바로 고쳐줌
console.log(path.normalize("./myforder//////sub")); // myforder/sub

// 인자를 넣으면 자동으로 운영체제에 맞는 path로 조합해줌
console.log(path.join(__dirname, "kong")); // /Users/gongtaemin/Documents/dream-coding/node/9.path/kong
