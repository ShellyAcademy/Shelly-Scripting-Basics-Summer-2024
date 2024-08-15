function setAnyColorToLED(RGBarr){
    let config = {
      "config": {
        "leds": {
          "colors": {
            "switch:0": {
              "on": {
                "rgb": RGBarr
              }
            }
          }
        }
      }
    }
    Shelly.call("PLUGS_UI.SetConfig", config);
  }
  
  function setRedColor(){
    setAnyColorToLED([100, 0, 0]);
  }
  
  function setGreedColor(){
    setAnyColorToLED([0, 100, 0]);
  }
  
  function setBlueColor(){
    setAnyColorToLED([0, 0, 100]);
  }
  
  let geolocation = Shelly.getComponentConfig("sys").location;
  let lat = geolocation.lat;
  let lon = geolocation.lon;
  let url = "https://api.open-meteo.com/v1/forecast?latitude=" + lat + "&longitude=" + lon + "&current_weather=true"
  
  
  Shelly.call("HTTP.GET", {url: url}, function(response){
    let responseObj = JSON.parse(response.body);
    let temperature = responseObj.current_weather.temperature;
    let message;
    if (temperature <= 5){
      message = "The weather is cold outside!";
      setBlueColor();
    } else if (temperature > 5 && temperature < 25){
      message = "The weather is nice outside!";
      setGreedColor();
    } else {
      message = "The weather is hot outside!";
      setRedColor();
    }
    
    message += "\nIt is " + Math.round(temperature) + " degree celsius!"
    console.log(message);
  })