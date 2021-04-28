var Person = function (name) {
  this.name = name || "jaehyun"; // this는 만들어질 인스턴스를 참조
};
var jaehyun = new Person("Jaehyun Kim");
var person = new Person();

console.log(jaehyun.name); // Jaehyun Kim
console.log(person.name); // jaehyun

var jh = Person("JH Kim"); // jh는 undefined, name값은 window.name에 설정
// Uncaught TypeError: Cannot read property "name" of undefined
// console.log(jh.name);
console.log(window.name); // JH Kim
