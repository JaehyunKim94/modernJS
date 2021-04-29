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
- [예시 코드](/problems/01_JsObject/01_JsConstructorLiteral.js)



##### 리터럴을 사용한 값 생성하기

- 리터럴을 사용하면 `new` 연산자를 사용한 것과 동일한 효과를 볼 수 있다.
- [예시 코드](/problems/01_JsObject/01_JsConstructorLiteral.js)
- 문자열, 숫자, 불리언 자료형에 대해 리터럴값을 사용하면 이 값을 객체처럼 다루기 전까지는 리터럴에 해당하는 복합객체가 만들어지지 않는다. (메소드를 사용하기 전까지는 원시 자료형을 다루는 셈)
  - 메소드/속성에 접근하면 자바스크립트는 먼저 리터럴값에 해당하는 래퍼(wrapper) 객체를 만들고 이를 통해 메소드나 속성에 접근한다. 이후, 래퍼 객체를 제거하고, 다시 값을 리터럴형으로 되돌린다.



##### 원시값과 복합객체

- 원시값(=단순값)

  - 더이상 단순화 할 수 없는 값으로, 다른 여러 값으로 구성된 값을 표현할 수 없다. 

  - ex) 5, 'foo', `true`, `false`, `null`, `undefined`

  - **리터럴 문법을 사용해서 값을 만들 때와는 달리 `String()`, `Number()`, `Boolean()` 값은 `new` 키워드를 사용해 만들며, 이렇게 만들어진 객체는 복합 객체이다.**

  - **원시값은 액면가 그대로 저장되고, 관리된다.** 

    ```javascript
    /* 01_PrimitiveSaveCopy.js */
    var myString = "foo";   // 문자열 객체 생성
    var myStringCopy = myString;    // 값 복사
    var myString = null;    // 값 수정
    console.log(myString, myStringCopy);    // null foo
    ```

  - 원시값은 값 자체를 비교한다

    ```javascript
    /* 01_PrimitiveCompare.js */
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
    /* 01_PrimitiveMethod.js */
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
    /* 01_ConstructorProperty.js */
    var foo = {};
    console.log(foo.constructor === Object);    // true
    console.log(foo.constructor);   // [Function: Object]
    ```

  - 객체가 특정 생성자 함수의 인스턴스인지 확인하는 연산자 `instanceof`

    주어진 객체가 특정 생성자 함수의 인스턴스인지 아닌지 확인할 수 있음 (`true` or `false` 리턴)

    ```javascript
    /* 01_InstanceOf.js */
    var CustomConstructor = function() {this.foo = "bar"};  // 사용자 정의 객체 생성자
    var instanceOfCustomObject = new CustomConstructor();   // 인스턴스 생성
    
    console.log(instanceOfCustomObject instanceof CustomConstructor);
    console.log(new Array("foo") instanceof Array); // 네이티브 객체에서도 작동
    ```

  - 생성자를 통해 만든 인스턴스에 인스턴스 속성 추가하기

    ```javascript
    /* InstanceAddProperty.js */
    var myArray1 = [];
    var myArray2 = new Array();
    myArray1.prop = "test";
    myArray2.prop = "test";
    
    console.log(myArray1.prop, myArray2.prop);  // test test
    
    // 원시/리터럴 값에는 인스턴스 속성을 설정할 수 없다.
    var myString = "string";
    var myBoolean = true;
    var myNumber = 10;
    
    myString.prop = true;
    myBoolean.prop = true;
    myNumber.prop = true;
    
    console.log(myString.prop, myBoolean.prop, myNumber.prop);  // undefined undefined undefined
    ```

**자바스크립트 객체와 `Object()` 객체의 의미

- 자바스크립트 객체: 자바스크립트의 모든 객체
- `Object()` 객체: 객체의 한 종류



## 2. 객체와 속성 다루기

- 자바스크립트는 수정 가능하다. 네이티브 객체이든 사용자가 정의한 객체이든 객체의 언제든 객체의 속성을 조작할 수 있다.
- 객체의 속성을 가져오고, 설정하고, 객신할 때는 점 표기법(dot notation) 또는 각괄호 표기법(bracket notation)을 사용한다.
  - 점 표기법: `ObjectName.property`
    - 가장 널리 사용되는 방법으로, 필요한 경우를 제외하고는 점 표기법이 사용된다.
  - 각괄호 표기법: `ObjectName['property']`
    - 각괄호 표기법을 사용하면 자바스크립트 식별자로 사용할 수 없는 속성 이름도 사용할 수 있다. 
