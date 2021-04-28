var foo = "bar"; // foo는 전역 객체이자 window 머리 객체의 속성
var myFunc = function () {
  var run = (function () {
    console.log(foo); // 스코프 체인을 통해 머리객체에서 foo를 가져옴
  })();
};
myFunc();