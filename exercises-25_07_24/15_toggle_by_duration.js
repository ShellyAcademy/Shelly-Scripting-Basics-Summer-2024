let toggleTimeInSeconds = 1000 * 5;
Timer.set(toggleTimeInSeconds, true, function(){
  Shelly.call("Switch.Toggle", { 'id': 0});
})