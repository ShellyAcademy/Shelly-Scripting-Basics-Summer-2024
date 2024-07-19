let meters = 150;
let price = 7.61;
let priceWithoutDiscount = meters * price;
let discountAmount = priceWithoutDiscount * 0.18;

console.log("The Final Price is: " + (priceWithoutDiscount - discountAmount) + " USD.");
console.log("The discount is: " + discountAmount + " USD.");
