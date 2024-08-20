Shelly.addStatusHandler(function (eventData) {
    if (eventData.component === "switch:0") {
        // here we handle all the changes in the status of swiitch:0
        if (eventData.delta.output === true) {
            console.log("Switch 0 turned on.");
        }

        if (eventData.delta.output === false) {
            console.log("Switch 0 turned off.");
        }

        if (eventData.delta.apower >= 2000) {
            // handle change in power consumtpion
            console.log("Apower is:", eventData.delta.apower)
        }

        else {
            console.log("Some other status of the switch:0 changed.");
        }
    }
});