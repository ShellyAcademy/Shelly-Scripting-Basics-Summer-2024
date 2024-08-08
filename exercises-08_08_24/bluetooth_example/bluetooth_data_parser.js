function oneClick() {
    console.log("One click logic!");
  }
  function twoClick() {
    console.log("Two clicks logic!");
  }
  function threeClick() {
    console.log("Three clicks logic!");
  }
  function fourClick() {
    console.log("Four clicks logic!");
  }
  
  Shelly.addEventHandler(function (eventData) {
    let response = eventData;
    let buttonPresses = response.info.data.button;
    if (buttonPresses == 1) {
      oneClick();
    } else if (buttonPresses == 2) {
      twoClick();
    } else if (buttonPresses == 3) {
      threeClick()
    } else if (buttonPresses == 4) {
      fourClick();
    }
  })