let arr1 = [10];
let arr2 = arr1;

let obj1 = {value: 10}
let obj2 = obj1;

console.log(arr1[0]);
console.log(arr2[0]);

arr2[0] = 20;
arr1[0] = 100;

console.log(arr1[0]);
console.log(arr2[0]);

console.log(obj1.value);
console.log(obj2.value);

obj2.value = 50;

console.log(obj1);
console.log(obj2);