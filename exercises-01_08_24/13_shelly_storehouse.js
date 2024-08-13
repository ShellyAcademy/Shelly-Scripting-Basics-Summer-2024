let input = ["Shelly TRV", "Shelly Pro 1", "Shelly Duo", "Shelly Flood", "Shelly Dimmer", "Shelly Uni", "Shelly Plug", "Shelly Motion 2", "Shelly Vintage A60", "Shelly 1", "Shelly Button", "Shelly TRV"];
let skipElementsCounter = 1;

let searchedDevice = input[0];
let isFound = false;

for (let i = 1; i < input.length; i++) {
    let currentDevice = input[i];
    
    if(currentDevice == "No More Devices"){
      skipElementsCounter++;
      break;
    }

    if (currentDevice !== searchedDevice) {
        continue;
    }

    isFound = true;
    console.log("You checked", (i - skipElementsCounter), "devices and found it.")
}

if (isFound == false) {
    console.log("The device you search is not here!\nYou checked", input.length - skipElementsCounter, "devices."
    )
}

//Second solution

// let input = ["Shelly Pro 2", "Shelly Dimmer", "Shelly Plus 1", "Shelly Duo", "Shelly Uni", "No More Devices"];
// let favoriteDevice = input[0];

// for (index = 1; index < input.length; index++) {
//     let currentDeviceName = input[index];

//     if (currentDeviceName === "No More Devices") {
//         console.log("The device you search is not here!\nYou checked", index - 1, "devices.");
//         break;
//     } else if (currentDeviceName === favoriteDevice) {
//         console.log("You checked", index - 1, "devices and found it.");
//         break;
//     }
// }