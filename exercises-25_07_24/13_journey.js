let budget = 678.53;
let season = "winter";
let price;
let destination;
let vacationType;

switch(season){
    case "summer":
        if (budget <= 100){
            destination = "Bulgaria";
            vacationType = "Camp";
            price = budget * 0.30;
        }else if(budget <= 1000){
            destination = "Balkans";
            vacationType = "Camp";
            price = budget * 0.40;
        }
        else{
            destination = "Eurupe";
            vacationType = "Hotel";
            price = budget * 0.90;
        }
    break;
    case "winter":
        if (budget <= 100){
            destination = "Bulgaria";
            vacationType = "Hotel";
            price = budget * 0.70;
        }else if(budget <= 1000){
            destination = "Balkans";
            vacationType = "Hotel";
            price = budget * 0.80;
        }
        else{
            destination = "Eurupe";
            vacationType = "Hotel";
            price = budget * 0.90;
        }
    break;
}

console.log("Somewhere in", destination);
console.log(vacationType, "-" , Math.round(price));