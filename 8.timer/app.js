console.log("code1");

console.time("setTimeout");
setTimeout(function () {
  console.timeEnd("setTimeout");
  console.log("setTimeout"); // 0이라고해도 그냥 0초는아님 2.xxx ms 정도는 걸린다!
}, 0); //타이머 있음

setImmediate(function () {
  console.log("setImmediate");
}); // 타이머없음

process.nextTick(function () {
  console.log("process next Tick");
});

console.log("code2");

/**
 * 우선순위
 * process.nextTick > setTimeout > setImmediate
 */
