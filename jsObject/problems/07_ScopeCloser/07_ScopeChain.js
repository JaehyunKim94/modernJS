var x = 10;
var foo = function () {
  var y = 20;
  var bar = (function () {
    var z = 30;
    console.log(x + y + z); // z 는 지역 스코프에서, x와 y는 스코프 체인에서 찾는다.
  })();
};

foo();

var a = 1;
var boo = function () {
  var a = 2;
  var car = (function () {
    var a = 3;
    console.log(a); // 3
  })();
};

boo();
