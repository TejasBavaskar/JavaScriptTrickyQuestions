// https://jsfiddle.net/2hh5zjs4/7/
var i = 0;
var arr = [];
for (; i < 3; i++) {
  arr.push(i);
}
console.log('for (; i < 3; i++) { =>', arr);
/////////////////////////////////////////////////
i = 0;
arr = [];
for (; i < 3;) {
  arr.push(i++);
}
console.log('for (; i < 3;) { =>', arr);
/////////////////////////////////////////////////
var str = 'Hello';
arr = [];
for (i = str.length; i--;) {
  arr.push(str[i]);
}
console.log('for (; i < 3;) { =>', arr);
/////////////////////////////////////////////////
arr = [];
for (i = 1; i <= 10; i++) {
  !(i % 2) && arr.push(i);
}
console.log('(i % 2) && arr.push(i) => ', arr);
/////////////////////////////////////////////////
outer: for(;;) {
  for(;;) {
    console.log('This will be called');
      break outer;
    }
  console.log('This will not be called')
  break;
}
/////////////////////////////////////////////////
