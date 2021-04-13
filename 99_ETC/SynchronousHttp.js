/* 
    도로명 주소 프로젝트를 기반으로 실행됐습니다.
    해당 프로젝트의 서버는 검색어(주소)와 조회할 페이지를 포함해서 요청을 보내면
    json 형식의 응답을 받게 됩니다.
*/

(() => {
    const URL = "http://localhost:8080/api/search/address";
    const PARAMS = {
        keyword: "진관",
        currentPage: "1",
    };

    // 전체 프로세스
    function getAddress() {
        let targetURL = URLAddParams(URL, PARAMS);
        // Callback 함수
        testCallback(targetURL, sendRequest);

        // Promise + XMLHttpRequest
        testPromiseXML(targetURL)
            .then((result) =>
                makeJSON(result, "resultPromiseXML")
            )
            .catch((err) => console.log(err));

        // Async Await + Fetch
        testAsync(targetURL)

        // Fetch + then
        testFetch(targetURL, "resultFetch");
    }

    // 동기방식 처리: Callback
    function testCallback(targetURL, callback) {
        let result = callback(targetURL);
        makeJSON(result, "resultCallback");
    }

    function sendRequest(url) {
        let xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", url, false);  // XMLHttpRequest on the main thread is deprecated because of its detrimental ... 발생
        xmlHttp.send();
        if (xmlHttp.status === 200) {
            return xmlHttp.responseText;
        }
    }

    // 동기방식 처리: Promise + XMLHttpRequest
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

    // 동기방식 처리: Async & Await + fetch
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

    function testFetch(targetURL, target) {
        fetch(targetURL)
            .then((response) => response.text())
            .then((data) => makeJSON(data, target))
            .catch((err) => alert(err));
    }

    // GET 요청을 위한 URL 생성
    function URLAddParams(URL, params) {
        let res = URL + "?";
        for (const [key, value] of Object.entries(params)) {
            res += key + "=" + value + "&";
        }
        let encodedRes = encodeURI(res);
        return encodedRes;
    }

    // response를 json형태로 바꾸고, 바꾸고자 하는 div에 내용을 넣음
    async function makeJSON(res, targetDiv) {
        let resultJSON = await res.slice(1, res.length - 1);
        resultJSON = await JSON.parse(resultJSON);
        document.getElementById(targetDiv).innerText = JSON.stringify(resultJSON);
        return resultJSON;
    }

    document.getElementById("testBtn").addEventListener("click", getAddress)
})()