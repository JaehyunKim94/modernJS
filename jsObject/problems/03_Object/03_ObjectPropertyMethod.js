// 객체 리터럴을 사용한 Object 객체 생성
var obj = {
  living: true,
  age: 28,
  gender: "male",
};

// // 인스턴스 속성
// console.log(obj.constructor);

// // 인스턴스 메소드
// console.log(obj.hasOwnProperty("name"));
// console.log(obj2.isPrototypeOf(obj));
// console.log(obj.propertyIsEnumerable());
// console.log(obj.toLocaleString());
// console.log(obj.toString());
// console.log(obj.valueOf("name"));

// Object.prototype의 상속
Object.prototype.test = "test";
var myStr = "string";
console.log(myStr.test);
