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
