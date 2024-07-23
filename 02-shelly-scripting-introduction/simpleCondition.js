// let watts = 3350;
let watts = 2500;

if (watts > 2500) {
    console.log("Danger!");
    // Turn OFF the device
    Shelly.call("Switch.Set", { "id": 0, "on": false });
} else {
    console.log("Safe.");
    Shelly.call("Switch.Set", { "id": 0, "on": true });
}