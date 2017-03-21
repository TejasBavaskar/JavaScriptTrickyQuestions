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