- 객체 속성 삭제하기 `delete`
  - 속성을 제거하는 유일한 방법으로, 프로토타입 체인에 있는 속성을 제거하지는 않는다.

```javascript
/* 02_ObjectProperty.js */
var cody = {
  class: "foo",
  123: "zero",
};
cody.age = 28; // 점 표기법
cody["male"] = true; // 각괄호 표기법
var string1 = "ag";
var string2 = "e";
console.log(cody[string1 + string2]);

console.log(cody["class"], cody["123"]);
// console.log(cody.class, cody.123);   // 에러 발생 (class는 된다...)

delete cody["123"]; // 객체 속성 삭제
console.log("123" in cody); // false
```

- 객체 속성의 참조를 찾는 법

  - 접근한 속성이 객체에 포함되어 있지 않으면 자바스크립트는 항상 프로토타입 체인을 이용해 속성과 메소드를 찾는다. 

    ```javascript
    /* 02_PropertyUndefined */
    // myArray는 배열 객체이다.
    var myArray = ["foo", "bar"];
    // 참조 순서: myArray -> Array.prototype -> Object.prototype
    console.log(myArray.foo); // undefined
    // join()은 Array.prototype.join으로 정의되어 있다.
    console.log(myArray.join()); // foo, bar
    // toLocaleString()은 Object.prototype.toLocaleString으로 정의되어있다.
    console.log(myArray.toLocaleString()); // foo, bar
    ```

    - `join()` 메소드는 myArray의 것이 아니지만 myArray의 속성인 것 처럼 접속할 수 있다. >> **프로토타입 체인의 동작**
    - `prototype` 속성은 모두 객체이며 프로토타입 체인의 종점은 `Object.prototype`이다. 

- 객체의 속성 확인하기: `hasOwnProperty`& `in`

  - `in` 연산자를 사용하면 객체의 속성을 확인할 때 프로토타입 체인에서 상속받은 속성까지 포함해서 확인한다.
  - `hasOwnProperty` 메소드를 사용하면 객체의 속성이 프로토타입 체인에서 상속받지 않은 해당 객체의 고유한 것인지 확인한다.

  ```javascript
  /* 02_hasOwnProperty.js */
  var myObject = {foo: "bar"};
  
  console.log(myObject.hasOwnProperty("foo"));    // true
  console.log(myObject.hasOwnProperty("toString"));   // false
  console.log("toString" in myObject);    // true (프로토타입 체인에서 상속받은 속성까지 확인)
  ```

- 객체의 속성 탐색하기: `for in` 루프

  - 프로토타입 체인에서 상속받은 속성까지 포함해서 탐색

  ```javascript
  var cody = {
    age: 23,
    gender: "male",
  };
  
  Object.prototype.car = true;
  
  for (var key in cody) {
    // 없을 경우 car도 출력
    if (cody.hasOwnProperty(key)) {
      console.log(key);
    }
  }
  ```

- 호스트 객체 vs 네이티브 객체

  - 호스트 객체: ECMAScript 명세에서 정의되지 않았으나 코드를 실행할 때는 사용될 수 있는 객체를 뜻한다. 예를들어, 웹 브라우저 환경에서는 window 객체와 window 객체가 포함한 모든 객체를 호스트 객체로 볼 수 있다.
  - 웹 브라우저와 관련있는 가장 유명한 호스트 객체는 DOM이다, 



## 3. Object()

내장 `Object()` 생성자 함수를 사용하면 범용 빈 객체를 바로 만들 수 있다.

- `Object()`의 속성과 메소드
  
  - 속성 (예: `Object.prototype`)
  - `prototype`
  
- `Object()` 객체 인스턴스의 속성과 메소드

  - 인스턴스 속성(예: `var myObj = {}; myObj.constructor`)
    - `constructor`
  - 인스턴스 메소드(예: `var myObj = {}; myObj.toString();`)
    - `hasOwnProperty()`
    - `isPrototypeOf()`
    - `propertyIsEnumerable()`
    - `toLocaleString()`
    - `toString()`
    - `valueOf()`

- `Object()` 객체 생성

  - 객체 리터럴을 사용한 Object 객체 생성

    ```javascript
    /* 03_ObjectPropertyMethod.js */
    var obj = {
      living: true,
      age: 28,
      gender: "male",
    };
    ```

- **모든 객체는 `Object.prototype`을 상속받는다**

  ```javascript
  /* 03_ObjectPropertyMethod.js */
  Object.prototype.test = "test";
  var myStr = "string";
  console.log(myStr.test);
  ```

  

## 4. Function()

함수는 괄호()를 사용해 호출할 코드 문장들을 모아두는 곳이다. 

