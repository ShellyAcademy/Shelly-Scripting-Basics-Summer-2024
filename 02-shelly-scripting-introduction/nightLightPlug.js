Timer.set(
    2000,
    // 1000 * 60 * 60 // milliseconds, - one hour
    // true, // repeat? true or false
    false,
    function () {
        let date = Date();
        let hour = date.getHours();
        let minutes = date.getMinutes();
        console.log("The date is:", date);
        console.log("The hour is:", hour);
        console.log("The minutes are:", minutes);

        if (hour >= 18 || hour <= 8) {
            Shelly.call("Switch.Set", { "id": 0, "on": true });
        } else {
            Shelly.call("Switch.Set", { "id": 0, "on": false });
        }
    }
)