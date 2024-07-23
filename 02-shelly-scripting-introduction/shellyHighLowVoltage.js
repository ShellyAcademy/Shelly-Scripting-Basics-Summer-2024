Shelly.call("Switch.GetStatus", { "id": 0 }, function (result) {
    let voltage = result.voltage;
    let highVoltage = voltage > 230;
    console.log("Voltage > 230?", highVoltage);
});