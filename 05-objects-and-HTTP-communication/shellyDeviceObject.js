function shellyDevice(name, inputs, connectivity) {
    let shelly = {};
    shelly.name = name;
    shelly.inputs = inputs;
    // shelly.connectivity = connectivity;
    shelly["connectivity"] = connectivity;
    
    return shelly;
  }
  
  let shelly1 = shellyDevice("Shelly Pro 1", 1, "WiFi");
  let shelly2 = shellyDevice("Shelly Pro 2", 2, "Bluetooth");
  let shelly3 = shellyDevice("Shelly Pro 1", 1, "WiFi");


  console.log("Before change");
  console.log(shelly2);
  shelly2.inputs = 3;
  console.log("After change");
  console.log(shelly2);
  
//   console.log(shelly1);
//   console.log(shelly2);
//   console.log(shelly3);