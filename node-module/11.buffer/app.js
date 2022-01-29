// Buffer ? 고정된 메모리 사이즈
// 숫자의 배열이다.
// 데이터의 바이트 그자체
const fs = require("fs"); // js파일에서 자동완성이되지않을때, 파일하나를 require하면 노드환경으로 인식함

const buf = Buffer.from("hi");
console.log(buf); //<Buffer 68 69> : 유니코드
console.log(buf.length); //2
console.log(buf[0]); //104 아스키코드
console.log(buf[1]); //105 아스키코드
console.log(buf.toString()); //hi utf-8 (default)

//create
const buf2 = Buffer.alloc(2); // 메모리공간을 가져와서 초기화함
const buf3 = Buffer.allocUnsafe(2); // 빠르지만, 메모리를 초기화하지않고 그냥 2개의 공간만가져옴, 이미있는데이터가 가져와질수도있음
buf2[0] = 72;
buf2[1] = 105;
console.log(buf2); //<Buffer 48 69>
console.log(buf2.toString()); //Hi

console.log(buf3); //<Buffer 00 00> or <Buffer 73 ab> ... 랜덤임.. 아무거나가져오는것임!

buf2.copy(buf3); //복사 buf2의 내용을 buf3으로 복사한다.
console.log(buf3.toString()); //Hi

//concat
const newBuf = Buffer.concat([buf, buf2, buf3]);
console.log(newBuf); //<Buffer 68 69 48 69 48 69>
console.log(newBuf.toString()); //hiHiHi
