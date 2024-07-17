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
  
  // changeLEDColor(30, 20, 80, 80);
  
  
  Timer.set(3000, true, function() {
    let red = Math.round(Math.random() * 100);
    let green = Math.round(Math.random() * 100);
    let blue = Math.round(Math.random() * 100);
    let brightness = Math.round(Math.random() * 100);
    
    changeLEDColor(red, green, blue, brightness);
  });