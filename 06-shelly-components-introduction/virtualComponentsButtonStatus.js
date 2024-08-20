console.log("Hello, Shelly!");

Shelly.addStatusHandler(function(status) {
  console.log(status);
  if (status.component === "boolean:200" && typeof (status.delta.value) !== undefined) {
    console.log("Turning switch", status.delta.value ? "on" : "off");
    Shelly.call("Switch.Set", {id: 0, on: status.delta.value});
  } 
});