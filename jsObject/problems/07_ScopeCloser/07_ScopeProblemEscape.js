// 스코프 문제 피하기
var foo = (function () {
  var boo = (function () {
    bar = 2;    // 전역 스코프 window.bar로 정의된다.
  })();
})();
console.log(bar);   // 전역 스코프의 bar

// doo는 boo 함수 스코프에만 존재
var foo = (function () {
  var boo = (function () {
    var doo = 2;
  })();
})();
// console.log(doo);   // doo is not defined
