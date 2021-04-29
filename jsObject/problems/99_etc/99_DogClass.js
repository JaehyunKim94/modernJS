class Dog {
  constructor(gender, age) {
    this.gender = gender;
    this.age = age;
    this.cute = true;
  }
  bark() {
    return "월월";
  }
}

class TrainedDog extends Dog {
  constructor(gender, age, teacher) {
    super(gender, age);
    this.teacheer = teacher;
  }
  wait() {
    return "기다려";
  }
  sitdown() {
    return "앉아";
  }
}

let latte = new TrainedDog("female", 2, "kang");
console.log(latte.bark());
console.log(latte.cute);
console.log(TrainedDog.prototype.constructor);
console.log(TrainedDog.prototype.__proto__);