```javascript
/* 04_Functions.js */
var addNumA = new Function("num1", "num2", "return num1 + num2");
console.log(addNumA(2, 4));
// 리터럴 방식
var addNumB = function (num1, num2) {
  return num1 + num2;
};
console.log(addNumB(3, 3));
```

- `Function()` 속성과 메소드

  - 속성(예: `Function.prototype`)
    - `prototype`

- `Function()` 객체의 인스턴스 속성과 메소드

  - 인스턴스 속성(예: `myFunction.length;`)
    - `arguments`
      - `arguments.length`: 실제 함수에 전달된 매개변수의 개수
    - `constructor`
    - `length`: 함수에서 선언된 매개변수의 개수
  - 인스턴스 메소드(예: `myFunction.toString();`)
    - `apply()`
    - `call()`
    - `toString()`

  ```javascript
  /* 04_Functions.js */
  // 인스턴스 속성
  console.log(addNumB.constructor);   // [Function: Function]
  console.log(addNumB.length);    // 2
  
  // 인스턴스 메소드
  console.log(addNumB.apply(null, [5, 5]));   // 10
  console.log(addNumB.call(null, 4, 4));      // 8
  console.log(addNumB.toString());    // addnumB 출력
  ```

- **함수는 1급 클래스다**

  - 함수는 객체다. 함수는 변수, 객체, 배열에 저장될수 있고, 함수에 전달되고, 함수에서 반환될 수도 있다. 또한 객체이기 때문에 속성도 가지고있다. 
  - [예시 코드](./problems/04_Function/04_FunctionClass.js)

- 매개변수의 재정의

  - 매개변수는 함수 내부에서 바로 또는 `arguments` 배열을 사용해서 재정의될 수 있다.

    ```javascript
    /* 04_FunctionRedefine.js */
    var foo = false;
    var bar = false;
    
    var myFunction = function (foo, bar) {
      foo = true;
      arguments[1] = true;
      console.log(foo, bar);
      return;
    };
    myFunction(foo, bar);   // true true
    console.log(foo, bar);  // false false
    ```

- 함수 호출 패턴

  - 함수 패턴

    ```javascript
    var myFunc = function () {
      return "foo";
    };
    console.log(myFunc());
    ```

  - 메소드 패턴

    ```javascript
    var myObj = {
      myFunction: function () {
        return "bar";
      },
    };
    console.log(myObj.myFunction());
    ```

  - 생성자 패텅

    ```javascript
    var Dog = function (name, age) {
      this.name = name;
      this.age = age;
    };
    var dog = new Dog("badook", 2);
    console.log(dog);
    ```

  - `apply()`, `call()` 패턴

    ```javascript
    var greet = {
      runGreet: function () {
        console.log(this.name, arguments[0], arguments[1]);
      },
    };
    var cody = { name: "cody" };
    var lissa = { name: "lissa" };
    
    greet.runGreet.apply(cody, ["foo", "bar"]);
    greet.runGreet.call(lissa, "foo", "bar");
    ```

- 자기 호출 익명함수

  여러 익명함수를 만든 후 만들자마자 바로 호출하는 코드

  ```javascript
  (function (msg) {
    console.log(msg);
  })("hello!");
  ```

- 함수의 중첩

  - 함수는 중첩될 수 있고, 중첩 단계에는 제한이 없다.

- 함수 호이스팅

  함수는 함수가 정의되기 전에도 호출할 수있다.

  자바스크립트는 코드를 실행하기 전에 함수 선언문을 먼저 해석하고 먼저 실행 스택/컨텍스트에 추가하기 때문



## 5. 머리/전역 객체

자바스크립트는 머리 객체를 만들어 사용자가 정의한 코드를 캡슐화하거나 자바스크립트에 내장된 네이티브 코드를 감싼다. 또한, 자바스크립트는 사용자 정의 코드의 실행 영역을 머리 객체 내부로 제한한다. (웹 브라우저 환경에서는 `window`가 머리/전역 객체이다.)

```javascript
/* 05_GlobalObject.js */
var myStringVar = "myStringVar";
var myFunctionVar = function () {};
myString = "myString";
myFunction = function () {};
console.log("myStringVar" in window); // true
console.log("myFunctionVar" in window); // true
console.log("myString" in window); // true
console.log("myFunction" in window); // true
```

