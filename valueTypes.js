let a = 10;
let b = "abc";

let c = a;
let d = b;

console.log(a, b, c, d);

c = 15;

console.log(a, b, c, d);

function test(a) {
  a++;
  console.log("a inside function", a);
}

test(a);
console.log(a);