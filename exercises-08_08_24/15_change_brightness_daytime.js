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

function dayTimeBrightness(hour){
    if (hour >= 22){
      //console.log("Setting brightness to 20");
      changeBrightness(20);
    } else if ( hour >= 18){
      //console.log("Setting brightness to 60");
      changeBrightness(60);
    } else {
      //console.log("Setting brightness to 100");
      changeBrightness(100);
    }
}

function dayTimeBrightness2(hour){
  switch (hour) {
    case "1am":
    case "2am":
    case "3am":
    case "4am": 
    case "5am":
    case "6am": changeBrightness(20);break;
    case "7am": 
    case "8am":
    case "9am":
    case "10am":
    case "11am":
    case "12am":
    case "1pm":
    case "2pm":
    case "3pm":
    case "4pm":
    case "5pm":changeBrightness(100); break;
    case "6pm": changeBrightness(60); break;
    case "7pm": 
    case "8pm": 
    case "9pm": 
    case "10pm": 
    case "11pm":
    case "12pm": changeBrightness(20);break;
  
    default:
        break;
  }
}

dayTimeBrightness2("11pm");