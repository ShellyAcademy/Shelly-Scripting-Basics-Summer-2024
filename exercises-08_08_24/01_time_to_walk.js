function formatOutput(number){
    return (number < 10 ? "0" : " ") + number;
  }
  
  function timeToWalk(steps, studentsFootprint, studentSpeedInKm){
    let distanceInMeters = steps * studentsFootprint;
    let speedMetersSec = studentSpeedInKm * 1000 / 3600;
    
    let time = distanceInMeters / speedMetersSec;
    
    let restCount = Math.floor(distanceInMeters / 500);
    let restTimeInSeconds = restCount * 60;
    
    time += restTimeInSeconds;
    
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor((time % 3600) / 60);
    let seconds = Math.floor((time % 3600) % 60);
    
    console.log(formatOutput(hours), ":", formatOutput(minutes), ":", formatOutput(seconds));
  }
  
  timeToWalk(2564, 0.70, 5.5);