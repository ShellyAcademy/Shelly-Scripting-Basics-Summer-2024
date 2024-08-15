function sendEmailNotification(powerConsumption) {
    const apiKey =
        ""; // YOUR API KEY

    let apiUrl = "https://api.brevo.com/v3/smtp/email";
    let headers = {
        "api-key": apiKey,
    };
    
    let message = "Dear Alex,<br><br>In your ongoing quest to optimize energy consumption, here's the latest update:<br><br>Total Power Consumption in the last hour: " + powerConsumption + " kWh<br><br>Keep up the great work in making your home more energy-efficient!<br><br>Best regards,<br>Shelly Power Consumption Agent"

    let body = {
        sender: {
            name: "Shelly Power Consumption Agent", // Name of the sender
            email: "noreply@shelly.academy", // Email of the sender
        },
        // email can be sent to multiple emails
        to: [
            {
                name: "Shelly", // Name of second receiver
                email: "shelly.softuni@gmail.com", // Email of second receiver
            },
        ],
        subject: "Energy Consumption Update",
        htmlContent: message
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

let previousConsumption = 0;

function calcTotalPowerConsumption(){
  let switchStatus = Shelly.getComponentStatus("switch:0");
  let totalConsumption = switchStatus.aenergy.total;
  let currentPowerConsumption = totalConsumption - previousConsumption;
  
  if(currentPowerConsumption > 1000){
    currentPowerConsumption /= 1000;
    if (currentPowerConsumption > 2.5){
      sendEmailNotification(currentPowerConsumption)
    }
  }
  
  previousConsumption = currentPowerConsumption * 1000;
}


Timer.set(1000 * 60 * 30, true, calcTotalPowerConsumption);