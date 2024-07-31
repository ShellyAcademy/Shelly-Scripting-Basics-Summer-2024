let arr = [70, 99, 100, 80];
let maxNumber = arr[0];
for (let i = 1; i < arr.length; i++) {
  let num = arr[i];
  if (num > maxNumber) {
    maxNumber = num;
  }
}
console.log(maxNumber);