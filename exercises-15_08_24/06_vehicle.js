function vehicleData(type, model, parts, fuel){
    let vehicle = {
      Type: "default",
      model: "default",
      parts: {},
      fuel: 0,
      init: function(type, model, parts, fuel){
        Type = type,
        this.model = model,
        this.parts = parts,
        this.fuel = fuel
      },
      drive: function(fuelLoss){
        this.fuel -= fuelLoss;
      }
    }
    
    let newVehicle = Object.create(vehicle);
    newVehicle.init(type, model, parts, fuel);
    newVehicle.drive(20);
    console.log(newVehicle.fuel);
    console.log(newVehicle.parts.power);
  }
  
  vehicleData("S", "N", {engine: 9, power: 500}, 840);