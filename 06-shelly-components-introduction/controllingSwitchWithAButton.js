Shelly.addEventHandler(function (event) {
    console.log(event);
    if (event.info.component === "button:200") {
        Shelly.call("Switch.Set", { id: 0, on: false });
    } else if (event.info.event === "BLU_BUTTON") {
        Shelly.call("Switch.Set", { id: 0, on: true });
    }
});