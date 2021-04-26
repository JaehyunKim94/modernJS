// 객체 생성
var obj = new Object();

// 객체 속성 채우기
obj.name = 'jaehyun';
obj.age = 28;
obj.male = true;

// 메소드 속성 추가
obj.getName = function() {return obj.name};

console.log(obj);
console.log(obj.getName());     // 출력: jaehyun
console.log(obj.constructor);   // 출력: Object

