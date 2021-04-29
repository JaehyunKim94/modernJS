class Dog {
  constructor(gender, age) {
    this.gender = gender;
    this.age = age;
    this.cute = true;
  }
  bark() {
    console.log("월월");
  }
}

let milk = new Dog("male", 3);
let mocha = new Dog("male", 1);
let danchu = new Dog("female", 2);
