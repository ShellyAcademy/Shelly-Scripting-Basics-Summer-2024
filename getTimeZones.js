let url = "https://www.timeapi.io/api/Time/current/zone?timeZone=Europe/Stockholm";
Shelly.call("HTTP.GET", {"url": url}, function(result) {
  // console.log(result);
  let response = JSON.parse(result.body);
  let dateTime = response.dateTime;
  console.log("The date time is:", dateTime);
});