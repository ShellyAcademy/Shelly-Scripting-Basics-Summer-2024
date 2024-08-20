Shelly.call("Shelly.ListMethods", null, function (result) {
    // console.log(result);
    let methods = result.methods;

    let controlMethods = [];
    let statusMethods = [];
    let configMethods = [];
    let otherMethods = [];

    methods.forEach(function (method) {
        // console.log(method);
        if (method.indexOf("Set") !== -1) {
            controlMethods.push(method);
        } else if (method.indexOf("Get") !== -1) {
            statusMethods.push(method);
        } else if (method.indexOf("Config") !== -1) {
            configMethods.push(method);
        } else {
            otherMethods.push(method);
        }
    })

    console.log("Control Methods: ", controlMethods);
    console.log("Status Methods:", statusMethods);
    console.log("Configuration Methods:", configMethods);
    console.log("Other Methods:", otherMethods);
});