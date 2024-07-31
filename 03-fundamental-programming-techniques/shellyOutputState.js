Shelly.call("Switch.GetStatus", {"id": 0}, function(result) {
    let plugVoltage = result.voltage;
    console.log("Current output voltage:", plugVoltage, "V (volts)");
    
    // let kiloVolts = plugVoltage * 0.001;
    let kiloVolts = plugVoltage / 1000;
    console.log("Current output voltage:", kiloVolts, "kv (kiloVolts)");
    
    let totalConsumption = result.aenergy.total;
    console.log("Total  device consumption:", totalConsumption, "Wh");
  });