var myNull = null;
var myUndefined = undefined;
var primitiveString1 = "foo";
var primitiveString2 = String("foo");
var primitiveNumber1 = 10;
var primitiveNumber2 = Number(10);
var primitiveBoolean1 = true;
var primitiveBoolean2 = Boolean(true);

console.log(primitiveString1.toString(), primitiveString2.toString());
console.log(primitiveNumber1.toString(), primitiveNumber2.toString());
console.log(primitiveBoolean1.toString(), primitiveBoolean2.toString());

/* null과 undefined는 객체로 변환되지 않으며 생성자도 없다.
console.log(myNull.toString());
console.log(myUndefined.toString());
*/
