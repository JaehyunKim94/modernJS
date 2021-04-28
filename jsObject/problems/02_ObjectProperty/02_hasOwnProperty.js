var myObject = { foo: "bar" };

console.log(myObject.hasOwnProperty("foo")); // true
console.log(myObject.hasOwnProperty("toString")); // false
console.log("toString" in myObject); // true (프로토타입 체인에서 상속받은 속성까지 확인)
