let command = "start"; // start or stop
// let command = "other";

console.log("SWITCH");
switch (command) {
    case "start":
        console.log("starting");
        console.log("the Shelly");
        break
    // break;
    case "stop":
        console.log("stopping");
        break;
    default:
        console.log("default");
}

console.log("IF");
if (command === "start") {
    console.log("starting");
    console.log("the Shelly");
} else if (command === "stop") {
    console.log("stopping");
} else {
    console.log("default");
}