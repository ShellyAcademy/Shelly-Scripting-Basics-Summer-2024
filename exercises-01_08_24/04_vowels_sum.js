let value = "dimmer";
let sum = 0;

for (let i = 0; i < value.length; i++){
  let currentLetter = value[i];
  if(currentLetter === "a"){
    sum += 1;
  } else if (currentLetter === "e"){
    sum += 2;
  } else if (currentLetter === "i"){
    sum += 3;
  } else if (currentLetter === "o"){
    sum += 4;
  } else if (currentLetter === "u"){
    sum += 5;
  }
}

console.log(sum);