- 머리 객체에 포함된 전역 함수
  - `decodeURI()`
  - `decodeURIComponent()`
  - `encodeURI()`
  - `encodeURIComponent()`
  - `eval()`: 문자로 표현된 js 코드를 실행 (사용X)
  - `isFinite()`: 주어진 값이 유한수인지 확인
  - `isNaN()`: NaN 판별
  - `parseFloat()`: 문자열을 부동소수점 실수로 반환
  - `parseInt()`: 문자열을 특정 진수의 정수형으로 반환
  - [예시 코드](./05_HeadGlobalObject/05_GlobalFunction.js)

- 머리 객체 vs 전역 속성, 전역 변수

  - 머리 객체: 모든 객체를 포함하고 있는 객체

  - 전역 속성과 전역 변수는 머리 객체에 직접적으로 포함되어 있는 값을 가리킨다.

    ```javascript
    var foo = "bar"; // foo는 전역 객체이자 window 머리 객체의 속성
    var myFunc = function () {
      var run = (function () {
        console.log(foo); // 스코프 체인을 통해 머리객체에서 foo를 가져옴
      })();
    };
    myFunc();
    ```

- 머리 객체 참조하기

  - 전역 스코프에서 `this` 사용
  - 머리 객체의 이름을 참조 (웹 브라우저에서 `window` 사용)



## 6. this 키워드

함수 스코프 안에서 사용할 수 있으며, 함수의 속성 또는 메소드로 포함하고 있는 객체를 참조한다.

- **중첩된 함수에서 `this`는 머리객체(예: 웹 브라우저의 window 객체)를 가리킨다**

  ```javascript
  /* 06_ThisExample.js */
  var myObj = {
    func1: function () {
      console.log(this);  // func1
      var func2 = (function () {
        console.log(this);    // window
        var func3 = function () {
          console.log(this);  // window
        }();
      })();
    },
  };
  myObj.func1();
  ```

- **중첩된 함수 문제는 스코프 체인을 사용해서 우회한다**

  스코프 체인을 사용해 부모 함수의 `this`에 대한 참조를 저장해두면 `this` 값이 사라지는 것을 막을 수 있다.

  ```javascript
  var myObject1 = {
    myProperty: "my Property",
    myMethod: function () {
      var that = this;
      var helperFunc = (function () {
        console.log(that.myProperty); // my property
        console.log(this); // window
      })();
    },
  };
  
  myObject1.myMethod();
  ```

- `call()`, `apply()`을 사용할 경우, 함수 스코프 내에 설정한 `this`의 값을 재정의할 수 있다.

  - `myMethod.call(targetObj, param1, param2, ...)` -> 메소드의 `this`는 targetObj를 가리킨다.
  - `myMethod.apply(targetObj, [param1, param2, ...])` -> call과 동작은 같으며 차이는 매개변수를 전달하는 방식뿐이다.

- 사용자 정의 생성자 함수 내에서 `this` 키워드 사용하기

  - `new` 키워드를 사용해 함수를 실행할 때, 생성자 함수 내에 코딩된 `this`값은 생성자의 인스턴스를 가리킨다.

  - `new` 키워드를 사용하지 않을 경우, `this`의 값은 함수가 호출된 컨텍스트(=window)가 되었을 것이다.

    ```javascript
    var Person = function (name) {
      this.name = name || "jaehyun"; // this는 만들어질 인스턴스를 참조
    };
    var jaehyun = new Person("Jaehyun Kim");
    var person = new Person();
    
    console.log(jaehyun.name); // Jaehyun Kim
    console.log(person.name); // jaehyun
    
    var jh = Person("JH Kim"); // jh는 undefined, name값은 window.name에 설정
    // Uncaught TypeError: Cannot read property "name" of undefined
    // console.log(jh.name);
    console.log(window.name); // JH Kim
    ```

- 프로토타입 메소드 안의 `this`는 생성자 인스턴스를 참조한다.

  ```javascript
  var Person = function (x) {
    if (x) {
      this.fullName = x;
    }
  };
  
  Person.prototype.getFullName = function () {
    return this.fullName;
  };
  
  var cody = new Person("cody lindley");  // 상속한 getFullName 메소드를 호출, this는 해당 인스턴스를 참조
  var lisa = new Person("lissa lindley");
  
  console.log(cody.getFullName(), lisa.getFullName());
  ```

  - `this`가 가리키는 인스턴스나 객체가 참조한 속성을 포함하지 않는다면 프로토타입 체인에서 거슬러 올라가며 속성을 찾는다. 위의 코드에서 인스턴스가 `fullName` 속성을 포함하지 않을 경우 `Person.prototype.fullName` 다음에는 `Object.prototype.fullName`을 확인한다.



## 7. 스코프와 클로저

스코프: 코드가 실행되는 컨텍스트로, 전역 스코프(global scope), 지역 스코프(local scope, ''함수 스코프''라고도 한다. ), eval 스코프로 구분된다.

