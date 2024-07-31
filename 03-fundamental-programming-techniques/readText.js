let arr = ["SoftUni", "Shelly", "Plug S", "Button", "Stop", "AfterStop"];

let index = 0;
while (true) { // Similar to creating an infinite loop, but we have a condition which will stop the infinite loop
  let str = arr[index];
  index++; // same as index += 1
  if (str === "Stop") {
    console.log("Breaking the loop");
    break; // STOP the loop
  }
  console.log(str); // We skip this console.log when we find the word 'STOP', because we exit the loop there
}