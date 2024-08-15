let geolocation = Shelly.getComponentConfig("sys").location;
let lat = geolocation.lat;
let lon = geolocation.lon;
let url = "https://api.sunrise-sunset.org/json?lat=" + lat + "&lng=" + lon + "&tzid=Europe/Sofia";

Shelly.call("HTTP.GET", {url: url}, function(response){
  let parsedResponse = JSON.parse(response.body);
  let sunrise = parsedResponse.results.sunrise;
  let sunset = parsedResponse.results.sunset;
  
  console.log("The sunrise time is", sunrise);
  console.log("The sunset time is", sunset);
});