- ~~자바스크립트에는 블록 스코프가 없다.~~ 

  **함수 스코프: 새로운 함수가 생성될 때 마다 새로운 스코프가 발생한다.

  ```javascript
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
  ```

  **블록 스코프: 블록`{}`이 생성될 때 마다 새로운 스코프가 형성되는 것을 의미

  ​	**원래 자바스크립트는 함수 스코프를 따르지만 `const`와 `let` 키워드의 등장으로 블록스코프를 형성하는 것이 가능해졌다.** 	

  ```javascript
  let bar = 1;
  if (true) {
    for (let j = 0; j < 3; j++) {
      bar = j;
    }
    console.log(bar); // 2
    //   console.log(j);   // j is not defined -> 블록 스코프
  }
  ```

  

- `var`를 사용한 스코프 문제 피하기

  - `var` 키워드가 없이 변수를 선언할 경우 전역 스코프에 변수가 추가된다.

    ```javascript
    // 스코프 문제 피하기
    var foo = (function () {
      var boo = (function () {
        bar = 2;    // 전역 스코프 window.bar로 정의된다.
      })();
    })();
    console.log(bar);   // 전역 스코프의 bar
    
    // doo는 boo 함수 스코프에만 존재
    var foo = (function () {
      var boo = (function () {
        var doo = 2;
      })();
    })();
    // console.log(doo);   // doo is not defined
    ```

    

- **스코프 체인(문법적 스코프)**

  ```javascript
  var x = 10;
  var foo = function () {
    var y = 20;
    var bar = (function () {
      var z = 30;
      console.log(x + y + z); // z 는 지역 스코프에서, x와 y는 스코프 체인에서 찾는다.
    })();
  };
  ```

  **z값은 `console.log`가 호출되었던 bar 함수의 지역 스코프에서, y값은 `bar()`의 부모 함수인 `foo()`에서, x 값은 전역 스코프에서 가져왔다. 

  - 스코프 체인을 검색할 때는 가장 처음 발견한 값을 반환한다.

    ```javascript
    var a = 1;
    var boo = function () {
      var a = 2;
      var car = (function () {
        var a = 3;
        console.log(a); // 3
      })();
    };
    
    boo();
    ```

  - 스코프는 함수를 정의할 때 결정된다.

    스코프 체인은 정의할 때, 문자 그대로 코드를 작성할 때 정해진다. 함수를 어느 곳에서 사용해도 스코프 체인은 변하지 않는다.

  - 스코프 체인이 클로저를 만든다.

    **클로저(Closure): 데이터와 데이터를 조작하는 함수를 이어준다.

    ```javascript
    var countUp = (function () {
      var count = 0;
      return function () {
        return ++count;
      };
    })();
    // countUp 함수를 실행할 대 마다 자신을 포함했던 부모 함수의 스코프에 접근
    console.log(countUp()); // 1
    console.log(countUp()); // 2
    console.log(countUp()); // 3
    ```

     

## 8. 함수의 프로토타입

자바스크립트는 Function() 인스턴스에 자동으로 `prototype` 이라는 속성을 만든다. (`prototype` 속성은 `new` 키워드와 생성자 함수를 같이 사용해서 만든 객체에 연결된다)

```javascript
var arr = new Array("foo", "bar");
console.log(arr.join()); // foo, bar
```

위의 코드에서 `join()` 메소드는 arr 객체 인스턴스에 정의되어 있지 않지만 사용할 수 있다. 해당 메소드는 `Array()` 생성자의 `prototype` 속성에 속성으로 정의되어 있다. arr 배열 객체 인스턴스에서는 `join()` 메소드가 없기 때문에 프로토타입 체인에서 `join()`이라는 메소드가 있는지 검색한다.

- `prototype` 속성이 중요한 이유
  - 네이티브 생성자 함수는 `prototype` 속성을 사용해 생성자 인스턴스가 메소드와 속성을 상속받는다.
  - 사용자 정의 생성자 함수를 만들 때에도 프로토타입 상속을 구현할 수 있다.
  - 다른 사람이 구현해놓은 코드를 수정하거나 조작할 경우, 어떻게 동작하는지 이해해야 한다.
  - 동일한 메소드를 공유하는 여러 개의 효율적인 객체 인스턴스를 만들 수 있다.

- 모든 `Function()` 인스턴스에는 `prototype` 속성이 있다.

- `prototype` 속성은 Object() 객체다.

