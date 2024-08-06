function temperatureInRange(temperature) {
    let result;
    if (temperature >= 16 && temperature <= 43) {
      result = "yes";
    } else {
      result = "no";
    }
    return result;
  }
  
  Shelly.call("Switch.GetStatus", {"id": 0}, function(result) {
    let temperature = result.temperature.tC;
    console.log("The device temperature is", temperature);
    // let result = temperatureInRange(temperature);
    // console.log("Is temperature in range:", result);
    
    console.log("Is temperature in range:", temperatureInRange(temperature));
  });