class Point {
  // 생성자
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  // 프로토타입 메서드
  getInfo() {
    return `x좌표: ${this.x}, y좌표: ${this.y}`;
  }

  // 정적 속성
  static displayName = "Point";

  // 정적 메서드
  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    return Math.hypot(dx, dy);
  }
}

var pointA = new Point(1, 4);
var pointB = new Point(0, 2);

console.log(pointA.displayName); // undefined
console.log(pointB.distance); // undefined
console.log(Point.displayName); // Point
console.log(Point.distance(pointA, pointB)); // 2.23606797749979
