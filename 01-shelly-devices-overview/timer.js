Timer.set(3000, true, function() {
    // Shelly.call("Switch.Set", {"id": 0, "on": true});
    Shelly.call("Switch.Toggle", {"id": 0});
  });