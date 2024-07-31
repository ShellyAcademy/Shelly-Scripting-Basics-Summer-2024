let timerCounter = 0;

let timerHandler = Timer.set(1000, true, function() {
  timerCounter++;
  console.log("Time remaining:", 60 - timerCounter);
  if (timerCounter === 60) {
    Timer.clear(timerHandler);
  }
});