function hello() {
  console.log(this);
  console.log(this === global); //true
}
hello();

class A {
  constructor(num) {
    this.num = num;
  }
  sayThis() {
    console.log("--- class ---");
    console.log(this); // A클래스의 생성된 오브잭트
    console.log(this === global); //false
  }
}
const a = new A(1);
a.sayThis();

console.log(this); // {}
console.log(this === module.exports); //true

/**
 * node 환경에서는 global scope에서의 this 는 module exports 를 나타낸다
 *
 * 단, 함수 내에서의 this 는 global을 가르킨다
 *
 * browser환경에서는 function이든 global scope이든 window를 가르킨다
 */
