let budget = 2000;
let season = "Winter";
let fisherman = 13;
let price;

if(budget > 8000){
  return;
}

switch (season) {
    case "Spring":
        price = 3000;
    break;
    case "Summer":
    case "Autumn":
        price = 4200;
    break;
    case "Winter":
        price = 2600;
    break;
}

if (fisherman <= 6) {
  price *= 0.90;
} else if (fisherman >= 7 && fisherman <= 11) {
  price *= 0.85;
} else {
  price *= 0.75;
}

if (fisherman % 2 == 0 && season !== "Autumn"){
  price *= 0.95;
}

let result;

if(budget >= price){
  result = "Yes! You have " + (budget - price) + " USD left."
}else{
  result = "Not enough money! You need " + (price - budget) + " USD."
}

console.log(result);