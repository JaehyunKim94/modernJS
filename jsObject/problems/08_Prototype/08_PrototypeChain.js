Array.prototype.foo = "foo";

var myArray = new Array();
console.log(myArray.__proto__.foo)  // myArray.__proto__ == Array.prototype (__proto__를 사용할 수 있는 브라우저에서만 작동)
console.log(myArray.constructor.prototype.foo); // foo

Object.prototype.foo = "bar";
console.log(myArray.foo);   // foo > Array.prototype 에서 찾은 foo 출력