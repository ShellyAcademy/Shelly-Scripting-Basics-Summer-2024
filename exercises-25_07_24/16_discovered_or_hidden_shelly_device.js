let sysConfig = Shelly.getComponentConfig("sys");
let discovered = sysConfig.device.discoverable;

let result;

if(discovered == true){
  result = "Your Shelly Device is shown in Discovered devices";
}else{
  result = "Your Shelly Device is NOT shown in Discovered devices";
}

console.log(result );