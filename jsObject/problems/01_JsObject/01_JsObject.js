// Object 객체 생성
var obj = new Object();

// 객체 속성 채우기
obj.name = "jaehyun";
obj.age = 28;
obj.male = true;

// 메소드 속성 추가
obj.getName = function () {
  return obj.name;
};

console.log(obj); //출력: { name: 'jaehyun', age: 28, male: true, getName: [Function (anonymous)] }
console.log(obj.getName()); // 출력: jaehyun
console.log(obj.constructor); // 출력: [Function: Object]

var myObj = new Object();
myObj["0"] = "f";
myObj["1"] = "o";
myObj["2"] = "o";
console.log(myObj); //출력: { '0': 'f', '1': 'o', '2': 'o' }

var myString = new String("foo"); // 문자열 객체의 인스턴스를 만들어 myString 변수에 저장
console.log(myString); // 출력: [String: 'foo']
