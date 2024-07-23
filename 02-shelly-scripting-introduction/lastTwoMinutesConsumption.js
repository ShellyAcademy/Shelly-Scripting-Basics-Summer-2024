Shelly.call("Switch.GetStatus", { id: 0 }, function (result) {
    let consumptionByMinutes = result.aenergy.by_minute;

    let consumptionForCurrentMinute = consumptionByMinutes[0];
    let consumptionForLastMinute = consumptionByMinutes[1];

    if (consumptionForCurrentMinute > consumptionForLastMinute) {
        console.log("Usage is higher than one minute age!");
        let difference = consumptionForCurrentMinute - consumptionForLastMinute;
        console.log("The difference is:", difference);
    } else {
        console.log("Everything is OK");
    }
}
);