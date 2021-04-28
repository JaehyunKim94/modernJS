// 함수 스코프
var foo = 1;
if (true) {
  foo = 2;
  for (var i = 3; i < 5; i++) {
    foo = i;
    console.log(foo); // 3  4
  }
  console.log(foo); // 4
  console.log(i); // 5 -> 함수 스코프
}
console.log(foo); // 4

// 블록 스코프
let bar = 1;
if (true) {
  for (let j = 0; j < 3; j++) {
    bar = j;
  }
  console.log(bar); // 2
  //   console.log(j);   // j is not defined -> 블록 스코프
}

