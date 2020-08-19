// 함수 선언
function square(x) {
    return x * x;
};
console.log(square(3));         // 9

// 여러 개의 인수 받기
function dist(p, q) {
    var dx = p.x - q.x;
    var dy = p.y - q.y;
    return Math.sqrt(dx*dx+dy*dy);
};
p = {x:1, y:1};
q = {x:7, y:9};
console.log(dist(p, q))         // 10

// 원시값이 인수일 때
function add1(x) { return x + 1 };
var a = 3;
var b = add1(a);
console.log('a = ' + a + ' b = ' + b);      // a = 3 b = 4

// 객체가 인수일 때
function add2(p) {
    p.x = p.x + 2;
    p.y = p.y + 2;
    return p;
};
var c = {x:4, y:5};
var d = add2(c)
console.log(c, d);      // { x: 6, y: 7 } { x: 6, y: 7 }

// 인수가 여러 개일 경우, 객체의 프로퍼티에 인수를 담는다
function setProperties(parameters) {
    return parameters
};
var params = {
    x: 0,
    y: 0,
    radius: 4,
    vx: 10,
    vy: 13
};

