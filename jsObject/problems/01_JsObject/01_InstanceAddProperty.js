var myArray1 = [];
var myArray2 = new Array();
myArray1.prop = "test";
myArray2.prop = "test";

console.log(myArray1.prop, myArray2.prop); // test test

// 원시/리터럴 값에는 인스턴스 속성을 설정할 수 없다.
var myString = "string";
var myBoolean = true;
var myNumber = 10;

myString.prop = true;
myBoolean.prop = true;
myNumber.prop = true;

console.log(myString.prop, myBoolean.prop, myNumber.prop); // undefined undefined undefined
