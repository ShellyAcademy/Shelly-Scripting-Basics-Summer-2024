let url = "https://v2.jokeapi.dev/joke/Programming?safe-mode";

Shelly.call("HTTP.GET", { url: url }, function (response) {
    let parsedResult = JSON.parse(response.body);
    let type = parsedResult.type;
    let joke = "The joke is: ";
    if (type === "single"){
      joke += parsedResult.joke;
    } else {
      let firstPart = parsedResult.setup;
      let secondPart = parsedResult.delivery;
      joke += "firstPart: " + firstPart + "\nsecondPart: " + secondPart;
    }
    console.log(joke);
})