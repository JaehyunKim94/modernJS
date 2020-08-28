# 04 Object, Array and Function

객체와 배열, 함수에 관한 기본적인 내용을 학습합니다.

## 4.1 객체

이름과 값을 한 싸응로 묶은 데이터를 여러 개 모은 것. 파이썬의 Dictionary와 유사하다.

- 리터럴로 객체 생성하기

  ```javascript
  var card = { suit: "heart", rank: "A"};
  
  console.log(card.suit);		// heart
  console.log(card["rank"]);	// A
  ```

  suit와 rank는 객체의 프로퍼티이며, 객체에 없는 프로퍼티를 읽을 경우 undefined가 리턴된다.

- 프로퍼티 추가와 삭제

  ```javascript
  card.value = 20;
  console.log(card)		// { suit: 'heart', rank: 'A', value: 20 }
  
  delete card.value
  console.log(card)		// { suit: 'heart', rank: 'A' }
  ```

- 프로퍼티 조회 `in`

  `in`은 객체가 가진 프로퍼티뿐만 아니라 객체가 상속받은 모든 프로퍼티를 조사합니다.

  ```javascript
  console.log("suit" in card)     // true
  console.log("value" in card)    // false
  console.log("toString" in card) // true
  ```

- 메서드

  프로퍼티에 저장된 값의 타입이 함수일 경우 그 프로퍼티를 `메서드`라고 부릅니다.

- 참조 타입

  객체 타입의 값을 변수에 대입하면 그 변수에는 객체의 __참조__(메모리 위치 정보)가 저장됩니다. 이러한 상태를 __객체를 참조하고 있다.__ 라고 합니다.

  ```javascript
  var a = card;
  console.log(card.suit);         // heart
  a.suit = "diamond";             
  console.log(a.suit);            // diamond
  console.log(card.suit);         // diamond
  ```




## 4.2 함수

함수의 입력 값을 __인수__라고 부르고, 함수의 출력 값을 __반환값__이라고 부른다. 

- 선언문으로 함수 정의하기

  ```javascript
  function square(x) { return x * x; }
  ```

- 함수 명명법

  - 함수의 이름은 camelCase(캐멀 표기법) 또는 underscore_case(밑줄 표기법)

- 함수의 실행 흐름

  - 호출한 코드에 있는 인수가 함수 정의문의 인자에 대입
  - 함수 정의문의 중괄호 안에 작성된 프로그램이 순차적으로 실행
  - return 문이 실행된다면 호출한 코드로 돌아가고, return 값이 함수의 반환값이 된다.
  - return문이 없을 경우, 호출한 코드로 돌아가고, undefined가 반환값이 된다.

- 함수 선언문의 끌어올림

  - 변수 선언문과 마찬가지로 자바스크립트는 함수 선언문을 프로그램의 첫머리로 끌어올립니다. 

- 참조에 의한 호출과 값에 의한 호출

  - 함수는 원시 값을 인수로 넘겼을 때와 객체를 인수로 넘겼을 때 다르게 동작합니다.

  - 인수가 원시 값일 때

    ```javascript
    function add1(x) { return x + 1 };
    var a = 3;
    var b = add1(a);
    console.log('a = ' + a + ' b = ' + b);      // a = 3 b = 4
    ```

  - 인수가 객체일 때

    ```javascript
    function add2(p) {
        p.x = p.x + 2;
        p.y = p.y + 2;
        return p;
    }
    var c = {x:4, y:5};
    var d = add2(c)
    console.log(c, d);      // { x: 6, y: 7 } { x: 6, y: 7 }
    ```

    - 인수 여러개를 전달할 경우 객체의 프로퍼티에 담아서 함수에 넘기자
      - __함수 안에서 객체의 프로퍼티를 수정하면 호출한 코드에 있는 인수 객체의 프로퍼티가 함께 바뀌므로 주의__(참조되기 때문)

- 변수의 유효 범위(Scope)

  - 전역 변수
    - 함수 바깥에서 선언된 변수로 유효 범위가 전체 프로그램
  - 지역 변수
    - 함수 안에서 선언된 변수와 함수 인자로 유효 범위가 선언된 함수 내부

- `let`과 `const`

  - `let`은 변수를 선언하고, `const`는 한 번만 할당할 수 있는 상수를 선언

  - let 선언자

    - let의 유효범위

      ```javascript
      let x = "outer x";
      {
          let x = "inner x";
          let y = "inner y";
          console.log(x);     // inner x
          console.log(y);     // inner y
      }
      console.log(x)          // outer x
      console.log(y)          // reference error: not defined
      ```

    - __var 문과 달리 선언한 변수를 끌어올리지 않음__

      ```javascript
      console.log(x);			// reference error
      let x = 4;
      ```

  - const 선언자

    - 한 번만 할당할 수 있는 변수(상수)를 선언

    - const 문으로 선언한 변수에 다시 대입을 시도하면 타입 오류가 발생

      ```javascript
      const c = 2;
      c = 5;          // type error
      ```

    - 상수 값이 객체이거나 배열일 경우에는 프로퍼티 또는 프로퍼티 값을 수정할 수 있습니다.

      ```javascript
      const origin = {
          x: 1,
          y: 4
      };
      console.log(origin)     // { x: 1, y: 4 }
      origin.x = 3;
      console.log(origin)     // { x: 3, y: 4 }
      ```

