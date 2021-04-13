# etc...

개별적으로 학습한 내용을 정리한 문서입니다.

## 1. 비동기 처리

[소스 코드](./SynchronousHttp.js)

[참고 자료 - Engineering Blog by Dale Seo](https://www.daleseo.com/)

### Callback 함수

다른 함수의 매개변수로 넘겨진 함수

```javascript
function callCallback(param, cbFunc) {
	cbFunc(param);
}

function sendRequest(url) {
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", url, false);
    xmlHttp.send();
    if (xmlHttp.status === 200) {
        return xmlHttp.responseText;
    }
}

// Callback 함수 호출
let response = callCallback(url, SendRequest);
```

- 최근에는 콜백 함수를 인자로 넘겨서 비동기 처리를 하는 스타일을 피하는 추세

  - 콜백 함수를 중첩해서 사용하게 디면 계속해서 코드를 들여쓰기 해야하기 때문에 가독성이 떨어지게 됩니다. 이는 개발자들 사이에서 **콜백 지옥** 이라 불리게 되었고, 최근에는 **Promise**나 **async/await**를 사용하는 방법으로 대체되고 있습니다.

    

### Promise

비동기 처리를 위한 객체로, 어떤 시점에 대한 결과를 제공합니다. `new` 키워드와 생성자를 통해서 생성할 수 있고, 생성자는 함수를 인자로 받습니다. 함수는 `resolve`와 `reject`라는 2개의 함수형 파라미터를 가집니다. 

```javascript
const promise = new Promise(function(resolve, reject) {...});
```

다음 중의 하나의 상태를 가집니다.

- 대기(pending): 이행하거나 거부되지 않은 초기 상태
- 이행(fullfilled): 연산이 성공적으로 완료됨
- 거부(rejected): 연산이 실패함

```javascript
function testPromiseXML(targetURL) {
	return new Promise(function (resolve, reject) {
    	let xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", targetURL);
        xmlHttp.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(xmlHttp.responseText);
            } else {
                reject({
                    status: this.status,
                    statusText: xmlHttp.statusText,
                });
            }
        };
        xmlHttp.send();
    });
}

testPromiseXML(targetURL)
    .then((result) => {
    makeJSON(result, "resultPromiseXML");
})
```



### async & await

- `async`: 비동기 함수를 정의하고, Promise를 사용하여 결과를 반환합니다.

- `await`: `async` 키워드가 붙어있는 함수 내부에서만 사용할 수 있으며 비동기 함수가 리턴하는 Promise로 부터 결과값을 추출해줍니다.  `await` 키워드를 사용하면 결과값을 얻을 수 있을 때까지 기다립니다. 

- 예외처리

  동기/비동기 구분 없이 `try/catch`로 일관되게 예외처리를 할 수 있습니다.

```javascript
async function testAsync(targetURL) {
    try {
        let response = await fetch(targetURL);
        let responseText = await response.text();
        makeJSON(responseText, "resultAsync");
    }
    catch (err) {
        console.log(err);
    }
}
```



