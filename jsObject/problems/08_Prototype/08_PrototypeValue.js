var Foo = function () {};
Foo.prototype.x = 1;

var FooInstance = new Foo();
console.log(FooInstance.x); // 1

// prototype의 속성을 갱신
Foo.prototype.x = 2;
console.log(FooInstance.x); // 2

// prototype 속성을 새 객체로 대체
Foo.prototype = { x: 3 };
console.log(FooInstance.x); // 2 -> 이전에 만든 인스턴스는 갱신되지 않음

var NewFooInstance = new Foo();
console.log(NewFooInstance.x); // 3 -> 새로 만든 인스턴스는 새로운 prototype 적용
