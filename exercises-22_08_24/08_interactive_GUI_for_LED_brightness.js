Shelly.addStatusHandler(function (data) {
    if (data.component === "number:200") {
        let value = data.delta.value;
        let url = "http://192.168.0.42/rpc/RGB.Set?id=0&brightness=" + value;
        Shelly.call("HTTP.GET", { url: url });
    }
})