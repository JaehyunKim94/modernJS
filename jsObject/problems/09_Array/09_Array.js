var Arr1 = ["red", "orange", "yellow"];
var Arr2 = new Array("green", "blue");
var Arr3 = new Array(5); // 크기가 5인 배열 생성

console.log(Arr1); // [ 'red', 'orange', 'yellow' ]
console.log(Arr2); // [ 'green', 'blue' ]
console.log(Arr3); // [ <5 empty items> ]

console.log(Arr1[0], Arr2[1], Arr3[2]); // red blue undefined

Arr1[5] = "navy"; // 5번 색인까지 값을 만들고, 넣는다.
console.log(Arr1, Arr1.length); // [ 'red', 'orange', 'yellow', <2 empty items>, 'navy' ] 6
Arr1.length = 10; // 배열의 크기 설정 (설정한 길이만큼 요소 생성)
console.log(Arr1, Arr1.length); // [ 'red', 'orange', 'yellow', <2 empty items>, 'navy', <4 empty items> ] 10
Arr1.length = 2; // 배열의 크기 설정 (설정한 길이만큼 남기고 제거)
console.log(Arr1, Arr1.length); // [ 'red', 'orange' ] 2

var myArr = [[[[1, 2], 3, 4], 5, 6], 7, 8];
console.log(myArr[0], myArr[0][0], myArr[0][0][0], myArr[0][0][0][0]);  // [ [ [ 1, 2 ], 3, 4 ], 5, 6 ] [ [ 1, 2 ], 3, 4 ] [ 1, 2 ] 1