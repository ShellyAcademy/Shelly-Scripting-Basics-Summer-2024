let length = 105;
let width =  77;
let height = 89;
let percentage = 18.5;

let volume = length * width * height;
let volumeInLiters = volume / 1_000;
let occupiedSpace = percentage / 100;

let litersNeeded = volumeInLiters * (1 - occupiedSpace);
console.log(litersNeeded.toFixed(1));