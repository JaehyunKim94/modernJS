var Person = function () {
  this.legs = 2;
};
Person.prototype.arms = 2;

var Chef = function () {
  this.skill = "cook";
};
Chef.prototype = new Person();
var cody = new Chef();

console.log(cody.skill); // cook
console.log(cody.arms); // 2
console.log(cody.legs); // 2
