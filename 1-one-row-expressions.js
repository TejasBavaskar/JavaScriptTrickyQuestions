// https://jsfiddle.net/vk35ok2o/49/
console.log('typeof 1/0 => ', typeof 1/0);
console.log('typeof (1/0) => ', typeof (1/0));
console.log('1/0 => ', 1/0);
console.log('"Hello" * 2 => ', "Hello" * 2);
console.log('typeof ("Hello" * 2) => ', typeof ("Hello" * 2));
console.log('typeof "Hello" * 2 => ', typeof "Hello" * 2);
console.log('typeof undefined => ', typeof undefined);
console.log('typeof null => ', typeof null);
console.log('typeof function(){} => ', typeof function(){});
console.log('undefined == null => ', undefined == null);
console.log('NaN == null => ', NaN == null);
console.log('"1" + 2 => ', "1" + 2);
console.log('typeof ("1" + 2) => ', typeof ("1" + 2));
console.log('+"1"++"2" => ', +"1" + +"2");
console.log('"1" == 1 => ', "1" == 1);
console.log('!(-4) => ', !(-4));

var a;
console.log('a = (1,2) => ', a = (1,2));
console.log('true && "Hello" => ', true && "Hello");
console.log('true && "Hello" && "Goodbye" => ', true && "Hello" && "Goodbye");
console.log('true || "Hello" => ', true || "Hello");
console.log('"Hello" || true => ', "Hello" || true);

var b;
console.log('true || b = 1 => ', true || (b = 1));
console.log('true && b = 2 => ', true && (b = 2));

console.log('true + "test" => ', true + "test");
console.log('"123" + undefined => ', "123" + undefined);
console.log('null >= 0 => ', null >= 0);
console.log('undefined == 0 => ', undefined == 0);
console.log('!!" " => ', !!" ");
console.log('0 == "\\n0\\n" => ', 0 == "\n0\n");

var c = 2
+3;
console.log('var c = 2\n+3; => ', c);
console.log('true >= 1 => ', true >= 1);

var n = NaN;
console.log('n == n => ', n == n);
console.log('NaN == NaN => ', NaN == NaN);
console.log('true + false => ', true + false);
console.log('4 + 5 + "px" => ', 4 + 5 + "px");
console.log('+(4 + 5 + "px") => ', +(4 + 5 + "px"));
console.log('+"4 5" => ', +"4 5");
console.log('parseInt("4 5") => ', parseInt("4 5"));
console.log('parseInt("a4 5") => ', parseInt("a4 5"));
console.log('6 << 1 => ', 6 << 1);
console.log("Infinity * 0 => ", Infinity * 0);
console.log("isFinite(null) => ", isFinite(null));
console.log("isFinite(undefined) => ", isFinite(undefined));
console.log("(15).toString(16) => ", (15).toString(16));
console.log("(15).toString(36) => ", (15).toString(36)); // What is 36? 36 is [0-9a-z]
console.log("Math.floor(3.126) => ", Math.floor(3.126));
console.log("Math.ceil(3.126) => ", Math.ceil(3.126));
console.log("Math.round(3.126) => ", Math.round(3.126));
console.log("(3.126).toFixed(2) => ", (3.126).toFixed(2));
console.log("~~12.3 => ", ~~12.3);
console.log("12.3^0 => ", 12.3^0);
console.log("5 / 2^1 => ", 5 / 2^1);
console.log("5 / 2^2 => ", 5 / 2^2);
console.log("0.1 + 0.2 === 0.3 => ", 0.1 + 0.2 === 0.3);
console.log('9999999999999999 => ', 9999999999999999);

console.log('"12\n3".length => ', "12\n3".length);
console.log('"".charAt(0) => ', "".charAt(0));
console.log('""[0] => ', ""[0]);
console.log('"a" > "Z" => ', "a" > "Z");
console.log('"Kitty" > "Dinosaur" => ', "Kitty" > "Dinosaur");
