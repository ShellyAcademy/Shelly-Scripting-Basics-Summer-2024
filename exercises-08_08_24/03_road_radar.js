function calcSpeedLimit(area){
    let speedLimit = 20;
    
    switch(area){
      case "motorway": speedLimit = 130; break;
      case "interstate": speedLimit = 90; break;
      case "city": speedLimit = 50; break;
    }
    
    return speedLimit;
  }
  
  function calcDrivingStatus(difference){
    let status;
    
    if (difference <= 20){
      status = "speeding";
    } else if (difference > 20 && difference <= 40){
      status = "excessive speeding";
    } else {
      status = "reckless driving";
    }
    
    return status;
  }
  
  function roadRadar(actualSpeed, area){
    let message;
    let speedLimit = calcSpeedLimit(area);
    
    if (actualSpeed > 0 && actualSpeed <= speedLimit){
       message = "Driving " + actualSpeed + " km/h in a " + speedLimit+ " zone";
    } else {
        let difference = actualSpeed - speedLimit;
        let status = calcDrivingStatus(difference);
        message = "The speed is " + difference + " km/h faster than the allowed speed of " + speedLimit + " - " + status; 
      
    }
    
    console.log(message);
  }
  
  roadRadar(200, 'motorway');