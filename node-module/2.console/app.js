// log level
console.log("log"); //개발
console.info("info"); //정보
console.warn("warn"); // 경보
console.error("error"); // 에러, 사용자에러, 시스템에러

// assert (앞의 조건이 false일 경우만 출력)
console.assert(2 === 3, "not same!");
console.assert(2 === 2, "same!");

// print object
let student = { name: "kong", age: "25", company: { addr: "AC" } };
console.log(student); //{ name: 'kong', age: '25', company: { addr: 'AC' }
console.table(student);
console.dir(student, { depth: 0 }); //{ name: 'kong', age: '25', company: [Object] }

// measuring time 시간측정하기
console.time("for loop");
for (let i = 0; i < 10; i++) {}
console.timeEnd("for loop"); //for loop: 0.092ms

// counting
function a() {
  console.count("a function"); //호출된 횟수를 출력
}
a();
a();
a();

// trace
function f1() {
  f2();
}
function f2() {
  f3();
}
function f3() {
  console.trace(); // 호출스택을 알려줌
}

f1();
/**
 * Trace
    at f3 (/Users/gongtaemin/Documents/dream-coding/node/1-global/app.js:39:11)
    at f2 (/Users/gongtaemin/Documents/dream-coding/node/1-global/app.js:36:3)
    at f1 (/Users/gongtaemin/Documents/dream-coding/node/1-global/app.js:33:3)
    at Object.<anonymous> (/Users/gongtaemin/Documents/dream-coding/node/1-global/app.js:42:1)
    at Module._compile (internal/modules/cjs/loader.js:1072:14)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1101:10)
    at Module.load (internal/modules/cjs/loader.js:937:32)
    at Function.Module._load (internal/modules/cjs/loader.js:778:12)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:76:12)
    at internal/main/run_main_module.js:17:47
 */
