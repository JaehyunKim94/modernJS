// prototype의 기본 속성을 바꿀 경우
var Foo = function () {};
Foo.prototype = {};
var FooInstance = new Foo();

console.log(FooInstance.constructor === Foo); // false
console.log(FooInstance.constructor); // [Function: Object]

// prototype 값을 대체하지 않은 경우
var Bar = function () {};
var BarInstance = new Bar();

console.log(BarInstance.constructor === Bar); // true
console.log(BarInstance.constructor); // [Function: Bar]

// constructor 속성이 원래 생성자 함수를 올바르게 참조하게 수정
var Boo = function Boo() {};
Boo.prototype = { constructor: Boo };
var BooInstance = new Boo();

console.log(BooInstance.constructor === Boo); // true
console.log(BooInstance.constructor); // [Function: Boo]
