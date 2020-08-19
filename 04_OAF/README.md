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

