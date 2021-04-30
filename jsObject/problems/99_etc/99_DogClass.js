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
    this.teacher = teacher;
  }
  wait() {
    return "기다려";
  }
  sitdown() {
    return "앉아";
  }
}

let wooyoo = new Dog("female", 2);
console.log(wooyoo);
let latte = new TrainedDog("female", 2, "kang");
console.log(latte);
console.log(TrainedDog.prototype);
