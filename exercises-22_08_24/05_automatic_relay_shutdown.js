let timerToTurnOffTheOutputInSeconds = 10;

Shelly.addStatusHandler(function (data) {
    if (data.name === "switch" && data.delta.hasOwnProperty("output") && data.delta.output === true) {
        console.log("The device is turned on!");
        console.log("Timer started and after " + timerToTurnOffTheOutputInSeconds + "seconds will be toggled!");
        Timer.set(1000 * timerToTurnOffTheOutputInSeconds, false, function () {
            Shelly.call("Switch.Set", { id: 0, on: false }, function () {
                console.log("Timer is finished and the device is turned off!");
            }
            )
        })
    }
})