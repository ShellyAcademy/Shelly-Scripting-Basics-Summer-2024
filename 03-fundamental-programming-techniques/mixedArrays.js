let arr = [1, 2, "Shelly Pro", "Shelly Dimmer"];
// console.log(arr);

// [String, Number, Function, Array]

let arr2 = ["Shelly Pro", "Shelly Dimmer", "Shelly Pro"];
// console.log(arr2);
let shellyPro = arr2[1];
// console.log("Shelly Device:", shellyPro);

// console.log("Array before updating value:", arr2);
arr2[2] = "Shelly Uni";
// console.log("Array after updating value:", arr2);

// console.log(arr2.length);

let numberArr = [1, 2, 3];
// console.log("The initial state of the number array is:", numberArr);
numberArr.push(4);
// console.log("The state of the number array after adding is:", numberArr);

let lastElement = numberArr.pop();
// console.log("Last element in the number array is:", lastElement);
// console.log("The new state of the number array is:", numberArr);

let slicedArr = numberArr.slice(0, 2) // start from 0, end to 2 (not inclusive) - (0, 2]
// console.log(slicedArr);

// console.log(numberArr.indexOf(1));

// ["Shelly Pro", "Shelly Dimmer", "Shelly Pro"];
// console.log(arr2.indexOf("Shelly Dimmer")); // result is 1, because Shelly Dimmer is at index 1
// console.log(arr2.indexOf("Shelly PM1 Mini")); // result is -1, because the element is not present in our array - arr2
arr2.push("Shelly Pro");
console.log("The latest state of the array is:", arr2);
console.log("The index of the first found Shelly Pro is:", arr2.indexOf("Shelly Pro")); // gives us the first occurence of the element