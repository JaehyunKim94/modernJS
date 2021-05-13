# 자바스크립트 클래스

[Mozilla 사이트](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes)의 클래스 파트를 참고해서 학습한 자바스크립트의 클래스입니다. 

## What is Class?

- 클래스는 객체를 생성하기 위한 템플릿으로, 데이터와 이를 조작하는 코드를 하나로 추상화합니다.

- `Class`는 함수입니다. 그렇기 때문에 class 표현식과 class 선언식,  두 가지 문법을 제공합니다. 

  - class 표현식

    ```javascript
    // class 표현식
    let Person = class Person {
      constructor(name, gender) {
        this.gender = gender;
        this.name = name;
      }
      // prototype method
      printInfo() {
        console.log("이름: " + this.name + "\t| 성별: " + this.gender);
      }
    };
    ```

  - class 선언식

    ```javascript
    // class 선언식
    class Cat {
      constructor(name, gender) {
        this.name = name;
        this.gender = gender;
      }
      // prototype method
      getName() {
        return this.name;
      }
    }
    ```

  - 함수 선언과 클래스 선언의 차이

    함수 선언은 **\*호이스팅**이 일어나지만 클래스 선언은 그렇지 않다. 그렇기 때문에 클래스를 사용하기 위해서는 클래스를 먼저 선언해야 한다. (클래스 표현식도 마찬가지)

    \*호이스팅: 변수와 함수의 선언을 유효 범위의 최상단으로 끌어올리는 행위 (할당은 해당하지 않는다)



## Class Body & Method

- Class body: 중괄호`{}` 로 묶인 안쪽 부분으로, 메서드나 `constructor`와 같은 클래스 멤버를 정의하는 곳입니다. 

- Class body는 **\*Strict 모드**로 실행됩니다. 

  \* Strict Mode: Javascript 시멘틱스에 몇 가지 변경이 일어난다. [참고](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Strict_mode)

- `constructor`(생성자)" Class로 생성된 객체를 생성하고, 초기화하기 위한 특수한 메서드로, 클래스 안에 한 개만 존재할 수 있다. 

- 정적 메서드와 정적 속성

  - `static` 키워드는 클래스를 위한 정적(static) 메서드를 정의합니다. 클래스의 인스턴스화 없이 호출되며, 클래스의 인스턴스에서는 호출할 수 없습니다. 따라서, 어플리케이션을 위한 유틸리티 함수를 생성하는데 주로 사용됩니다.
  - 정적 속성은 캐시, 고정 환경설정 또는 인스턴스 간에 복제할 필요가 없는 기본 데이터에 유용합니다.

  ```javascript
  class Point {
    // 생성자
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  
    // 프로토타입 메서드
    getX() {
      return this.x;
    }
  
    // 정적 속성
    static displayName = "Point";
  
    // 정적 메서드
    static distance(a, b) {
      const dx = a.x - b.x;
      const dy = a.y - b.y;
      return Math.hypot(dx, dy);
    }
  }
  
  var pointA = new Point(1, 4);
  var pointB = new Point(0, 2);
  
  console.log(pointA.displayName); // undefined
  console.log(pointB.distance); // undefined
  console.log(Point.displayName); // Point
  console.log(Point.distance(pointA, pointB)); // 2.23606797749979
  ```

- 인스턴스 속성

  인스턴스 속성은 반드시 클래스 메서드 내에 정의되어야 합니다. 

  정적 속성과 프로토타입 데이터 속성은 반드시 클래스 선언부 바깥쪽에서 정의되어야 합니다.

- Public 필드 선언

  





## Getter & Setter