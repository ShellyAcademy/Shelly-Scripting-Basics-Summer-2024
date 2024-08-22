let refreshDataPeriodByMinutes = 15;

let location = Shelly.getComponentConfig("sys").location;
let lat = location.lat;
let lon = location.lon;
let fullUrl = "https://api.open-meteo.com/v1/forecast?latitude=" + lat + "&longitude=" + lon + "&current=wind_speed_10m";

function getWeatherSpeed() {
    Shelly.call("HTTP.GET", { url: fullUrl }, function (result) {
        let resultObj = JSON.parse(result.body);
        let windSpeed = resultObj.current.wind_speed_10m;
        Shelly.call("Number.Set", { id: 201, value: windSpeed });
    })
}

Timer.set(1000 * 5, true, getWeatherSpeed)


//////////////

Shelly.addStatusHandler(function (data) {
    if (data.component === "number:201") {
        let windSpeed = data.delta.value;

        if (windSpeed < 25) {
            console.log("Light Wind Speed, no need to take an action!");
        } else if (windSpeed >= 25 && windSpeed < 40) {
            console.log("Wind speed is increasing! Prepare yourself to take action!");
        } else {
            console.log("Extreme Conditions! Please take action!");
        }
    }
})