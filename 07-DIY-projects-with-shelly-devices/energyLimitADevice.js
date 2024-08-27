let maxWatts = 50;

Shelly.call("Switch.GetStatus", {id: 0}, function(result) {
  let usedWatts = result.aenergy.total;
  if (usedWatts > maxWatts) {
    Shelly.call("Switch.Set", {id: 0, on: false});
  }
});