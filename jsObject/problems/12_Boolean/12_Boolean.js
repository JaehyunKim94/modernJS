// 복합 객체
var myBool1 = new Boolean(false);
console.log(myBool1); // [Boolean: false]
console.log(typeof myBool1); // object

if (myBool1) {
  console.log("false 복합 객체는 true이다.");
}

// 리터럴/원시값
var myBool2 = Boolean(false);
console.log(myBool2); // false
console.log(typeof myBool2); // boolean

// 리터럴/원시값
var myBool3 = false;
console.log(myBool3); // false
console.log(typeof myBool3); // boolean

// 0, -0, null, false, NaN, undefined, 빈문자열("") 은 false
var myBool4 = Boolean(undefined);
console.log(myBool4); // false

// 나머지는 true
var myBool5 = Boolean(Math);
console.log(myBool5); // true
