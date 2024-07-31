let sum = 0;
let index = 1;
let arr = [100, 10, 20, 30, 45];
let n = arr[0];

while (sum < n) {
  let currentNumber = arr[index];
  sum += currentNumber;
  index++;
}

console.log(sum);