// let methodName = "Switch.GetStatus";
// let methodName = "Sys.SetDebug"; // Edge case - the last element
let methodName = "Switch.ResetCounters";

Shelly.call("Shelly.ListMethods", null, function(result) {
  let methods = result.methods;
  let currentMethod = methods[0];
  let index = 0;
  let isFound = true;
  
  while (currentMethod !== methodName) {
    currentMethod = methods[index];
    console.log(currentMethod);
    // Check if we reached the end of the Array and if we reached we set the isFound value to False and then break (exit) the loop
    if (index === methods.length) {
      isFound = false;
      break;
    }
    index++; // same as index += 1
  }
  
  if (isFound === true) {
    console.log("Method found!", methodName);
  } else {
    console.log("Method not found!", methodName);
  }
});