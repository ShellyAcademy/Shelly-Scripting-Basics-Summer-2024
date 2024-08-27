const express = require("express")

const app = express()
app.use(express.json())

const PORT = 3000

// start the server to listen on the port
app.listen(PORT, function() {
	console.log("Server Listening on port " + PORT);
});

// axios will be used to make HTTP get and post requests
const axios = require('axios')

// example rest api handler for get requests
// it requests the api.open-meteo api and processes the information to
// extract average daily temperatures, humidity and wind speed
// this is an example how a proxy rest api can be created to process
// larger loads of data and return only relevant information to the caller
// it can be usefull in cases when the client cannot handle big requests and needs
// intermediate party to process the result before returning to the original requester
app.get("/get_10days_avg_forecast", function(request, response) {
    const latitude = request.query["latitude"];
    const longitude = request.query["longitude"];
    const url = "https://api.open-meteo.com/v1/forecast?latitude=" + latitude + 
    "&longitude=" + longitude + "&past_days=10&hourly=temperature_2m,relativehumidity_2m,windspeed_10m"
	axios.get(url)
                .then(function(res) {
                    let totalTemp = 0;
                    let totalHumidity = 0;
                    let totalWind = 0;
                    let hourly = res.data.hourly;

                    for (let i=0; i<hourly.time.length;i++) {
                        totalTemp += hourly.temperature_2m[i];
                        totalHumidity += hourly.relativehumidity_2m[i];
                        totalWind += hourly.windspeed_10m[i];
                    }
                    const avgTemp = totalTemp / hourly.time.length;
                    const avgHumidity = totalHumidity / hourly.time.length;
                    const avgWind = totalWind / hourly.time.length;
                    const data = {
                        "averageTemperature": avgTemp,
                        "averageHumidity": avgHumidity,
                        "averageWind": avgWind
                    }
                    response.status(200).send(data);
                }).catch(function(error) {
                    response.status(400).json({error: error});
                })
});

