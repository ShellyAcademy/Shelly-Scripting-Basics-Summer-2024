let voltage = 57;
let result;

if(voltage > 220){
  result = "High Voltage!";
} else if (voltage < 50){
  result = "Low Voltage!";
} else{
    result = "Normal Voltage!";
}

console.log(result);