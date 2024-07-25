let product = 'Shelly TRV';
let city = "Las Vegas";
let quantity = 4;

let pricePerOneDevice;
let currency;
let sum;

if (city === "Sofia") {
    currency = "BGN";
    switch (product) {
        case "Shelly Button":
            pricePerOneDevice = 11.80;
            break;
        case "Shelly Duo GU10":
            pricePerOneDevice = 23.80;
            break;
        case "Shelly Flood":
            pricePerOneDevice = 43.90;
            break;
        case "Shelly Pro 1":
            pricePerOneDevice = 99.00;
            break;
        case "Shelly TRV":
            pricePerOneDevice = 131.80;
            break;
    }
} else if (city === "Las Vegas") {
    currency = "USD";
    switch (product) {
        case "Shelly Button":
            pricePerOneDevice = 7.20;
            break;
        case "Shelly Duo GU10":
            pricePerOneDevice = 11.90;
            break;
        case "Shelly Flood":
            pricePerOneDevice = 29.90;
            break;
        case "Shelly Pro 1":
            pricePerOneDevice = 65.50;
            break;
        case "Shelly TRV":
            pricePerOneDevice = 86.90;
            break;
    }
} else if (city === "Munich") {
    currency = "EUR";
    switch (product) {
        case "Shelly Button":
            pricePerOneDevice = 5.90;
            break;
        case "Shelly Duo GU10":
            pricePerOneDevice = 11.90;
            break;
        case "Shelly Flood":
            pricePerOneDevice = 21.90;
            break;
        case "Shelly Pro 1":
            pricePerOneDevice = 49.50;
            break;
        case "Shelly TRV":
            pricePerOneDevice = 65.90;
            break;
    }
}

sum = pricePerOneDevice * quantity;
console.log(sum.toFixed(2), currency);