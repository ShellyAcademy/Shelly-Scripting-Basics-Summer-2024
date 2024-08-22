Shelly.addStatusHandler(function (data) {
    if (data.name === "switch" && data.delta.output !== undefined) {
        let isOn = data.delta.output;
        let message = "The connected device is NOT working!";
        if (isOn){
          message = "The connected device is working!";
        }
        console.log(message);
    }
})