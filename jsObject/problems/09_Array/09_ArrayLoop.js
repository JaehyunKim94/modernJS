var myArr = ["red", "orange", "yellow", "green"];
var myArrLength = myArr.length;
var counter = 0;

// while문 처음부터 끝까지 조회
while (counter < myArrLength) {
  console.log(myArr[counter]);
  counter++;
}

// while문 끝부터 처음까지 조회
while (myArrLength--) {
  console.log(myArr[myArrLength]);
}

// for문 조회
for (var i in myArr) {
  console.log(myArr[i]);
}
