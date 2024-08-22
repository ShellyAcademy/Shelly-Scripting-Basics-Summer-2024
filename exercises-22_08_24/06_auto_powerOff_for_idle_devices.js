let secondsToTurnOffTheDeviceIfNotUsed = 10;
let timerHandler = undefined;

function timerCode() {
    console.log("Device is idle for", secondsToTurnOffTheDeviceIfNotUsed, "seconds! Turned off!");
    timerHandler = undefined;
    Shelly.call("Switch.Set", { id: 0, on: false });
}

Shelly.addStatusHandler(function (data) {
    let currentSwitchStatus = Shelly.getComponentStatus("switch:0").output;
    if (currentSwitchStatus === true && data.component === "switch:0") {
        if ((data.delta.hasOwnProperty("apower") && data.delta.apower == 0) || (data.delta.hasOwnProperty("current") && data.delta.current == 0)) {
            if (timerHandler === undefined) {
                timerHandler = Timer.set(1000 * secondsToTurnOffTheDeviceIfNotUsed, false, timerCode)
                console.log("Device is NOT in use! Created new Timer!");
            }
        } else if (timerHandler != undefined && !data.delta.hasOwnProperty("aenergy")) {
            console.log("Device in use! Timer deleted!");
            Timer.clear(timerHandler);
            timerHandler = undefined;
        }
    }
})