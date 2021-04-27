# 자바스크립트를 깨우치다



## 1. 자바스크립트 객체

##### **자바 스크립트는 거의 모든 것들이 객체이거나 객체처럼 동작한다.**

##### **객체는 속성을 담는 그릇이고, 속성은 이름과 값을 갖는다.**

```javascript
/* 01_JsObject.js */

// Object 객체 생성
var obj = new Object();

// 객체 속성 채우기
obj.name = "jaehyun";
obj.age = 28;
obj.male = true;

// 메소드 속성 추가
obj.getName = function () {
  return obj.name;
};

console.log(obj); //출력: { name: 'jaehyun', age: 28, male: true, getName: [Function (anonymous)] }
console.log(obj.getName()); // 출력: jaehyun
console.log(obj.constructor); // 출력: [Function: Object]

var myObj = new Object();
myObj["0"] = "f";
myObj["1"] = "o";
myObj["2"] = "o";
console.log(myObj);     //출력: { '0': 'f', '1': 'o', '2': 'o' }

var myString = new String("foo");   // 문자열 객체의 인스턴스를 만들어 myString 변수에 저장
console.log(myString);  // 출력: [String: 'foo']
```



##### **생성자는 객체 인스턴스를 생성하고 반환한다**

```javascript
/* 01_JsObjectConstructor.js */

var Person = function Person(living, age, gender) {
  this.living = living;
  this.age = age;
  this.gender = gender;
  this.getGender = function () {
    return this.gender;
  };
};

var cody = new Person(true, 33, "male");
console.log(typeof cody); // 출력: object
console.log(cody); // 출력: Person { living: true, age: 23, gender: 'male', getGender: [Function (anonymous)] }
console.log(cody.constructor); // 출력: [Function: Person]
```



##### 자바스크립트 네이티브(내장) 객체 생성자

- `Number()`, `String()`, `Boolean()`, `Object()`, `Array()`, `Function()`, `Date()`, `RegExp()`, `Error()`



##### `new` 연산자를 사용한 생성자 인스턴스 생성

- 생성자 함수와 `new` 연산자를 함께 사용하면 객체의 인스턴스를 얻을 수 있다. 
- [예시 코드](/problems/01_JsConstructorLiteral.js)



##### 리터럴을 사용한 값 생성하기

- 리터럴을 사용하면 `new` 연산자를 사용한 것과 동일한 효과를 볼 수 있다.
- [예시 코드](/problems/01_JsConstructorLiteral.js)
- 문자열, 숫자, 불리언 자료형에 대해 리터럴값을 사용하면 이 값을 객체처럼 다루기 전까지는 리터럴에 해당하는 복합객체가 만들어지지 않는다. (메소드를 사용하기 전까지는 원시 자료형을 다루는 셈)
  - 메소드/속성에 접근하면 자바스크립트는 먼저 리터럴값에 해당하는 래퍼(wrapper) 객체를 만들고 이를 통해 메소드나 속성에 접근한다. 이후, 래퍼 객체를 제거하고, 다시 값을 리터럴형으로 되돌린다.



##### 원시값과 복합객체

