class Rectangle {
  height = 0;
  #width = 0;
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
Rectangle.prototype.width = 25;
Rectangle.height = 30;

var recA = new Rectangle();
console.log(height);