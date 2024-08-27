function timerCode() {
    let actualTemperature = 22;
    let desiredTemperature = 24;

    Shelly.call("Switch.GetStatus", { id: 0 }, function (result) {
        let temperatureFromShelly = result.temperature.tC - actualTemperature;
        console.log("Temperature from Shelly:", temperatureFromShelly);
        if (temperatureFromShelly > desiredTemperature) {
            Shelly.call("Switch.Set", { id: 0, on: false });
        }
    });
}

Timer.set(1000 * 5, false, timerCode);