- 원시값(=단순값)

  - 더이상 단순화 할 수 없는 값으로, 다른 여러 값으로 구성된 값을 표현할 수 없다. 

  - ex) 5, 'foo', `true`, `false`, `null`, `undefined`

  - **리터럴 문법을 사용해서 값을 만들 때와는 달리 String(), Number(), Boolean() 값은 `new` 키워드를 사용해 만들며, 이렇게 만들어진 객체는 복합 객체이다.**

  - **원시값은 액면가 그대로 저장되고, 관리된다.** 

    ```javascript
    /* 01_PrimitiveSaveCopy */
    
    var myString = "foo";   // 문자열 객체 생성
    var myStringCopy = myString;    // 값 복사
    var myString = null;    // 값 수정
    console.log(myString, myStringCopy);    // null foo
    ```

  - 원시값은 값 자체를 비교한다

    ```javascript
    /* 01_PrimitiveCompare */
    
    var price1 = 10;
    var price2 = 10;
    var price3 = new Number('10');  // 복합객체
    var price4 = price3;
    
    console.log(price1 === price2);     // true
    console.log(price1 === price3);     // false (price3는 복합 객체를 포함하고 있으나 price1은 원시값)
    console.log(price4 === price3);     // true (복합 객체는 참조값을 비교)
    
    price4 = 10;
    
    console.log(price4 === price3);     // false (price4가 원시값이기 때문)
    ```

  - 문자열, 숫자, 불리언 원시갑을 객체처럼 사용하면 객체처럼 동작한다.

    ```javascript
    /* 01_PrimitiveMethod */
    
    var primitiveString1 = "foo";
    var primitiveString2 = String("foo");
    var primitiveNumber1 = 10;
    var primitiveNumber2 = Number(10);
    var primitiveBoolean1 = true;
    var primitiveBoolean2 = Boolean(true);
    
    console.log(primitiveString1.toString(), primitiveString2.toString());
    console.log(primitiveNumber1.toString(), primitiveNumber2.toString());
    console.log(primitiveBoolean1.toString(), primitiveBoolean2.toString());
    ```



- 복합 객체(=합성 객체)

  여러 값을 하나로 합친 합성체이며 여러 값을 복합적으로 구성할 수 있다는 점에서 원시값과 구별된다. 복합 객체는 여러 종류의 자바스크립트 객체로 구성되고, 어떤 값이든 포함할 수 있기 때문에 복합 객체가 메모리에서 차지하는 크기는 명확하지 않다.

  - **복합 객체는 참조(reference)에 의해 저장되고, 조작된다.**

    ```javascript
    /* 01_ComplexObject.js */
    
    var myObject = {};
    var copyMyObject = myObject;
    
    myObject.foo = "bar";
    
    // 두 변수 모두 foo 속성을 갖고 있다는 것을 알 수 있는데 이는 같은 객체를 참조했기 떄문
    console.log(myObject.foo, copyMyObject.foo);
    ```

  - 복합 객체는 참조를 비교한다.

    복합객체를 가리키는 변수들은 변수가 메모리에서 모두 하나의 __주소__를 가리키고 있을 때만 서로 같다고 판단한다.

    ```javascript
    /* 01_ComplexObject.js */
    
    var objectFoo = {same: "same"};
    var objectBar = {same: "same"};
    var objectCopy = objectFoo;
    console.log(objectFoo === objectBar);   // false
    console.log(objectFoo === objectCopy);  // true
    ```

  - 복합 객체는 동적 속성을 포함한다.

    복합 객체는 원한다면 얼마든지 참조를 가질 수 있는데, 설령 가리키던 객체가 수정되더라도 항상 같은 객체를 참조한다.

    ```javascript
    /* 01_ComplexObject.js */
    
    var objectFoo = {same: "same"};
    var objectCopy = objectFoo;
    var objectCopy2 = objectCopy;
    objectCopy2.same = null;
    console.log(objectFoo.same, objectCopy.same, objectCopy2.same); // null null null
    ```

    - 객체 수정

      ```javascript
      /* 01_ObjectModify.js */
      
      String.augmentedProperties = [];
      
      if(!String.prototype.trimIT) {
          String.prototype.trimIT = function() {
              return this.replace(/^\s+|\s+$/g, '');
          }
          String.augmentedProperties.push('trimIT');
      }
      var myString = " trim me    ";
      console.log(myString.trimIT());
      
      console.log(String.augmentedProperties.join());
      ```

  - 생성자 함수를 가리키는 속성 `constructor` 

    인스턴스를 만든 생성자 함수를 알 수 없는 경우, 이 속성을 사용하면 생성자 함수를 찾을 수 있다.

    ```javascript
    // 01_ConstructorProperty.js
    var foo = {};
    console.log(foo.constructor === Object);    // true
    console.log(foo.constructor);   // [Function: Object]
    ```

  - 객체가 특정 생성자 함수의 인스턴스인지 확인하는 연산자 `instanceof`

    주어진 객체가 특정 생성자 함수의 인스턴스인지 아닌지 확인할 수 있음 (`true` or `false` 리턴)

    ```javascript
    var CustomConstructor = function() {this.foo = "bar"};  // 사용자 정의 객체 생성자
    var instanceOfCustomObject = new CustomConstructor();   // 인스턴스 생성
    
    console.log(instanceOfCustomObject instanceof CustomConstructor);
    console.log(new Array("foo") instanceof Array); // 네이티브 객체에서도 작동
    ```

    



