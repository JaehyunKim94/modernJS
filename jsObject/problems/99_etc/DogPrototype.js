var Dog = function (gender, age) {
  this.gender = gender;
  this.age = age;
  this.cute = true;
  this.bark = function () {
    console.log("월월");
  };
};
/*
var TrainedDog = function (gender, age, teacher) {
  this.gender = gender;
  this.age = age;
  this.cute = true;
  this.bark = function () {
    console.log("월월");
  };
  this.teacher = teacher;
  this.sitdown = function () {
    return "앉아";
  };
  this.wait = function () {
    return "기다려";
  };
};
*/

var TrainedDog = function (gender, age, teacher) {
  Dog.call(this, gender, age);
  //   Dog.apply(this, arguments);
  //   this.__proto__ = new Dog(gender, age);
  this.teacher = teacher;
  this.sitdown = function () {
    return "앉아";
  };
  this.wait = function () {
    return "기다려";
  };
};

var hayang = new TrainedDog("female", 3, "kang");
for (var key in hayang) {
  if (hayang.hasOwnProperty(key)) {
    console.log(key, hayang[key]);
  }
}
