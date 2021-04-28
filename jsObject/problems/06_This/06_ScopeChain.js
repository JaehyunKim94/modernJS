var myObject1 = {
  myProperty: "my Property",
  myMethod: function () {
    var that = this;
    var helperFunc = (function () {
      console.log(that.myProperty); // my property
      console.log(this); // window
    })();
  },
};

myObject1.myMethod();