## 2. 객체와 속성 다루기

 

## 3. Object()



## 4. Function()



**중첩된 함수에서 `this`는 머리객체(예: 웹 브라우저의 window 객체)를 가리킨다**



## 5. 머리/전역 객체

자바스크립트는 머리 객체를 만들어 사용자가 정의한 코드를 캡슐화하거나 자바스크립트에 내장된 네이티브 코드를 감싼다. 또한, 자바스크립트는 사용자 정의 코드의 실행 영역을 머리 객체 내부로 제한한다. (웹 브라우저 환경에서는 `window`가 머리/전역 객체이다.)



## 6. this 키워드





## 7. 스코프와 클로저

스코프: 코드가 실행되는 컨텍스트로, 전역 스코프(global scope), 지역 스코프(local scope), eval 스코프로 구분된다.



## 8. 함수의 프로토타입





## 9. Array()

값을 순서대로 나열한 목록으로, 일반적으로는 0부터 시작하는 숫자 색인값을 통해 포함된 값을 훑을 목적으로 사용한다.



## 10. String()

문자열 객체와 문자열 원시값을 만들 때 사용한다.



## 11. Number()

숫자 객체와 숫자 원시값을 만들 때 사용한다.



## 12. Boolean()

불리언값 객체를 만들 때 사용한다.



## 13. 원시 문자열, 숫자, 불리언값 다루기





## 14. Null

객체 속성이 아무런 값도 가지고 있지 않음을 명시적으로 나타낼 때 사용한다.



## 15. Undefined

`undefined`를 사용하는 두 가지 방법

- 선언한 변수가 아무런 값도 가지고 있지 않은지 확인할 때 사용
- 접근한 객체의 속성이 정의되지 않았으며 프로토타입 체인에서도 찾을 수 없는지 확인할 때 사용

```javascript
var initializedVar;

console.log(initializedVar);	// undefined
console.log(type of initializedVar);

var foo = {}
console.log(foo.bar);
console.log(type of foo.bar);
```

**ECMAScript3 이상에서 `undefined`는 전역 변수로 선언된다.



## 16. Math 함수

`Math` 객체는 숫자를 수학적으로 다루거나 수학 상수를 제공하는 정적인 속성과 메소드를 포함하고 있다.

- 생성자 함수가 아니다(인스턴스로 만들 수 없다)
- Math 속성의 대부분의 값은 수정할 수 없는 상수(constant)다.



## 정리

- 객체는 값을 저장하는, 이름이 붙은 속성으로 구성된다.
- 자바스크립트에서 거의 모든 것들은 객체와 같이 동작한다.
- 객체는 new 키워드와 함께 생성자 함수를 호출하여 만들거나 리터럴 이라는 약식 표현을 사용해서 만든다.
- 생성자 함수는 객체이다. 
- 자바스크립트에는 총 9개의 내장 생성자 함수가 있다. 





## 99. etc...

##### `null`  vs `undefined`

- `undefined`: 데이터 타입이자 값을 나타냄(무언가 결여되어 있음을 나타냄)
- `null`: 데이터 타입이지만 값이 비어있음(다른 값이 와야하지만 아직 사용할 수 없는 경우)



##### `call()`, `apply()` (p.84)

- 함수에 매개변수를 전달하는 방식에 차이가 있다.
  - `call(func, param1, param2)`
  - `apply(func, [param1, param2])`



