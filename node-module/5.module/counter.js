let count = 0;

function increase() {
  count++;
}
function decrease() {
  count--;
}

function getCount() {
  return count;
}

/**
 * 만약 그냥 count를 내보내고 사용하면 -> 값이 변하지않음
 * 모듈화 되있어서 그런듯?
 *
 * exports => module.exports 를 참조하고있다. (exports에 직접 값을 할당하는 순간 참조 관계가 끊긴다)
 *  */
export { increase, decrease, getCount };
