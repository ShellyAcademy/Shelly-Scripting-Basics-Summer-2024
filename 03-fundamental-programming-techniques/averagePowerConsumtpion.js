let powerConsumption = []; // initialize as empty array

Timer.set(1000, true, function() {
  let switchStatus = Shelly.getComponentStatus("Switch:0");
  let apower = switchStatus.apower;
  console.log("apower:", apower);
  
  powerConsumption.push(apower);
  
  if (powerConsumption.length === 6) {
    let totalConsumption = 0;
    for (let i = 0; i < powerConsumption.length; i++) {
      // Sum all of the elements in the array
      totalConsumption += powerConsumption[i];
      console.log("Total consumption:", totalConsumption);
    }
    let averageConsumption = totalConsumption / powerConsumption.length;
    console.log("Power consumption for the last minute:", powerConsumption);
    console.log("Average power consumption:", averageConsumption);
    powerConsumption = []; // Restart the array after the operations, preparing for the next minute
  }
})