String.augmentedProperties = [];

if (!String.prototype.trimIT) {
  String.prototype.trimIT = function () {
    // trimIT 함수 추가
    return this.replace(/^\s+|\s+$/g, "");
  };
  String.augmentedProperties.push("trimIT");
}
var myString = " trim me    ";
console.log(myString.trimIT()); // 새로 만든 trimIT 문자열 메소드 실행

console.log(String.augmentedProperties.join());
