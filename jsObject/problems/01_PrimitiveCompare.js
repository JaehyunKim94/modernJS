var price1 = 10;
var price2 = 10;
var price3 = new Number('10');  // 복합객체
var price4 = price3;

console.log(price1 === price2);     // true
console.log(price1 === price3);     // false (price3는 복합 객체를 포함하고 있으나 price1은 원시값)
console.log(price4 === price3);     // true (복합 객체는 참조값을 비교)

price4 = 10;

console.log(price4 === price3);     // false (price4가 원시값이기 때문)