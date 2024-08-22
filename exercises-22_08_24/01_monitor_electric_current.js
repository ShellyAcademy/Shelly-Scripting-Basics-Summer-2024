let currentConsumptionLimit = 0.3;

Shelly.addStatusHandler(function (data) {
    let componentType = data.component;
    let name = data.name;

    if (componentType === "switch:0" && name === "switch" && data.delta != undefined) {
        let currentAmpsUsage = data.delta.current;
        if (currentAmpsUsage > currentConsumptionLimit) {
            console.log("current usage is", currentAmpsUsage);
            Shelly.call("Switch.Set", { id: 0, on: false });
        }
    }
})