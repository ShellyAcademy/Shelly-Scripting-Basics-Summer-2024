let url = "http://192.168.0.92/rpc/Switch.Set?id=0&on=true";

Shelly.call("HTTP.GET", {url: url}, function(result) {
  console.log(result.body);
})