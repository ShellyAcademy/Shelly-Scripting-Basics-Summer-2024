function convertToObject(input){
    let inputToObj = JSON.parse(input);
    
    for(let element in inputToObj){
      let keyValue = inputToObj[element];
      console.log(element, "-", keyValue);
    }
  }
  
  let input = '{"name": "ShellyPlusPlugS", "version": "0.14.0", "generation": 2}';
  convertToObject(input);