- 함수 리터럴로 함수 정의하기

  - 함수 리터럴은 이름이 없는 함수로, __익명함수__ 또는 __무명함수__ 라고 부릅니다. 

  - 함수 리터럴을 사용할 때는 끝에 반드시 세미콜론(;)을 붙여야 한다.

  - 함수 선언문과의 차이: 함수 리터럴로 정의한 함수는 끌어올리지 않음

    ```javascript
    console.log(square(3));     // type error
    var square = function(x) { return x * x; };
    ```

  - 함수 안에서만 유효한 이름은 함수 바깥에서는 호출할 수 없음

    ```javascript
    var square = function sq(x) { return x * x; };	// sq를 호출할 수 없음
    ```

- 객체의 메서드

  - 함수 객체 안에 적힌 this는 그 함수를 메서드로 가지고 있는 객체를 가리킵니다.

    ```javascript
    var circle = {
        center: {x: 1.0, y: 2.0},
        radius: 2.5,
        area: function () {
            return Math.PI * this.radius * this.radius;
        }
    };
    console.log(circle.area())      // 19.634954084936208
    ```

  - 메서드 또한 프로퍼티의 일종이므로 나중에 추가할 수 있습니다.

    ```javascript
    circle.translate = function(a, b) {
        this.center.x = this.center.x + a;
        this.center.y = this.center.y + b;
    };
    console.log(circle.center);     // { x: 1, y: 2 }
    circle.translate(3, 4);
    console.log(circle.center);     // { x: 4, y: 6 }
    ```

  - 객체를 기본 부품으로 삼아 프로글매을 만들어가는 기법을 __객체 지향 프로그래밍__이라고 부릅니다. 

  

## 4.3 객체 생성자

객체를 여러 개 생성하는 수단으로 클래스(class)를 사용합니다. 생성자를 사용하면 이름이 같은 메서드와 프로퍼티를 가진 객체 여러 개를 효율적으로 생성할 수 있습니다. 자바스크립트에는 클래스가 없기 때문에 생성자라고 하는 함수로 객체를 생성할 수 있습니다. 생성자로 객체를 생성할 때는 `new` 연산자를 사용합니다.

```javascript
function Card(suit, rank) {
    this.suit = suit;
    this.rank = rank;
};

var card_a = new Card("하트", "A");
var card_b = new Card("다이아", "4");

console.log(card_a);        // Card { suit: '하트', rank: 'A' }
console.log(card_b);        // Card { suit: '다이아', rank: '4' }
```

- 메서드를 가진 객체를 생성하는 생성자

  ```javascript
  function Circle(center, radius) {
      this.center = center;
    this.radius = radius;
      this.area = function() {
          return this.radius * this.radius * Math.PI;
      };
  };
  
  var p = {x: 0, y: 0};
  var c = new Circle(p, 4)
  console.log(c.area())       // 50.26548245743669
  ```
  



## 4.4 배열

배열 리터럴은 쉼표로 구분한 값을 대괄호(`[]`)로 묶어서 표현합니다. 변수의 요소에는 변수와 마찬가지로 모든 타입의 값이 올 수 있습니다. 

```javascript
var arr3 = [3.14, "pi", true, {x: 1, y:2}, [1, 2, 3, 4]];
console.log(arr3)           // [ 3.14, 'pi', true, { x: 1, y: 2 }, [ 1, 2, 3, 4 ] ]
```

- `length` 프로퍼티

  배열의 길이를 가리키며 __배열 요소의 최대 인덱스값 + 1__ 이 담겨 있습니다. length 프로퍼티에 0보다 큰 정수 값을 대입할 경우 배열의 길이가 줄어듭니다. 

  ```javascript
  var arr4 = [1, 2, 3, 4];
  console.log(arr4)           // [ 1, 2, 3, 4 ]       
  arr4.length = 2;
  console.log(arr4)           // [ 1, 2 ]
  ```

- Array 생성자

  배열은 생성자로도 생성할 수 있습니다. 

  ```javascript
  var arr5 = new Array(2, 4, 5, 6);
  var arr6 = new Array();
  var arr7 = new Array("hi", 5, {x:1, y:5}, [3, 5]);
  ```

  

