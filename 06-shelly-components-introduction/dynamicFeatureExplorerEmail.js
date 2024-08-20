function sendEmailNotification(methods) {
    const apiKey =
        ""; // YOUR API KEY

    let apiUrl = "https://api.brevo.com/v3/smtp/email";
    let headers = {
        "api-key": apiKey,
    };

    let body = {
        sender: {
            name: "Denis", // Name of the sender
            email: "shelly.softuni@gmail.com", // Email of the sender
        },
        // email can be sent to multiple emails
        to: [
            {
                name: "Shelly", // Name of second receiver
                email: "shelly.softuni@gmail.com", // Email of second receiver
            },
        ],
        subject: "Smart Home Email",
        htmlContent:
            "<html><body><b>Dear</b> Shelly, " + methods + "</body></html>",
    };

    Shelly.call(
        "HTTP.Request",
        {
            method: "POST",
            url: apiUrl,
            headers: headers,
            body: body,
        },
        function (result, errorCode, errorMessage) {
            if (errorCode === 0) {
                console.log("Successfully sent email. Result is:", result.body);
            } else {
                console.log("There was an error sending the email:", errorMessage);
            }
        }
    );
}

Shelly.call("Shelly.ListMethods", null, function (result) {
    // console.log(result);
    let methods = result.methods;

    let controlMethods = [];
    let statusMethods = [];
    let configMethods = [];
    let otherMethods = [];

    methods.forEach(function (method) {
        // console.log(method);
        if (method.indexOf("Set") !== -1) {
            controlMethods.push(method);
        } else if (method.indexOf("Get") !== -1) {
            statusMethods.push(method);
        } else if (method.indexOf("Config") !== -1) {
            configMethods.push(method);
        } else {
            otherMethods.push(method);
        }
    })

    // console.log("Control Methods: ", controlMethods);
    // console.log("Status Methods:", statusMethods);
    // console.log("Configuration Methods:", configMethods);
    // console.log("Other Methods:", otherMethods);
    let controlMethodsString = "<b>Control Methods:</b>" + controlMethods;
    let statusMethodsString = "<b>Status Methods:</b>" + statusMethods;
    let configMethodsStrirng = "<b>Config Methods:</b>" + configMethods;
    let otherMethodsString = "<b>Other Methodos:</b>" + otherMethods;
    let allMethodsString =
        "<br>" +
        controlMethodsString +
        "<br>" +
        statusMethodsString +
        "<br>" +
        configMethodsStrirng +
        "<br>" +
        otherMethodsString;
    sendEmailNotification(allMethodsString);
});