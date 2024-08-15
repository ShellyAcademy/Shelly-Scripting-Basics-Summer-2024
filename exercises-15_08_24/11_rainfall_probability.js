let geolocation = Shelly.getComponentConfig("sys").location;
let lat = geolocation.lat;
let lon = geolocation.lon;
let url = "https://api.open-meteo.com/v1/forecast?latitude=" + lat + "&longitude=" + lon + "&timezone=Europe/Sofia&daily=precipitation_probability_max"

function rainfall(response) {
    let responseObj = JSON.parse(response.body);
    let timeArray = responseObj.daily.time;
    let precipitationArray = responseObj.daily.precipitation_probability_max;

    console.log("There is a higher chance of precipitation on the following dates:");

    for (let i = 0; i < timeArray.length; i++) {
        let currentDayPrecipitation = precipitationArray[i];
        if (currentDayPrecipitation >= 50) {
            console.log("Date", timeArray[i], "- Probability:", currentDayPrecipitation, "%");
        }
    }
}

Shelly.call("HTTP.GET", { url: url }, rainfall);