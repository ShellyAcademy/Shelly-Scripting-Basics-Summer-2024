Shelly.call("Switch.GetStatus", {"id": 0}, function(result) {
    let voltage = result.voltage;
    console.log("Voltage:", voltage);
    
    for (let i = 1; i <= voltage; i += 3) {
      console.log(i);
    } 
  });