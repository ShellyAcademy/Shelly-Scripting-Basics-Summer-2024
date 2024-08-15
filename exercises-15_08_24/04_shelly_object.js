function shellyObj(input){
    let obj = {
      deviceName: "default_name",
      init: function(name){
        deviceName = name;
      },
      details: function(){
        console.log(deviceName, "optimize energy consumption");
      }
    }
    
    for(let i = 0; i < input.length; i++){
      let currentDeviceName = input[i];
      let currentElementObj = Object.create(obj);
      currentElementObj.init(currentDeviceName);
      currentElementObj.details();
    }
  }
  
  let input = ['Shelly Plus 1', 'Shelly Dimmer 2', 'Shelly 1'];
  shellyObj(input)