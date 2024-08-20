function makeHTTPRequest(lat, lon) {
    let url = "https://api.open-meteo.com/v1/forecast?latitude=" + lat + "&longitude=" + lon + "&current=temperature_2m";
    Shelly.call("HTTP.GET", {url: url}, function(result) {
      let result = JSON.parse(result.body);
      let temp = result.current.temperature_2m;
      console.log("Temperature last 2 minutes is:", temp);
    });
  }
  
  Shelly.call("Shelly.DetectLocation", null, function(result) {
    console.log(result);
    let lat = result.lat;
    let lon = result.lon;
    makeHTTPRequest(lat, lon);
  });