var strObj = new String("kim"); // 문자열 객체 생성
console.log(strObj); // [String: 'kim']
console.log(typeof strObj); // object

var strObjNoNew = String("kim"); // new 사용하지 않음 (리터럴/원시문자 생성)
console.log(strObjNoNew); // kim
console.log(typeof strObjNoNew); // string

var strLiteral = "kim"; // 리터럴/원시문자 생성
console.log(strLiteral); // kim
console.log(typeof strLiteral); // string
