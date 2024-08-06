// synchronous way
let switchStatus = Shelly.getComponentConfig("switch:0");
// console.log(switchStatus);
// console.log("The end");

let sysStatus = Shelly.getComponentStatus("sys");
console.log(sysStatus);
console.log("The end");