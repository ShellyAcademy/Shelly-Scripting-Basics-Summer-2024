let geolocation = Shelly.getComponentConfig("sys").location;
let lat = geolocation.lat;
let lon = geolocation.lon;
let url = "https://api.open-meteo.com/v1/forecast?latitude=" + lat + "&longitude=" + lon + "&hourly=temperature_2m&timezone=auto&forecast_days=3";

Shelly.call("HTTP.GET", { url: url }, function (response, errorCode, errorMessage) {
    let responseObj = JSON.parse(response.body);
    let dataArr = responseObj.hourly.time;
    let tempArr = responseObj.hourly.temperature_2m;

    for (let i = 0; i < dataArr.length; i += 3) {
        let currentTemp = tempArr[i];
        let message = "Data: " + dataArr[i] + " - Temperature: " + currentTemp + " °C ";
        if (currentTemp <= 16) {
            message += "(Shelly, turn the heating ON!)";
        } else {
            message += "(Shelly, turn the heating OFF!)"
        }

        console.log(message);
    }
})