function bedroomLogic(){
    console.log("Bedroom Logic to be implemented!");
  }
  
  function livingRoomLogic(){
    console.log("Living Room Logic to be implemented!");
  }
  
  Shelly.addStatusHandler(function(data){
    if (data.component === "enum:200"){
      let choosenRoom = data.delta.value;
      switch(choosenRoom){
        case "bedroom": bedroomLogic(); break;
        case "livind_room": livingRoomLogic(); break;
      }
    }
  })