- 생성자 함수를 통해 만든 인스턴스는 생성자 함수의 `prototype` 속성과 연결되어 있다.

  `new` 키워드와 생성자 함수를 사용해 객체를 만들면 생성자 함수의 `prototype` 속성과 새롭게 만들어진 객체 인스턴스 사이에는 숨겨진 연결 고리가 생긴다.자바스크립트는 인스턴스를 만들 때, 인스턴스 객체와 생성자 함수를 자동으로 연결해두며 이러한 연결 덕분에 프로토타입 체인이 형성된다.

  ```javascript
  Array.prototype.foo = "foo";
  
  var myArray = new Array();
  console.log(myArray.__proto__.foo)  // myArray.__proto__ == Array.prototype (__proto__를 사용할 수 있는 브라우저에서만 작동)
  console.log(myArray.constructor.prototype.foo); // foo
  ```

- 프로토타입 체인의 끝은 `Object.prototype`이다.

  ```javascript
  var myArr = [];
  console.log(myArray.foo);
  /* myArr.foo, Array.prototype.foo, Object.prototype.foo 에서 foo를 찾지 못해 undefined가 출력된다. */
  ```

- 프로토타입 체인은 체인에서 제일 먼저 찾은 속성을 반환한다.

  ```javascript
  Array.prototype.foo = "foo";
  Object.prototype.foo = "bar";
  var myArray = new Array();
  console.log(myArray.foo);   // foo > Array.prototype 에서 찾은 foo 출력
  ```

- `prototype` 속성을 새 객체로 대체하면 기본 `constructor` 속성이 삭제된다.

  - 자바스크립트의 기본 `prototype` 속성을 대체할 생각이라면 생성자 함수를 참조하는 `constructor` 속성을 원래대로 복원해주어야 한다.

    ```javascript
    // prototype의 기본 속성을 바꿀 경우
    var Foo = function () {};
    Foo.prototype = {};
    var FooInstance = new Foo();
    
    console.log(FooInstance.constructor === Foo); // false
    console.log(FooInstance.constructor); // [Function: Object]
    
    // prototype 값을 대체하지 않은 경우
    var Bar = function () {};
    var BarInstance = new Bar();
    
    console.log(BarInstance.constructor === Bar); // true
    console.log(BarInstance.constructor); // [Function: Bar]
    
    // constructor 속성이 원래 생성자 함수를 올바르게 참조하게 수정
    var Boo = function Boo() {};
    Boo.prototype = { constructor: Boo };
    var BooInstance = new Boo();
    
    console.log(BooInstance.constructor === Boo); // true
    console.log(BooInstance.constructor); // [Function: Boo]
    ```

- 프로토타입에서 상속한 속성은 가장 최근의 값을 사용한다.

- `prototype` 속성을 새 객체로 대체하면 이전에 만든 인스턴스는 갱신되지 않는다.

  ```javascript
  var Foo = function () {};
  Foo.prototype.x = 1;
  
  var FooInstance = new Foo();
  console.log(FooInstance.x); // 1
  
  // prototype의 속성을 갱신
  Foo.prototype.x = 2;
  console.log(FooInstance.x); // 2
  
  // prototype 속성을 새 객체로 대체
  Foo.prototype = { x: 3 };
  console.log(FooInstance.x); // 2 -> 이전에 만든 인스턴스는 갱신되지 않음
  
  var NewFooInstance = new Foo();
  console.log(NewFooInstance.x); // 3 -> 새로 만든 인스턴스는 새로운 prototype 적용
  ```

- 사용자 정의 생성자도 네이티브 생성자처럼 프로토타입을 상속할 수 있다.

  ```javascript
  // 사용자 정의 생성자의 프로토타입 상속
  var Person = function () {};
  // 모든 Person 인스턴스는 legs, arms, countLimbs를 상속한다.
  Person.prototype.legs = 2;
  Person.prototype.arms = 2;
  Person.prototype.countLimbs = function () {
    return this.legs + this.arms;
  };
  
  var chuck = new Person();
  console.log(chuck.countLimbs()); // 4
  
  // 전달된 매개변수가 없을 때, 프로토 타입에서 속성을 상속받는 생성자 함수
  var Monkey = function (legs, arms) {
    // 프로토타입에서 상속받은 값을 가린다
    if (legs !== undefined) {
      this.legs = legs;
    }
    if (arms !== undefined) {
      this.arms = arms;
    }
  };
  
  Monkey.prototype.legs = 2;
  Monkey.prototype.arms = 2;
  Monkey.prototype.countLimbs = function () {
    return this.legs + this.arms;
  };
  
  var okong = new Monkey(0, 0);
  console.log(okong.countLimbs()); // 0
  
  ```

