function changeLEDColors(red, green, blue, brightness) {
    let config = {
      config: {
        leds: {
          colors: {
            "switch:0": {
              on: {
                rgb: [red, green, blue],
                brightness: brightness
              },
            },
          },
        },
      },
    }
    
    Shelly.call("PLUGS_UI.SetConfig", config);
  }
  
  // changeLEDColors(80, 50, 70, 100);
  
  
  function changeLED() {
    Shelly.call("Switch.GetStatus", {id: 0}, function(result) {
      let consumption = result.aenergy.total;
      
      if (consumption > 1000) {
        changeLEDColors(100, 0, 0, 100);
      } else if (consumption > 500) {
        changeLEDColors(0, 100, 0, 100);
      } else if (consumption > 200) {
        changeLEDColors(0, 0, 100, 100);
      }
    });
  }
  
  changeLED();