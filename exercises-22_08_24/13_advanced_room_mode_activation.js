function bedroomActivities(buttonPresses) {
    let msg;
    switch (buttonPresses) {
        case "single_push": msg = "Turn On All Lights"; break;
        case "double_push": msg = "Morning Mode: Open all blinds and play fav music!"; break;
        case "triple_push": msg = "Sunday Mode: Set the alarm to 2 hours later than ordinary and turn on the coffee machine!"; break;
        case "long_push": msg = "Turn Off All Lights!"; break;
    }
    return msg;
}

function livingRoomActivities(buttonPresses) {
    let msg;
    switch (buttonPresses) {
        case "single_push": msg = "Turn On All Lights"; break;
        case "double_push": msg = "Meditation Mode: Set Room Lights brightness to 20% and change their color to green!"; break;
        case "triple_push": msg = "Theatre Mode: Turn Off all lights, blinds and sounds. Connecting the audio system to the TV"; break;
        case "long_push": msg = "Turn Off All Lights!"; break;
    }
    return msg;
}

Shelly.addEventHandler(function (data) {
    if (data.component === "button:200") {
        let eventType = data.info.event;
        let selectedRoom = Shelly.getComponentStatus("enum:200").value;
        let message = selectedRoom + " - ";
        switch (selectedRoom) {
            case "living_room": message += livingRoomActivities(eventType); break;
            case "bedroom": message += bedroomActivities(eventType); break;
        }

        console.log(message);
    }

})