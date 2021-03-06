var myNumber = new Number(23);
var myNumberLiteral = 23;

var myString = new String("male");
var myStringLiteral = "male";

var myBoolean = new Boolean(true);
var myBooleanLiteral = true;

var myObject = new Object();
var myObjectLiteral = {};

var myArray = new Array("foo", "bar");
var myArrayLiteral = ["foo", "bar"];

var myFunction = new Function("x", "y", "return x*y");
var myFunctionLiteral = function (x, y) {
  return x * y;
};

var myDate = new Date();

var myRegExp = new RegExp("\bt[a-z]+\b");
var myRegExpLiteral = /\bt[a-z]+\b/;

var myError = new Error("crap!");

console.log(myNumber.constructor, myNumberLiteral.constructor);
console.log(myString.constructor, myStringLiteral.constructor);
console.log(myBoolean.constructor, myBooleanLiteral.constructor);
console.log(myObject.constructor, myObjectLiteral.constructor);
console.log(myArray.constructor, myArray.constructor);
console.log(myFunction.constructor, myFunctionLiteral.constructor);
console.log(myDate.constructor);
console.log(myRegExp.constructor, myRegExpLiteral.constructor);
console.log(myError.constructor);
