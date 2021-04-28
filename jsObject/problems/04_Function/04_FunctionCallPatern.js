// 함수 패턴
var myFunc = function () {
  return "foo";
};
console.log(myFunc());

// 메소드 패턴
var myObj = {
  myFunction: function () {
    return "bar";
  },
};
console.log(myObj.myFunction());

// 생성자 패턴
var Dog = function (name, age) {
  this.name = name;
  this.age = age;
};
var dog = new Dog("badook", 2);
console.log(dog);

// apply() call() 패턴
var greet = {
  runGreet: function () {
    console.log(this.name, arguments[0], arguments[1]);
  },
};
var cody = { name: "cody" };
var lissa = { name: "lissa" };

greet.runGreet.apply(cody, ["foo", "bar"]);
greet.runGreet.call(lissa, "foo", "bar");
