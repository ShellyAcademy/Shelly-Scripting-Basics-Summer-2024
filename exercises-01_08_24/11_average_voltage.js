let deviceName = "Plug S";
let voltages = [234, 215.25, 220, 215, 210, 205, 226.3, 214, 217, 218, 220.5, 221];
let brokenCounter = 0;
let sumOfVoltages = 0;
let i;

for (i = 0; i < voltages.length; i++) {
    let currentVoltage = voltages[i];

    if (currentVoltage >= 210) {
        sumOfVoltages += currentVoltage;
        continue;
    } else {
        if (++brokenCounter > 1) {
            break;
        }
    }
}

let result;
if (brokenCounter > 1) {
    let averageVoltage = sumOfVoltages / voltages.length;
    result = deviceName + " works well!\nAverage voltage: " + averageVoltage;
} else {
    result = deviceName + " has been thrown away at month ", i;
}

console.log(result);