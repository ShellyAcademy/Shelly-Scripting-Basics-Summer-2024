let device = {
    name: "Shelly 1PM Mini Gen3",
    printDetails: function(){
      console.log("Device name is", this.name);
    }
  }
  
  device.ipAddress = "http://192.168.0.237/";
  device.ipAddress = "http://192.168.0.120/";
  
  device.printDetails();