function changeBrightness(brightness) {
    let config = {
        "config": {
            "leds": {
                "colors": {
                    "switch:0": {
                        "on": {
                            "brightness": brightness
                        }
                    }
                }
            }
        }
    };
    Shelly.call("PLUGS_UI.SetConfig", config);
}

Timer.set(500, true, function(){
  let brightness = Math.round(Math.random() * 100);
  changeBrightness(brightness);
})