const uri = "https://mozilla.org/?x=шеллы";
const encoded = encodeURI(uri);
console.log(encoded);
// expected output: "https://mozilla.org/?x=%D1%88%D0%B5%D0%BB%D0%BB%D1%8B"

try {
  console.log(decodeURI(encoded));
  // expected output: "https://mozilla.org/?x=шеллы"
} catch (e) {
  // catches a malformed URI
  console.error(e);
}

// encodes characters such as ?,=,/,&,:
console.log(`?x=${encodeURIComponent("test?")}`);
// expected output: "?x=test%3F"

console.log(`?x=${encodeURIComponent("шеллы")}`);
// expected output: "?x=%D1%88%D0%B5%D0%BB%D0%BB%D1%8B"

console.log(window.eval("2+3*2"));
console.log(window.isNaN("25"));
console.log(window.isFinite(25.252));
console.log(window.parseInt("25"));
console.log(window.parseFloat("25.262"));