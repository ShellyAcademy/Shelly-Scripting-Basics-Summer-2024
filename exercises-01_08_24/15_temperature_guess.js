let guesses = [31, 15, 59, 43, 41, 57, 25, 58, 42];
let temp = Shelly.getComponentStatus("switch:0").temperature.tC.toFixed(0);
let isFound = false;

for (let i = 0; i < guesses.length; i++){
  let currentGuess = guesses[i];
  if (currentGuess == temp){
    isFound = true;
    break;
  }
}

let result;

if(isFound == true){
  result = "Correct! " + temp;
} else {
  result = "Not Found! " + temp;
}

console.log(result);