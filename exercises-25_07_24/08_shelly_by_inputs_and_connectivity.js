let input = 3;
let connectivity = "Another";
let result;

switch(input) {
  case 1:
    if(connectivity === "WiFi"){
      result = "Shelly Plus 1PM\nShelly Plus 1\nShelly Pro 1\nShelly 1L\nShelly 1L Bypass\nShelly RGBW2\nShelly 1"
    }else if(connectivity === "Bluetooth"){
      result = "Shelly Plus 1PM\nShelly Plus 1\nShelly Pro 1";
    }else if (connectivity === "LAN"){
      result = "Shelly Pro 1";
    }else{
      result = "Invalid Connectivity";
    }
   break;
   case 2:
     if(connectivity === "WiFi"){
      result = "Shelly Plus 2PM\nShelly EM\nShelly Pro 1PM\nShelly Pro 2PM\nShelly Pro 2\nShelly Dimmer 2\nShelly Uni";
    }else if(connectivity === "Bluetooth"){
      result = "Shelly Plus 2PM\nShelly Pro 1PM\nShelly Pro 2PM\nShelly Pro 2";
    }else if (connectivity === "LAN"){
      result = "Shelly Pro 1PM\nShelly Pro 2PM\nShelly Pro 2";
    }else{
      result = "Invalid Connectivity";
    }
   break;
   case 3:
     if(connectivity === "WiFi"){
      result = "Shelly Pro 3";
    }else if(connectivity === "Bluetooth"){
      result = "Shelly Pro 3";
    }else if (connectivity === "LAN"){
      result = "Shelly Pro 3";
    }else{
      result = "Invalid Connectivity";
    }
   break;
   case 4:
     if(connectivity === "WiFi"){
      result = "Shelly Plus i4\nShelly Plus i4 DC\nShelly Pro 4PM\nShelly Wall Switch 4";
    }else if(connectivity === "Bluetooth"){
      result = "Shelly Plus i4\nShelly Plus i4 DC\nShelly Pro 4PM\nShelly Wall Switch 4";
    }else if (connectivity === "LAN"){
      result = "Shelly Pro 4PM";
    }else{
      result = "Invalid Connectivity";
    }
   break;
   default: result = "Invalid Input"
}
console.log(result);