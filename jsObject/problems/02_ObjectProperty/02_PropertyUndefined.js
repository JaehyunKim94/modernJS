// myArray는 배열 객체이다.
var myArray = ["foo", "bar"];
// 참조 순서: myArray -> Array.prototype -> Object.prototype
console.log(myArray.foo); // undefined
// join()은 Array.prototype.join으로 정의되어 있다.
console.log(myArray.join()); // foo, bar
// toLocaleString()은 Object.prototype.toLocaleString으로 정의되어있다.
console.log(myArray.toLocaleString()); // foo, bar
