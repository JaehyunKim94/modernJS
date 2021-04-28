var funcA = function () {
  console.log("funcA");
};
funcA();
var funcB = [
  function () {
    console.log("funcB");
  },
];
funcB[0]();
var funcC = {
  methods: function () {
    console.log("funcC");
  },
};
funcC.methods();
var funcD = function (func) {
  return func;
};

var runFunc = funcD(function () {
  console.log("Run Func");
});
runFunc();

var funcE = function () {};
funcE.name = "E class";
console.log(funcE.name);
