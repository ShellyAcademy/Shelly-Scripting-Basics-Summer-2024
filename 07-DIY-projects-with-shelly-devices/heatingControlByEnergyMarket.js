function getLatestEnergyPrice(callback) {
    let url = "https://api.energy-charts.info/price?bzn=DE-LU";
    Shelly.call("HTTP.GET", { url: url }, function (result) {
        let response = JSON.parse(result.body);
        let priceArray = response.price;
        let latestPrice = priceArray[priceArray.length - 1];
        callback(latestPrice);
    });
}

function timerCode() {
    let priceBudget = 15; // Daily Budget in Euros

    getLatestEnergyPrice(function (latestPrice) {
        // Convert price to Euros per watt-hour (since the price is given in EUR/MWh)
        let pricePerWattHour = latestPrice / 1000000 // 1 MWh = 1 000 000 Wh 
        console.log("Price per watt-hour:", pricePerWattHour);

        Shelly.call("Switch.GetStatus", { id: 0 }, function (result) {
            let usedWattHours = result.aenergy.total; // Energy used in watt-hours (Wh)
            let currentlyUsedBudget = pricePerWattHour * usedWattHours;

            console.log("Used Budget:", currentlyUsedBudget);
            console.log("Used watt-hours:", usedWattHours);

            if (currentlyUsedBudget > priceBudget) {
                console.log("Budget exceeded. Turning of the switch...");
                Shelly.call("Switch.Set", { id: 0, on: false });
            }
        });
    })
}

// timerCode();

Timer.set(1000 * 10, false, function () {
    timerCode();
});