function windSpeed(speed) {
    if (speed <= 1) {
      console.log("Calm -", speed, "km/h");
    } if (speed >= 2 && speed <= 11) {
      console.log("Moderate - ", speed, "km/h");
    } else if (speed >= 40 && speed <= 49) {
      console.log("Strong -", speed, "km/h");
    }
  }
  
  windSpeed(1);
  windSpeed(10);
  windSpeed(48);