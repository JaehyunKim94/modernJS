var cody = {
  age: 23,
  gender: "male",
};

Object.prototype.car = true;

for (var key in cody) {
  // 없을 경우 car도 출력
  if (cody.hasOwnProperty(key)) {
    console.log(key);
  }
}
