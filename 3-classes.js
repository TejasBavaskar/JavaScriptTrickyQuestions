// https://jsfiddle.net/n00x7fhk/7/
function A() {}
// Static
A.getSmth = function() {
	return 1;
}
// Public
A.prototype.getAnother = function() {
	return 2;
}

console.log('A.getSmth() => ', A.getSmth());
console.log('A.prototype.getAnother() => ', A.prototype.getAnother());

var a = new A();
console.log('a.getAnother() => ', a.getAnother());
try {
	console.log(a.getSmth());
} catch(e) {
	console.log('a.getSmth() TypeError => ', e.constructor.name);
}
///////////////////////////////////////////
var b = function someFunction() {
	console.log('var b = function someFunction() { => ', someFunction);
}
b();
try {
	console.log(someFunction);
} catch(e) {
	console.log('someFunction => ', e.constructor.name);
}
///////////////////////////////////////////
var arr = [];
var c = {
	"4": 4,
  "38": 38,
  "1": 1
};
for (var key in c) {
	arr.push(c[key]);
}
console.log(arr);
///////////////////////////////////////////
arr = [];
c = {
	"+4": 4,
  "+38": 38,
  "+1": 1
};
for (var key in c) {
	arr.push(c[key]);
}
console.log(arr);
