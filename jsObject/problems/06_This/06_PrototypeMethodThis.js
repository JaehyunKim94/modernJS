var Person = function (x) {
  if (x) {
    this.fullName = x;
  }
};

Person.prototype.getFullName = function () {
  return this.fullName;
};

var cody = new Person("cody lindley");  // 상속한 getFullName 메소드를 호출, this는 해당 인스턴스를 참조
var lisa = new Person("lissa lindley");

console.log(cody.getFullName(), lisa.getFullName());