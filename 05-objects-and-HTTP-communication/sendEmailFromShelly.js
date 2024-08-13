function sendEmailNotification() {
    const apiKey =
        ""; // YOUR API KEY

    let apiUrl = "https://api.brevo.com/v3/smtp/email";
    let headers = {
        "api-key": apiKey,
    };

    let body = {
        sender: {
            name: "Denis", // Name of the sender
            email: "noreply@shelly.academy", // Email of the sender
        },
        // email can be sent to multiple emails
        to: [
            {
                name: "Shelly", // Name of second receiver
                email: "shelly.softuni@gmail.com", // Email of second receiver
            },
        ],
        subject: "Smart Home Email",
        htmlContent: "<html><body><b>Dear</b> Shelly, This is an email to give you information about certain topic</body></html>"
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


sendEmailNotification();