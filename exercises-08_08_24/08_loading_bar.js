function loadingBar(progress){
    let message = progress + " % ";
    
    if (progress < 100){
      message += "Still loading!";
    } else {
      message += "Complete!"
    }
    
    return message;
  }
  
  console.log(loadingBar(100));