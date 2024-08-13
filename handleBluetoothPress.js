Shelly.addEventHandler(function (event) {
    if (event.info.event === "BLU_BUTTON") {
        console.log("Battery is", event.info.data.Battery, "%");
        console.log("Button pressed", event.info.data.Button);
        Shelly.call("Switch.Toggle", { id: 0 });
    }
})