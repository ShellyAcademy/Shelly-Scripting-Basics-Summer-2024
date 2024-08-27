Shelly.addStatusHandler(function (status) {
    // console.log(status);
    if (status.component === "number:200" && status.delta.value !== undefined) {
        console.log(status);
        let brightness = status.delta.value;

        let urlPlug = 'http://192.168.0.92/rpc/PLUGS_UI.SetConfig?config={"leds":{"mode":"switch","colors":{"switch:0":{"on":{"rgb":[100,0,0],"brightness":' + brightness + '},"off":{"rgb":[100,100,100],"brightness":100}},"power":{"brightness":100}},"night_mode":{"enable":false,"brightness":10,"active_between":["22:00","06:00"]}},"controls":{"switch:0":{"in_mode":"detached"}}}';
        let urlDimmer1 = 'http://192.168.0.202/rpc/Light.Set?id=0&on=true&brightness=' + brightness;
        let urlDimmer2 = 'http://192.168.0.83/rpc/Light.Set?id=0&on=true&brightness=' + brightness;

        let urlsArray = [urlPlug, urlDimmer1, urlDimmer2];
        for (let i = 0; i < urlsArray.length; i++) {
            let url = urlsArray[i];
            Shelly.call("HTTP.GET", { url: url }, function (result) {
                console.log(result);
            })
        }
    }
})