let location = Shelly.getComponentConfig("sys").location;
let lat = location.lat;
let lon = location.lon;

let firstCallURL = "https://api.open-meteo.com/v1/forecast?latitude=" + lat + "&longitude=" + lon + "&current=precipitation,rain,wind_speed_10m&timezone=auto";
let secondCallURL = "https://api.open-meteo.com/v1/forecast?latitude=" + lat + "&longitude=" + lon + "&current=temperature_2m&timezone=auto";

function suntimes() {
    let d = new Date();
    let tz = +3;

    var location = Shelly.getComponentConfig("sys").location

    var radians = Math.PI / 180.0;
    var degrees = 180.0 / Math.PI;

    var a = Math.floor((14 - (d.getMonth() + 1.0)) / 12)
    var y = d.getFullYear() + 4800 - a;
    var m = (d.getMonth() + 1) + 12 * a - 3;
    var j_day = d.getDate() + Math.floor((153 * m + 2) / 5) + 365 * y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) - 32045;
    var n_star = j_day - 2451545.0009 - location.lon / 360.0;
    var n = Math.floor(n_star + 0.5);
    var solar_noon = 2451545.0009 - location.lon / 360.0 + n;
    var M = 356.0470 + 0.9856002585 * n;
    var C = 1.9148 * Math.sin(M * radians) + 0.02 * Math.sin(2 * M * radians) + 0.0003 * Math.sin(3 * M * radians);
    var L = (M + 102.9372 + C + 180) % 360;
    var j_transit = solar_noon + 0.0053 * Math.sin(M * radians) - 0.0069 * Math.sin(2 * L * radians);
    var D = Math.asin(Math.sin(L * radians) * Math.sin(23.45 * radians)) * degrees;
    var cos_omega = (Math.sin(-0.83 * radians) - Math.sin(location.lat * radians) * Math.sin(D * radians)) / (Math.cos(location.lat * radians) * Math.cos(D * radians));

    // sun never rises
    if (cos_omega > 1)
        return [null, -1];

    // sun never sets
    if (cos_omega < -1)
        return [-1, null];

    // get Julian dates of sunrise/sunset
    var omega = Math.acos(cos_omega) * degrees;
    var j_set = j_transit + omega / 360.0;
    var j_rise = j_transit - omega / 360.0;

    // get sunrise and sunset times in UTC 
    var utc_time_set = 24 * (j_set - j_day) + 12;
    var utc_time_rise = 24 * (j_rise - j_day) + 12;

    var local_rise = (utc_time_rise + tz) % 24;
    var local_set = (utc_time_set + tz) % 24;

    var local_rise = new Date(d.getFullYear(), d.getMonth(), d.getDate(), local_rise | 0, ((local_rise - (local_rise | 0)) * 60) | 0, 0)
    var local_set = new Date(d.getFullYear(), d.getMonth(), d.getDate(), local_set | 0, ((local_set - (local_set | 0)) * 60) | 0, 0)

    return [local_rise, local_set];
}

function convertMillisecondsToTime(duration) {
    let hours = Math.floor(duration / (1000 * 60 * 60));
    let minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((duration % (1000 * 60)) / 1000);
    let result = hours + "h " + minutes + "m " + seconds + "s";
    return result;
}


function currentDayInfoProcessor(dayInfo) {
    let sunrise = dayInfo[0];
    let sunset = dayInfo[1];

    let fullDay = 24 * 60 * 60 * 1000;
    let dayLightDuration = sunset - sunrise;
    let nightDuration = fullDay - dayLightDuration;

    let sunriseTime = sunrise.toString().split(' ')[4];
    let sunsetTime = sunset.toString().split(' ')[4];

    return {
        sunrise: sunriseTime,
        sunset: sunsetTime,
        dayDuration: convertMillisecondsToTime(dayLightDuration),
        nightDuration: convertMillisecondsToTime(nightDuration)
    }
}

function getWeatherData() {
    let firstCallResult = undefined;
    let secondCallResult = undefined;

    Shelly.call("HTTP.GET", { url: firstCallURL }, function (result) {
        let parsedObj = JSON.parse(result.body);
        let detailedData = parsedObj.current;
        firstCallResult = {
            windSpeed: detailedData.wind_speed_10m,
            rain: detailedData.rain
        }
        console.log("First Call Finished!");
    });

    Shelly.call("HTTP.GET", { url: secondCallURL }, function (result) {
        let parsedObj = JSON.parse(result.body);
        let detailedData = parsedObj.current.temperature_2m;
        secondCallResult = { temperature: detailedData };
        console.log("Second Call Finished!");
    });

    let timerHandle;

    timerHandle = Timer.set(1000, true, function () {
        if (firstCallResult != undefined && secondCallResult != undefined) {
            Timer.clear(timerHandle);
            let currentDayInfo = currentDayInfoProcessor(suntimes());
            let combinedObj = Object.assign({}, firstCallResult, secondCallResult, currentDayInfo);
            Shelly.call("Text.Set", { id: 200, value: JSON.stringify(combinedObj) });
            console.log("New data saved to the Virtual Component");
        }
    })
}

Timer.set(1000 * 60 * 15, true, getWeatherData);

////////////////////////

Shelly.addStatusHandler(function (data) {
    if (data.component === "text:200") {
        let obj = JSON.parse(data.delta.value);
        let temp = obj.temperature;
        let windSpeed = obj.windSpeed;
        console.log(windSpeed);
        let savedWindSpeed = Shelly.getComponentStatus("Number:201").value;
        let msg = "values are equal!";
        if (windSpeed != savedWindSpeed) {
            msg = "new wind speed value saved!"
            Shelly.call("Number.Set", { id: 201, value: windSpeed });
        }
    }
})