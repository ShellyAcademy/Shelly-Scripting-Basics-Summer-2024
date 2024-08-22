let isAlarmOn = false;

function singlePush() {
    let msg = "Alarm is already active";

    if (!isAlarmOn) {
        msg = "Successfully activated the alarm system!";
        isAlarmOn = true;
    }

    return msg;
}

function doublePush() {
    return isAlarmOn ? "Added siren sound to the alarm" : "Please activate the alarm system to add this add-on";
}

function triplePush() {
    return isAlarmOn ? "Added vibrations to the alarm" : "Please activate the alarm system to add this add-on";
}

function longPush() {
    let msg = "Alarm is already deactivated!";

    if (isAlarmOn) {
        msg = "Successfully deactivated the alarm system!";
        isAlarmOn = false;
    }

    return msg;
}

Shelly.addEventHandler(function (data) {
    if (data.component === "button:200") {
        let actionType = data.info.event;
        let msg;

        switch (actionType) {
            case "single_push": msg = singlePush(); break;
            case "double_push": msg = doublePush(); break;
            case "triple_push": msg = triplePush(); break;
            case "long_push": msg = longPush(); break;
        }

        console.log(msg);
    }

})