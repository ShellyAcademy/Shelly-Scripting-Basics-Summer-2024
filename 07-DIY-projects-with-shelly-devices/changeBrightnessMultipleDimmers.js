let dimmerIP = "192.168.0.83";

function changeBrightness(urlDimmer) {
    Shelly.call("HTTP.GET", { url: urlDimmer }, function (result) {
        console.log(result);
    })
}

Shelly.addStatusHandler(function (status) {
    if (status.component === "light:0" && status.delta.brightness !== undefined) {
        let brightness = status.delta.brightness;
        let urlDimmer = "http://" + dimmerIP + "/rpc/Light.Set?id=0&on=true&brightness=" + brightness;
        changeBrightness(urlDimmer);
    }
});