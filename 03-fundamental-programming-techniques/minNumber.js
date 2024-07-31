let arr = [100, 99, 80, 70];
let min = arr[0];

for (let i = 1; i < arr.length; i++) {
  let num = arr[i];
  if (num < min) {
    min = num;
  }
}
console.log(min);