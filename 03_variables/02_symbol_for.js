var sym1 = Symbol.for("club")
var sym2 = Symbol.for("club")
console.log(sym1 == sym2)       // true

/*
Symbol.for()를 활용하면 어디서나 같은 Symbol을 공유할 수 있습니다.
심벌과 연결된 문자열은 Symbol.keyFor()로 구할 수 있습니다.
*/
var sym1 = Symbol.for("club")
var sym2 = Symbol("club")
console.log(Symbol.keyFor(sym1))    // club
console.log(Symbol.keyFor(sym2))    // undefined