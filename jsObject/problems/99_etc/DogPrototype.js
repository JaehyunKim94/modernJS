/* 
var Dog = function (gender, age) {
  this.gender = gender;
  this.age = age;
  this.cute = true;
  this.bark = function () {
    console.log("월월");
  };
};

*/
// 일반 강아지 생성자 함수
var Dog = function (gender, age) {
  this.gender = gender;
  this.age = age;
};

// 일반 강아지 프로토타입 설정
Dog.prototype.bark = function () {
  return "월월";
};
Dog.prototype.cute = true;

// 일반 강아지 객체 생성
var choco = new Dog("male", 2);
var milk = new Dog("female", 3);

// 훈련된 강아지 생성자 함수
var TrainedDog = function (gender, age, teacher) {
  Dog.call(this, gender, age);  // 부모 생성자에 접근해서 this값 정의
  this.teacher = teacher;
};

// 훈련된 강아지 프로토타입 설정
// Object.create(새로만들 객체): 지정된 프로토타입 객체 및 속성을 갖는 새로운 객체를 생성
TrainedDog.prototype = Object.create(Dog.prototype);  
TrainedDog.prototype.constructor = TrainedDog;  // constructor 재선언
TrainedDog.prototype.wait = function () {
  return "기다려";
};
TrainedDog.prototype.sitdown = function () {
  return "앉아";
};

// 훈련된 강아지 객체 생성
var latte = new TrainedDog("female", 1, "kang");

console.log(latte);
console.log(latte.wait());  // TrainedDog prototype 메소드
console.log(latte.bark());  // Dog prototype 메소드