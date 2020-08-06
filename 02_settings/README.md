# 02 Settings

기본적인 작성법을 배우고, 간단한 예제를 자바스크립트 실행환경에서 실행해봅니다.

## 2.1 Installation

- 웹 브라우저와 [Node.js](https://nodejs.org/ko/download) 설치
- Code Editor 설치 ([VScode](https://code.visualstudio.com/))



## 2.2 Simple Examples

- [01_Factorial.js](./01_Factorial.js)
  - 자바스크립트 코드를 웹 브라우저 콘솔창에 입력하여 실행

- [02_Factorial.html](./02_Factorial.html)
  - HTML 문서에 삽입하여 웹 브라우저로 실행
  - HTML 요소와 CSS 스타일을 제어할 때는 Script를 body 요소에 배치하고, 그렇지 않을 경우에는 head요소의 자식 요소로 배치 (자세한 이유는 6장에서 설명) 

- [03_Factorial.html](./03_Factorial.html)
  - script의 src 속성을 이용해 `01_Factorial.js` 파일을 읽음

- Node.js에서 대화형 모드로 실행
  - 프롬프트창에 `node`를 입력하면 Node.js 대화형 모드가 실행
  - 명령어
    - `.editor`: 편집기 모드로 전환합니다. 
    - `.exit`: 대화형 모드를 종료합니다. (`Ctrl+C` 2번 또는 `Ctrl+D` 입력)

- Node.js로 파일을 읽어 들여 실행
  - `node dir/to/file/filename.js`



## 2.3 How to write programs

- 문자 코드

  - ECMAScript 5 사양에는 자바스크립트 엔진이 유니코드 버전 3 이상을 지원해야 한다고 명시되어 있습니다. [참고](http://www.ecma-international.org/ecma-262/5.1/#sec-2)
  - ECMAScript 6 사양에는 자바스크립트 엔진이 유니코드 버전 5.1.0 이상을 지원해야 한다고 명시되어 있습니다. [참고](http://www.ecma-international.org/ecma-262/6.0/#sec-conformance)

  **`ECMAScript`: ecma 인터내셔널의 ECMA-262 기술 규격에 정의된 표준화된 스크립트 프로그래밍 언어이다. 

- 대문자와 소문자

  - 자바스크립트 프로그램은 알파벳 대문자와 소문자를 구별합니다. 잘못 입력할 경우 참조 오류가 발생합니다. 

- 토큰과 공백 문자

  - 자바스크립트 인터프리터의 프로그램 실행

    - __어휘 분석__: 프로그램을 실행하기에 앞서 프로그램을 __토큰__(프로그램을 구성하는 최소 단위)으로 분해

    - __구문분석 (파싱)__: 토큰을 한 줄로 나열하고 자바스크립트 구문 규약에 비추어 보았을 때 올바른 프로그램인지를 판정

    - 문제가 없을 경우 프로그램을 실행

    - 예제

      ```javascript
      return n*fact(n-1);
      // 위를 토큰으로 나눌 경우 (|로 표시)
      return | n | * | fact | ( | n | - | 1 | ) | ;
      ```

  - 공백 문자
  
    - 토큰을 구분하는 공백 문자로는 `Space` 와 `Tab`만 사용하고, 필요할 때만 줄 바꿈 문자를 사용합니다.
  
      