- 상속 체인 만들기

  ```javascript
  var Person = function () {
    this.legs = 2;
  };
  Person.prototype.arms = 2;
  
  var Chef = function () {
    this.skill = "cook";
  };
  Chef.prototype = new Person();
  var cody = new Chef();
  
  console.log(cody.skill); // cook
  console.log(cody.arms); // 2
  console.log(cody.legs); // 2
  ```

  

## 9. Array()

값을 순서대로 나열한 목록으로, 일반적으로는 0부터 시작하는 숫자 색인값을 통해 포함된 값을 훑을 목적으로 사용한다.

```javascript
var Arr1 = ["red", "orange", "yellow"];
var Arr2 = new Array("green", "blue");
var Arr3 = new Array(5); // 크기가 5인 배열 생성

console.log(Arr1); // [ 'red', 'orange', 'yellow' ]
console.log(Arr2); // [ 'green', 'blue' ]
console.log(Arr3); // [ <5 empty items> ]

console.log(Arr1[0], Arr2[1], Arr3[2]);   // red blue undefined
```

- 배열의 크기를 설정하면 값을 추가하거나 제거할 수 있다.

  ```javascript
  var Arr1 = ["red", "orange", "yellow"];
  Arr1[5] = "navy"; // 5번 색인까지 값을 만들고, 넣는다.
  console.log(Arr1, Arr1.length); // [ 'red', 'orange', 'yellow', <2 empty items>, 'navy' ] 6
  Arr1.length = 10; // 배열의 크기 설정 (설정한 길이만큼 요소 생성)
  console.log(Arr1, Arr1.length); // [ 'red', 'orange', 'yellow', <2 empty items>, 'navy', <4 empty items> ] 10
  Arr1.length = 2; // 배열의 크기 설정 (설정한 길이만큼 남기고 제거)
  console.log(Arr1, Arr1.length); // [ 'red', 'orange' ] 2
  ```

- 다중 배열

  각괄호 표기법을 사용해서 다중 배열에 접근

  ```javascript
  var myArr = [[[[1, 2], 3, 4], 5, 6], 7, 8];
  console.log( myArr[0][0][0][0]); // 1
  ```

- 배열 조회

  - `while` , `for` 반복문 사용

    ```javascript
    var myArr = ["red", "orange", "yellow", "green"];
    var myArrLength = myArr.length;
    var counter = 0;
    
    // while문 처음부터 끝까지 조회
    while (counter < myArrLength) {
      console.log(myArr[counter]);
      counter++;
    }
    
    // while문 끝부터 처음까지 조회
    while (myArrLength--) {
      console.log(myArr[myArrLength]);
    }
    
    // for문 조회
    for (var i in myArr) {
      console.log(myArr[i]);
    }
    ```

    

## 10. String()

문자열 객체와 문자열 원시값을 만들 때 사용한다.

```javascript
var strObj = new String("kim"); // 문자열 객체 생성
console.log(strObj); // [String: 'kim']
console.log(typeof strObj); // object

var strObjNoNew = String("kim"); // new 사용하지 않음 (리터럴/원시문자 생성)
console.log(strObjNoNew); // kim
console.log(typeof strObjNoNew); // string

var strLiteral = "kim"; // 리터럴/원시문자 생성
console.log(strLiteral); // kim
console.log(typeof strLiteral); // string
```



## 11. Number()

숫자 객체와 숫자 원시값을 만들 때 사용한다. 일반적으로 정수 또는 실수로 작성된다.

```javascript
var numObject = new Number(10);
console.log(numObject); // [Number: 10]
console.log(typeof numObject); // object

var numObjectNoNew = Number(20);
console.log(numObjectNoNew); // 20
console.log(typeof numObjectNoNew); // number

var numLiteral = 30;
console.log(numLiteral); // 30
console.log(typeof numLiteral); // number
```



## 12. Boolean()

불리언값 객체를 만들 때 사용한다.

- `Boolean()` 매게 변수

  0, -0, null, false, NaN, undefined, 빈문자열("") 은 `false`, 나머지는 `true` 

```javascript
// 복합 객체
var myBool1 = new Boolean(false);
console.log(myBool1); // [Boolean: false]
console.log(typeof myBool1); // object

if (myBool1) {
  console.log("false 복합 객체는 true이다.");
}

// 리터럴/원시값
var myBool2 = Boolean(false);
console.log(myBool2); // false
console.log(typeof myBool2); // boolean

// 리터럴/원시값
var myBool3 = false;
console.log(myBool3); // false
console.log(typeof myBool3); // boolean

// 0, -0, null, false, NaN, undefined, 빈문자열("") 은 false
var myBool4 = Boolean(undefined);
console.log(myBool4); // false

// 나머지는 true
var myBool5 = Boolean(Math);
console.log(myBool5); // true
```



