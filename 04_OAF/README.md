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

  