// Catches all events - to see the result should trigger an event, let's say turn on/off the switch
Shelly.addEventHandler(function (event) {
    console.log(event);
});