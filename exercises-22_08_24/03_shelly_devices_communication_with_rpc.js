let CONFIG = {
    currentStatus: undefined,
    devices: ["192.168.0.17", "192.168.0.92"]
}

function syncDevices() {
    for (let i = 0; i < CONFIG.devices.length; i++) {
        let ipAddress = CONFIG.devices[i];
        let url = "http://" + ipAddress + "/rpc/Switch.Set?id=0&on=" + CONFIG.currentStatus;
        Shelly.call("HTTP.GET", { url: url });
    }
}

Shelly.addStatusHandler(function (data) {
    if (data.name === "switch" && data.delta.output !== undefined) {
        CONFIG.currentStatus = data.delta.output;
        let message = "The connected device is NOT working!";
        if (CONFIG.currentStatus) {
            message = "The connected device is working!";
        }
        syncDevices();
        console.log(message);
    }
})