let url = "https://api.zippopotam.us/us/94115";
Shelly.call("HTTP.GET", {url: url}, function(result) {
  if (result && result.code && result.code === 200) {
    let response = JSON.parse(result.body);
    let country = response.country;
    console.log("The Country is:", country);
  }
});