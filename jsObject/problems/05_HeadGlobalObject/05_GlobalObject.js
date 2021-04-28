var myStringVar = "myStringVar";
var myFunctionVar = function () {};
myString = "myString";
myFunction = function () {};
console.log("myStringVar" in window); // true
console.log("myFunctionVar" in window); // true
console.log("myString" in window); // true
console.log("myFunction" in window); // true
