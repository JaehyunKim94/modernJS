// new 키워드를 사용하지 않고 만든 원시값
var primitiveString1 = "foo";
var primitiveString2 = String("foo");
var primitiveNumber1 = 10;
var primitiveNumber2 = Number(10);
var primitiveBoolean1 = true;
var primitiveBoolean2 = Boolean(true);

console.log(typeof primitiveString1, typeof primitiveString2);
console.log(typeof primitiveNumber1, typeof primitiveNumber2);
console.log(typeof primitiveBoolean1, typeof primitiveBoolean2);

// new 키워드를 사용해 만든 객체
var myNumber = new Number(10);
var myString = new String("male");
var myBoolean = new Boolean(false);
var myObject = new Object();
var myArray = new Array("foo", "bar");
var myFunction = new Function("x", "y", "return x * y");
var myDate = new Date();
var myRegExp = new RegExp("\\bt[a-z]+\\b");
var myError = new Error("crap!");

console.log(typeof myNumber, typeof myString, typeof myBoolean, typeof myObject);
console.log(typeof myArray, typeof myFunction, typeof myDate, typeof myRegExp, typeof myError);

// typeof는 함수 객체와 RegExp() 객체에 대해서는 항상 function을 반환한다.