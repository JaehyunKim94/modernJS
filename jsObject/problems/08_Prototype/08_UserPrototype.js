// 사용자 정의 생성자의 프로토타입 상속
var Person = function () {};
// 모든 Person 인스턴스는 legs, arms, countLimbs를 상속한다.
Person.prototype.legs = 2;
Person.prototype.arms = 2;
Person.prototype.countLimbs = function () {
  return this.legs + this.arms;
};

var chuck = new Person();
console.log(chuck.countLimbs()); // 4

// 전달된 매개변수가 없을 때, 프로토 타입에서 속성을 상속받는 생성자 함수
var Monkey = function (legs, arms) {
  // 프로토타입에서 상속받은 값을 가린다
  if (legs !== undefined) {
    this.legs = legs;
  }
  if (arms !== undefined) {
    this.arms = arms;
  }
};

Monkey.prototype.legs = 2;
Monkey.prototype.arms = 2;
Monkey.prototype.countLimbs = function () {
  return this.legs + this.arms;
};

var okong = new Monkey(0, 0);
console.log(okong.countLimbs()); // 0
