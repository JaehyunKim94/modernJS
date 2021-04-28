var countUp = (function () {
  var count = 0;
  return function () {
    return ++count;
  };
})();
// countUp 함수를 실행할 대 마다 자신을 포함했던 부모 함수의 스코프에 접근
console.log(countUp()); // 1
console.log(countUp()); // 2
console.log(countUp()); // 3
