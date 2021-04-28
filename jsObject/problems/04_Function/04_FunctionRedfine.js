var foo = false;
var bar = false;

var myFunction = function (foo, bar) {
  foo = true;
  arguments[1] = true;
  console.log(foo, bar);
  return;
};
myFunction(foo, bar); // true true
console.log(foo, bar); // false false
