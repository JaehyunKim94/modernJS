# 03 Variables & Value

숫자, 문자열, 객체 등 자바스크립트가 다루는 값(데이터 타입)과 값을 저장하기 위한 변수를 학습

## 3.1 변수

변수는 값을 담기위해 이름을 붙인 상자입니다.

```javascript
var x;			// 변수 선언
console.log(x);	// undefined
x = 2;			// 변수에 값을 대입
console.log(x);	// 2
var y = 6;		// 변수 선언 & 초기값 설정
var a = 1, b = 2, c = 3;	// 여러 개의 변수에 대해 초기값 설정을 쉼표로 구분
```

- 변수 끌어올림

  - 변수가 프로그램 첫머리에 선언된 것처럼 다른 문장 앞에 생성

    ```javascript
    console.log(x);		// undefined  >> var x 만 끌어올려졌기 때문
    var x = 5;
    console.log(x);		// 5
    ```

- 변수 명명의 규칙

  - 사용할 수 있는 문자는 알파벳, 숫자, 밑줄(_), 달러 기호($)

  - 첫 글자로는 숫자를 사용할 수 없다.

  - 예약어는 식별자로 사용할 수 없다. 

    - ECMAScript 6 예약어

      `break`, `case`, `catch`, `class`, `const`, `continue`, `debugger` 등...

  - 일반적인 표기법

    - camelCase / snake_case 로 변수의 의미를 파악할 수 있도록 이름을 붙인다.
    - 루프 카운터 변수 이름은 i, j, k 등을 사용한다.
    - 상수는 대문자로 표현한다. (예: MAX_SIZE)
    - 논리값을 표현하는 변수에는 is를 붙인다. (예: isBlocked)
    - 생성자 이름을 붙일 때는 파스칼 표기법을 사용한다(PascalCase)



## 3.2 데이터 타입

데이터 타입과 관련된 기본적인 사항과 데이터 타입의 종류 중 하나인 원시(primitive) 타입을 학습합니다. 

