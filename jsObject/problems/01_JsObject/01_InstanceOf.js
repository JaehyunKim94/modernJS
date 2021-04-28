var CustomConstructor = function () {
  this.foo = "bar";
}; // 사용자 정의 객체 생성자
var instanceOfCustomObject = new CustomConstructor(); // 인스턴스 생성

console.log(instanceOfCustomObject instanceof CustomConstructor);
console.log(new Array("foo") instanceof Array); // 네이티브 객체에서도 작동
