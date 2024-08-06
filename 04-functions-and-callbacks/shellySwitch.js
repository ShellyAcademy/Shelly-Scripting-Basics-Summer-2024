Shelly.call("Switch.GetStatus", { "id": 0 }, function (result) {
    console.log(result);
});

console.log("The end");