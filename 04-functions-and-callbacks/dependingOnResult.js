Shelly.call("Sys.GetStatus", {}, function (result) {
    let time = result.time;
    console.log("Time before slice:", time);
    let timeSliced = Number(time.slice(0, 2));
    console.log("Time after slice:", timeSliced);

    if (timeSliced > 20) {
        Shelly.call("Switch.Set", { "id": 0, "on": true });
    }
});