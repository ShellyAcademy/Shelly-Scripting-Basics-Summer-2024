function shellyPlugChangeLEDColor(red, green, blue) {
    let config = {
        "config": {
            "leds": {
                "colors": {
                    "switch:0": {
                        "on": {
                            "rgb": [red, green, blue],
                            "brightness": 100
                        }
                    }
                }
            }
        }
    };
    Shelly.call("PLUGS_UI.SetConfig", config);
}

let url = "https://air-quality-api.open-meteo.com/v1/air-quality?latitude=52.52&longitude=13.41&hourly=nitrogen_dioxide";

function changeLEDColors() {
    Shelly.call("HTTP.GET", { url: url }, function (result) {
        let response = JSON.parse(result.body);
        // console.log(response);
        let valuesByTime = response.hourly.nitrogen_dioxide;
        let maxValue = 0;
        let condition = "";

        for (let i = 0; i < valuesByTime.length; i++) {
            let currentIndex = valuesByTime[i];
            if (currentIndex > maxValue) {
                maxValue = currentIndex;
            }
        }

        // console.log("Max Value is:", maxValue);
        if (maxValue >= 0 && maxValue <= 40) {
            condition = "GOOD";
            shellyPlugChangeLEDColor(100, 100, 100);
        } else if (maxValue > 40 && maxValue <= 90) {
            condition = "FAIR";
            shellyPlugChangeLEDColor(0, 100, 0);
        } else if (maxValue > 340 && maxValue <= 1000) {
            condition = "EXTREMELY POOR";
            shellyPlugChangeLEDColor(100, 0, 0);
        }

        console.log("The condition is:", condition);
    });
}

// Timer set to one hour
// Timer.set(1000 * 60 * 60, true, function() {
//   changeLEDColors();
// });

Timer.set(1000 * 10, false, function() {
  changeLEDColors();
});