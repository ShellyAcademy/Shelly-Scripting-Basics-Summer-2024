let url = "https://api.coindesk.com/v1/bpi/currentprice.json";
let minPrice = 50000;

Shelly.call("HTTP.GET", { url: url }, function (result) {
    // console.log(result);
    let response = JSON.parse(result.body);
    let priceUSD = response.bpi.USD.rate_float;
    console.log("The price in USD is:", priceUSD);
    console.log("The minimum price is:", minPrice);
    if (priceUSD <= minPrice) {
        console.log("Turning off the BTC miners");
        Shelly.call("Switch.Set", { id: 0, on: false });
    }
});