let requiredAmountOfNylon = 5;
let requiredAmountOfPaint = 10;
let requiredQuantityOfThinnerPaint = 10;
let workHoursOfCraftsman = 1;

let requiredAmountOfNylonWithAddition = requiredAmountOfNylon + 2;
let requiredAmountOfPaintWithAddition = requiredAmountOfPaint * 1.10;

let priceForBag = 0.40;

let priceForNylon = requiredAmountOfNylonWithAddition * 1.50;
let priceForPaint = requiredAmountOfPaintWithAddition * 14.50;
let priceForThinnerPaint = requiredQuantityOfThinnerPaint * 5;

let sumOfAllMaterialsCost = priceForNylon + priceForPaint + priceForThinnerPaint + priceForBag;

let amountForCraftsman = sumOfAllMaterialsCost * 0.3 * workHoursOfCraftsman;

let totalSum = sumOfAllMaterialsCost + amountForCraftsman;

console.log(totalSum.toFixed(2));