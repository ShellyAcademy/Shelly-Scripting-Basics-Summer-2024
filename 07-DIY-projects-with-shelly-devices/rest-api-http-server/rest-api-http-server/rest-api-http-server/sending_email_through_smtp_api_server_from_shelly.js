let url = "http://<your server ip>:3001/send_email"

let body = {
  from: "<from email address>",
  to: "<recepient email address>",
  text: "<h1>This is a test email</h1>",
  subject: "A test email from my Shelly device"
}

Shelly.call("HTTP.POST", { "url": url, body: body}, function(result) {
  let response = JSON.parse(result.body);
  console.log("Response from API", response);
});
