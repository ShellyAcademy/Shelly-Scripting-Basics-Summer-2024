function changeBrightness(rgb) {
    let config = {
        "config": {
            "leds": {
                "colors": {
                    "switch:0": {
                        "on": {
                            "rgb": rgb,
                            "brightness": 100
                        }
                    }
                }
            }
        }
    };
    Shelly.call("PLUGS_UI.SetConfig", config);
}

function discoBall(){
  Timer.set(1000, true, function(){
    let red = Math.round(Math.random() * 100);
    let green = Math.round(Math.random() * 100);
    let blue = Math.round(Math.random() * 100);
    changeBrightness([red, green, blue]);
  })
}

discoBall();