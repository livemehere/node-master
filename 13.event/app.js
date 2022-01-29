const EventEmitter = require("events");
const emitter = new EventEmitter();

//이벤트 생성
emitter.on("kong", (args) => {
  console.log("first callback - ", args);
});
emitter.on("kong", (args) => {
  console.log("second callback - ", args);
});

//이벤트 호출
emitter.emit("kong", "hahah");
