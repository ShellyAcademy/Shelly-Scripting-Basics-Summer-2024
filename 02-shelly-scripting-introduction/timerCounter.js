let time = 2000; // milliseconds
let timerCounter = 0;

Timer.set(time, true, function () {
    timerCounter++; // timerCounter = timerCounter + 1;
    console.log("Timer elapsed:", time * timerCounter);
});