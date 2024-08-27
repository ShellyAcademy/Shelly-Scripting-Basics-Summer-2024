let latitude = "<your latitude>"
let longitude = "<your longitude>"
let url = "http://<your server ip>:3000/get_10days_avg_forecast?latitude=" + latitude + "&longitude=" + longitude;

Shelly.call("HTTP.GET", { "url": url }, function(result) {
  let response = JSON.parse(result.body);
  console.log("Response from API", response);
});

