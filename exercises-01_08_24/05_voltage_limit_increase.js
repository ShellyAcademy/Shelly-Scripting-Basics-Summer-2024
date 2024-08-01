let input = [120, 45.55, -150]
let sumOfVoltages = 0;

for (let i = 0; i < input.length; i++){
  let currentVoltage = input[i];
  
  if(currentVoltage === "NoMorePower"){
    break;
  } else if (currentVoltage < 0){
    console.log("Invalid operation!");
    break;
  }
  
  console.log("Increase:", currentVoltage.toFixed(2));
  sumOfVoltages += currentVoltage;
}

console.log("Total:", sumOfVoltages.toFixed(2));