var Person = function Person(living, age, gender) {
  this.living = living;
  this.age = age;
  this.gender = gender;
  this.getGender = function () {
    return this.gender;
  };
};

var cody = new Person(true, 33, "male");
console.log(typeof cody); // 출력: object
console.log(cody); // 출력: Person { living: true, age: 23, gender: 'male', getGender: [Function (anonymous)] }
console.log(cody.constructor); // 출력: [Function: Person]
