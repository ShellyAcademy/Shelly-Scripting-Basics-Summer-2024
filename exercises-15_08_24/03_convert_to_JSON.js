function convertToJSON(name, description, color){
    let obj = {
      color: color,
      description: description,
      name: name
      
    }
    
    let objAsJSON = JSON.stringify(obj);
    console.log(objAsJSON);
  }
  
  convertToJSON('Shelly',  'Wall Switch 2', 'white');