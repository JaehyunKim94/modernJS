// 객체 생성
var card = { suit: "heart", rank: "A"};

console.log(card.suit);		// heart
console.log(card["rank"]);	// A
console.log(card.random);    // undefined

// 프로퍼티 생성
card.value = 20;
console.log(card);           // { suit: 'heart', rank: 'A', value: 20 }

// 프로퍼티 삭제
delete card.value;
console.log(card);

// 프로퍼티 조회
console.log("suit" in card);     // true
console.log("value" in card);    // false
console.log("toString" in card); // true

// 객체 참조
var a = card;
console.log(card.suit);         // heart
a.suit = "diamond";             
console.log(a.suit);            // diamond
console.log(card.suit);         // diamond