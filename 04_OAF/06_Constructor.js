// 생성자 함수
function Card(suit, rank) {
    this.suit = suit;
    this.rank = rank;
};

var card_a = new Card("하트", "A");
var card_b = new Card("다이아", "4");

console.log(card_a);        // Card { suit: '하트', rank: 'A' }
console.log(card_b);        // Card { suit: '다이아', rank: '4' }

// 메서드를 가진 객체를 생성하는 생성자
function Circle(center, radius) {
    this.center = center;
    this.radius = radius;
    this.area = function() {
        return this.radius * this.radius * Math.PI;
    };
};

var p = {x: 0, y: 0};
var c = new Circle(p, 4)
console.log(c.area())       // 50.26548245743669