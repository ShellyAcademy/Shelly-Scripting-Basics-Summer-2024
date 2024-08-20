function setData(id) {
    Shelly.call("Text.Set", { id: id, value: new Date() });
}

Shelly.addStatusHandler(function (status) {
    let component = status.component;
    if (component === "switch:0" && status.delta.output !== undefined) {
        let output = status.delta.output;
        if (output === true) {
            setData(200);
        } else if (output === false) {
            setData(201);
        }
    }
})