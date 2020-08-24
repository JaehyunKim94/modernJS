var circle = {
    center: {x: 1.0, y: 2.0},
    radius: 2.5,
    area: function () {
        return Math.PI * this.radius * this.radius;
    }
};
console.log(circle.area());     // 19.634954084936208

circle.translate = function(a, b) {
    this.center.x = this.center.x + a;
    this.center.y = this.center.y + b;
};
console.log(circle.center);     // { x: 1, y: 2 }
circle.translate(3, 4);
console.log(circle.center);     // { x: 4, y: 6 }
