var arr1 = [];
console.log(arr1);          // []

// 리터럴 여소의 값을 생략하면 그 요소는 생성되지 않는다.
var arr2 = [2, 4, , , 5];
console.log(arr2)           // [ 2, 4, <2 empty item>, 5 ]

// 모든 타입의 값이 올 수 있다.
var arr3 = [3.14, "pi", true, {x: 1, y:2}, [1, 2, 3, 4]];
console.log(arr3)           // [ 3.14, 'pi', true, { x: 1, y: 2 }, [ 1, 2, 3, 4 ] ]

// length 프로퍼티
var arr4 = [1, 2, 3, 4];
console.log(arr4)           // [ 1, 2, 3, 4 ]       
arr4.length = 2;
console.log(arr4)           // [ 1, 2 ]

// Array 생성자
var arr5 = new Array(2, 4, 5, 6);
var arr6 = new Array();
var arr7 = new Array("hi", 5, {x:1, y:5}, [3, 5]);
console.log(arr5);          // [ 2, 4, 5, 6 ]
console.log(arr6);          // []
console.log(arr7);          // [ 'hi', 5, { x: 1, y: 5 }, [ 3, 5 ] ]

// 특정 길이의 배열 생성
var arr8 = new Array(5);    // 5
console.log(arr8.length);
console.log(arr8);          // [ <5 empty items> ]

// 배열의 요소 참조
var arr9 = ["A", "B", "C", "D"]
console.log(arr9[2]);       // C
console.log(arr9["2"]);     // C
console.log(arr9[4]);       // undefined

// 배열 요소의 추가(push)와 삭제(delete)
var arr10 = ["a", "b", "c"];
arr10[5] = "f";
console.log(arr10);         // [ 'a', 'b', 'c', <2 empty items>, 'f' ]
console.log(arr10[4]);      // undefined
arr10.push("g");            // push 메서드
console.log(arr10);         // [ 'a', 'b', 'c', <2 empty items>, 'f', 'g' ]
delete arr10[1];            // delete 연산자
console.log(arr10);         // [ 'a', <1 empty item>, 'c', <2 empty items>, 'f', 'g' ]

// 희소배열
var arr11 = ["a", "b", "c", "d"];
arr11[6] = "z";
console.log(arr11);         // [ 'a', 'b', 'c', 'd', <2 empty items>, 'z' ]
console.log(arr11.length);  // 7
for (var i in arr11) console.log(i);    // 0, 1, 2, 3, 6
console.log(arr11.hasOwnProperty("5")); // false
console.log(arr11.hasOwnProperty("6")); // true
