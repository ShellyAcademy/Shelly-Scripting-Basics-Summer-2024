let url = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m";

function setLightBrightness(brightness) {
  Shelly.call("Light.Set", {id: 0, on: true, brightness: brightness});
}


Shelly.call("HTTP.GET", {url: url}, function(result){
   // console.log(result);
   let response = JSON.parse(result.body);
   let temperatureArray = response.hourly.temperature_2m;
   let temperature = temperatureArray[temperatureArray.length - 1];
   console.log("The temperature is:", temperature);
   if (temperature > 30) {
     // Shelly.call("Light.Set", {id: 0, on: true, brightness: 100});
     setLightBrightness(100);
   } else if (temperature > 20) {
     // Shelly.call("Light.Set", {id: 0, on: true, brightness: 50});
     setLightBrightness(50);
   } else {
     // Shelly.call("Light.Set", {id: 0, on: true, brightness: 25});
     setLightBrightness(25);
   }
});