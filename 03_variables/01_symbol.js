var sym1 = Symbol();
var sym2 = Symbol();

console.log(sym1==sym2);    // false
var FUN = Symbol("재미")
console.log(FUN.toString())     // Symbol(재미)