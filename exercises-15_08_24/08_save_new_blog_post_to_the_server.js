url = "http://192.168.0.62:3030/jsonstore/blog/posts";

let dataToSave = {
    body: "My Body Information and so on...",
    title: "My Brand New Shelly Gen 3 Devices New One"
}

Shelly.call("HTTP.POST",
    {
        url: url,
        body: JSON.stringify(dataToSave)
    },
    function (response, errorCode, errorMessage) {
        if (errorCode === 0) {
            console.log(response.body);
        } else {
            console.log("Error occured:", errorMessage)
        }
    })