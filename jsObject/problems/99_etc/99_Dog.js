// 객체 선언
var Dog = function (gender, name, age) {
  this.gender = gender;
  this.name = name;
  this.age = age;
  this.legs = 4;
  this.status = "normal";
  this.bark = function () {
    return "월월";
  };
};

var mocha = new Dog("female", "mocha", 2);

console.log("***** 강아지 모카의 정보 *****");
for (var key in mocha) {
  var value = mocha[key];
  console.log(key + ": " + value);
}
console.log("***********************************");
console.log();

// 상속 1, 2
var TrainedDog = function (teacher, gender, name, age) {
  //   Dog.call(this, gender, name, age); // 프로토타입 설정방법 2

  this.teacher = teacher;
  this.sitdown = function () {
    this.status = "sitdown";
    return "앉아";
  };
  this.wait = function () {
    this.status = "on waiting";
    return "기다려";
  };
  this.goodjob = function () {
    this.status = "normal";
    return "잘했어";
  };
};

var cookie = new TrainedDog("jaehyun", "male", "milk", 3);

console.log("***** 훈련된 강아지 쿠키의 정보 *****");
for (var key in cookie) {
  var value = cookie[key];
  console.log(key + ": " + value);
}
console.log("***********************************");
console.log();

// 상속 3
var TrainingdDog = function (teacher) {
  this.teacher = teacher;
  this.sitdown = function () {
    this.status = "sitdown";
    return "앉아";
  };
  this.wait = function () {
    this.status = "on waiting";
    return "기다려";
  };
  this.goodjob = function () {
    this.status = "normal";
    return "잘했어";
  };
};

var latte = new TrainingdDog("kang");
Object.setPrototypeOf(latte, new Dog("female", "latte", 2)); // 프로토타입 설정방법 3

console.log("***** 훈련된 강아지 라떼의 정보 *****");
for (var key in latte) {
  var value = latte[key];
  console.log(key + ": " + value);
}
console.log("***********************************");