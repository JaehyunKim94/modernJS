// 1. 복합 객체는 참조에 의해 저장되고, 조작된다.
var myObject = {};
var copyMyObject = myObject;

myObject.foo = "bar";

// 두 변수 모두 foo 속성을 갖고 있다는 것을 알 수 있는데 이는 같은 객체를 참조했기 떄문
console.log(myObject.foo, copyMyObject.foo);


// 2. 복합 객체의 참조 비교
var objectFoo = {same: "same"};
var objectBar = {same: "same"};
var objectCopy = objectFoo;
console.log(objectFoo === objectBar);   // false
console.log(objectFoo === objectCopy);  // true


// 3. 복합 객체는 동적 속성을 포함한다.
var objectCopy2 = objectCopy;
objectCopy2.same = null;
console.log(objectFoo.same, objectCopy.same, objectCopy2.same); // null null null