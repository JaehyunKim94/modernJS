var addNumA = new Function("num1", "num2", "return num1 + num2");
console.log(addNumA(2, 4)); // 6
// 리터럴 방식
var addNumB = function (num1, num2) {
  return num1 + num2;
};
console.log(addNumB(3, 3)); // 6

// 인스턴스 속성
var addNumC = function () {
  return arguments[0] + arguments[1]; // arguments
};
console.log(addNumB.constructor); // [Function: Function]
console.log(addNumB.length); // 2

// 인스턴스 메소드
console.log(addNumB.apply(null, [5, 5])); // 10
console.log(addNumB.call(null, 4, 4)); // 8
console.log(addNumB.toString()); // addnumB 출력
