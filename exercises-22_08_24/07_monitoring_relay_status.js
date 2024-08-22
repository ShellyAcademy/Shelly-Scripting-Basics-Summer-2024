function setVirtualComponentIsInUse(valueToSet) {
    Shelly.call("Boolean.Set", { id: 200, value: valueToSet });
}

Shelly.addStatusHandler(function (data) {
    if (data.name === "switch") {
        let currentUsage = undefined;
        if (data.delta.hasOwnProperty("aenergy")) {
            currentUsage = data.delta.aenergy.by_minute[0];
        } else if (data.delta.hasOwnProperty("current")) {
            currentUsage = data.delta.current;
        }

        if (currentUsage != undefined && currentUsage > 0) {
            setVirtualComponentIsInUse(true);
        } else if (currentUsage != undefined && currentUsage == 0) {
            setVirtualComponentIsInUse(false);
        }
    }
});