// class 선언식
class Cat {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }
  // prototype method
  getName() {
    return this.name;
  }
}

// class 표현식
let Person = class Person {
  constructor(name, gender) {
    this.gender = gender;
    this.name = name;
  }
  // prototype method
  printInfo() {
    console.log("이름: " + this.name + "\t| 성별: " + this.gender);
  }
};

var gildong = new Person("홍길동", "남");
gildong.printInfo();

var latte = new Cat("라떼", "여");
console.log(`이름: ${latte.getName()}`);
