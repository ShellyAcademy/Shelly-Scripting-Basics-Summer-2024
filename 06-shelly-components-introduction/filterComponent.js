Shelly.addStatusHandler(function (e) {
    console.log(e);
    // filter the components you want to look for
    if (e.component === "switch:0") {
        // check if output was changed under the delta object
        if (e.delta.output !== undefined) {
            // check what happened and perform action accordingly
            if (e.delta.output) {
                console.log("switch turned on.");
            } else {
                console.log("switch turned off.");
            }
        }
    }
});