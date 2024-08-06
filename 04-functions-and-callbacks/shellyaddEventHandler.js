function stopTimer() {
    console.log("Stopping Timer.");
  }
  
  function startTimer() {
    console.log("Starting timer.");
  }
  
  Shelly.addEventHandler(function(event) {
    if (event.info.event === "RESET_TIMER") {
      stopTimer();
      startTimer();
      console.log("Timer was reset");
    }
  })