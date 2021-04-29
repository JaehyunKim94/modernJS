var milk = {
  gender: "male",
  age: 3,
  cute: true,
  bark: function () {
    console.log("왈왈");
  },
};
/* 
var mocha = {
  gender: "male",
  age: 1,
  cute: true,
};

var danchu = {
  gender: "female",
  age: 2,
  cute: true,
};

var hayang = {
  gender: "female",
  age: 9,
  cute: true,
};

var peanut = {
  gender: "male",
  age: 3,
  cute: true,
};

console.log(milk);
console.log(milk.gender); // 점표기법
console.log(milk["age"]); // 각괄호 표기법
*/

// 객체 생성
var milk = new Dog("male", 3);
var mocha = new Dog("male", 1);
var danchu = new Dog("female", 2);

// 생성자 함수
var Dog = function (gender, age) {
  this.gender = gender;
  this.age = age;
  this.cute = true;
  this.bark = function () {
    console.log("월월");
  };
};