## 13. 원시 문자열, 숫자, 불리언값 다루기

- **원시/리터럴 값은 속성에 접근할 때 객체로 변환된다.**

  메소드/속성에 접근하면 자바스크립트는 먼저 리터럴값에 해당하는 래퍼(wrapper) 객체를 만들고 이를 통해 메소드나 속성에 접근한다. 이후, 래퍼 객체를 제거하고, 다시 값을 리터럴형으로 되돌린다.

- 평소에는 원시 문자열, 숫자, 불리언 값을 사용하자



## 14. Null

객체 속성이 아무런 값도 가지고 있지 않음을 명시적으로 나타낼 때 사용한다.

**typeof null == "object"



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
- 객체는 `new` 키워드와 함께 생성자 함수를 호출하여 만들거나 리터럴 이라는 약식 표현을 사용해서 만든다.
- 생성자 함수는 객체이다. (객체가 객체를 만드는 자바스크립트)
- 자바스크립트에는 총 9개의 내장 생성자 함수가 있다. (`Object()`, `String()`, `Number()` 등등...), `String()`, `Number()`, `Boolean()` 생성자는 원시값을 만들거나 필요한 경우, 객체 래퍼를 제공하는 경우 두가지 용도로 사용되며, 이로 인해 원시값이 객체처럼 동작할 수 있게 된다.
- 내장 생성자 함수를 `new` 키워드와 함께 사용하면 '복합 객체' 또는 '참조 객체'라 부르는 객체를 만든다.
- 원시값은 값으로 저장되고, 복사하면 문자 그대로 복사가 된다. 하지만 복합 객체는 참조가 저장되고 복사하면 참조만 복사된다.
- 원시값은 값을 비교할 때 값이 같은지 비교하고, 복합 객체는 참조가 같은지 비교한다.
- 복합 객체와 참조의 특성으로 자바스크립트에서 객체는 동적 속성을 갖는다.
- 자바스크립트의 네이티브 객체, 사용자 정의 객체 등의 모든 객체의 속성을 조작할 수 있다.
- 객체의 속성을 가져오거나 설정할 때에는 점 표기법이나 각괄호 표기법을 사용한다.
- 객체의 속성을 참조하면 해당 객체에 속성이 참조되어있는지 확인하고, 그렇지 않을 경우 `prototype` 속성을 찾는다. `prototype`에도 없을 경우 `Object()` 생성자의 `prototype` 속성에서 찾고, 여기서도 없을 경우에 `undefined`라고 판단한다.
- 자바스크립트에서는 프로토타입 체인 검색을 사용해서 상속을 구현한다. (프로토타입 상속)
- `prototype`의 속성은 `Object()` 객체이고, 모든 객체는 `Object()`를 상속받는다.
- 자바스크립트 함수는 1급 객체다. 함수는 속성과 값을 지닌 객체다.
- 함수 안에서 사용하는 `this` 키워드는 함수를 포함한 객체를 참조한다.
- `this`는 함수가 호출되는 컨텍스트에 따라 결정된다.
- `this` 키워드를 전역 스코프에서 사용하면 `this`는 전역 객체(또는 머리 객체)를 참조한다.
- 자바스크립트에서는 고유한 스코프를 만들기 위해 함수를 사용한다.
- 자바스크립트에는 자바스크립트 코드를 모두 담아두는 전역 스코프가 있다.
- 함수는 스코프 체인을 통해 변수를 찾는다.
- 스코프 체인은 코드가 작성된 위치에 따라 만들어지기 대문에 호출된 컨텍스트에는 영향을 받지 않는다.
- 함수 내에서 `var`를 사용하지 않고 선언된 변수와 함수 표현식은 전역 속성이 된다.
- 전역 스코프에서 (`var` 없이 ) 선언된 변수와 함수는 전역 객체(또는 머리 객체)의 속성이 된다.
- 전역 스코프에서 (` var`와 함께) 선언된 변수와 함수는 전역 변수가 된다.



## 99. etc...

##### `null`  vs `undefined`

- `undefined`: 데이터 타입이자 값을 나타냄(무언가 결여되어 있음을 나타냄)
- `null`: 데이터 타입이지만 값이 비어있음(다른 값이 와야하지만 아직 사용할 수 없는 경우)



##### `call()`  vs `apply()`

- 함수에 매개변수를 전달하는 방식에 차이가 있다.
  - `call(func, param1, param2)`
  - `apply(func, [param1, param2])`



