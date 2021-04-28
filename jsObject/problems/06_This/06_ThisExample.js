window.foo = "foo";
window.myObject = { foo: "I am Object foo" };

window.sayFoo = function () {
  console.log(this.foo);
};

window.myObject.sayFoo = sayFoo;

window.myObject.sayFoo(); // I am Object foo
window.sayFoo(); // foo

var myObj = {
  func1: function () {
    console.log(this);  // func1
    var func2 = (function () {
      console.log(this);    // window
      var func3 = function () {
        console.log(this);  // window
      }();
    })();
  },
};
myObj.func1();
