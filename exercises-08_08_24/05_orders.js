function totalPrice(product, quantity){
    let pricePerOne;
    switch(product){
      case "Shelly Button": pricePerOne = 7.2; break;
      case "Shelly Flood": pricePerOne = 29.90; break;
      case "Shelly Pro 1": pricePerOne = 65.50; break;
      case "Shelly TRV": pricePerOne = 86.90; break;
    }
    
    return (pricePerOne * quantity).toFixed(2);
  }
  
  console.log(totalPrice("Shelly Button", 5));