function changeLEDColor(red, green, blue, brightness) {
    let config = {
        "config": {
            "leds": {
                "colors": {
                    "switch:0": {
                        "on": {
                            "rgb": [red, green, blue],
                            "brightness": brightness
                        }
                    }
                }
            }
        }
    };

    Shelly.call("PLUGS_UI.SetConfig", config);
}

Shelly.addEventHandler(function (event) {
    // console.log(event);
    // console.log(event);
    if (event.info.event == "shelly-blu") {
      console.log("Bluetooth event");
      let address = event.info.data.address;
      console.log(address);

      if (event.info.data.address == "38:39:8f:98:34:a1") {
        console.log("Button was pressed!");
        Timer.set(3000, true, function () {
            let red = Math.round(Math.random() * 100);
            let green = Math.round(Math.random() * 100);
            let blue = Math.round(Math.random() * 100);
            let brightness = Math.round(Math.random() * 100);

            changeLEDColor(red, green, blue, brightness);
        });
    }
    }
});

