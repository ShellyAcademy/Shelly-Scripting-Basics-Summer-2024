let url = "https://api.open-meteo.com/v1/forecast?latitude=51.5&longitude=10.5&daily=weather_code";
Shelly.call("HTTP.GET", {url: url}, function(result) {
  let response = JSON.parse(result.body);
  let times = response.daily.time;
  let weatherCodes = response.daily.weather_code;
  
  // console.log(times);
  // console.log(weatherCodes);
  
  for (let i=0; i<times.length; i++) {
    let time = times[i];
    let weatherCode = weatherCodes[i];
    console.log("Weather code for", time, "is", weatherCode);
  }
  
});