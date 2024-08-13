function showObjectProperties(obj) {
    for (let prop in obj) {
      console.log(prop, "-", obj[prop]);
    }
  }
  
  let shellyObj = {
    name: "Shelly Door Window 2",
    size: "82mm x 23mm x 20mm",
    battery: "2x 3 V Lithium CR123A2",
    range: "30m",
    radiofrequency: "2400 - 2500 MHz",
  }
  
  showObjectProperties(shellyObj);