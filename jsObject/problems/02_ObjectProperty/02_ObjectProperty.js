var cody = {
  class: "foo",
  123: "zero",
};
cody.age = 28; // 점 표기법
cody["male"] = true; // 각괄호 표기법
var string1 = "ag";
var string2 = "e";
console.log(cody[string1 + string2]);

console.log(cody["class"], cody["123"]);
// console.log(cody.class, cody.123);   // 에러 발생 (class는 된다...)

delete cody["123"]; // 객체 속성 삭제
console.log("123" in cody); // false
