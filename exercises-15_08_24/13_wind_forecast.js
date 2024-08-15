let geolocation = Shelly.getComponentConfig("sys").location;
let lat = geolocation.lat;
let lon = geolocation.lon;
let url = "https://api.open-meteo.com/v1/forecast?latitude=" + lat + "&longitude=" + lon + "&timezone=Europe/Sofia&daily=windspeed_10m_max";

Shelly.call("HTTP.GET", { url: url }, function (response, errorCode, errorMessage) {
    let responseObj = JSON.parse(response.body);
    let dateArr = responseObj.daily.time;
    let windSpeedArr = responseObj.daily.windspeed_10m_max;

    for (let i = 0; i < dateArr.length; i++) {
        let windSpeed = windSpeedArr[i];
        let condition = "";
        if (windSpeed >= 20) {
            condition = "(Close the awnings!)"
        }
        console.log("Date:", dateArr[i], "- Wind Speed:", windSpeed, "km/h", condition);
    }
})