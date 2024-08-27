function sendEmailNotification(motionReport, doorWindowReport) {
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
        htmlContent: "<html><body><b>Dear</b> user, this is your report for the last interval:<br>Motion:" + motionReport + "<br>Door&Window: + " + doorWindowReport + "</body></html>"
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


let report = {
  motion: [],
  doorWindow: []
};

Shelly.addEventHandler(function(event) {
  // console.log(event);
  if (event.info.event === "shelly-blu") {
    // console.log(event);
    let motionAddress = "38:39:8f:a5:9d:19";
    let doorWindowAddress = "e8:e0:7e:cb:ad:5d";
    
    let currentTime = new Date();
    if (event.info.data.address === doorWindowAddress) {
      let state = event.info.data.window;
      // Door&Window is opened
      if (state === 1) {
        report['doorWindow'].push(currentTime);
      } 
    } else if (event.info.data.address === motionAddress) {
      let state = event.info.data.motion;
      // Motion is triggered
      if (state === 1) {
        report['motion'].push(currentTime);
      }
    }
    console.log(report);
  }
});

Timer.set(1000 * 10, false, function() {
  let motionReport = report.motion;
  let doorWindowReport = report.doorWindow;
  sendEmailNotification(motionReport, doorWindowReport);
});