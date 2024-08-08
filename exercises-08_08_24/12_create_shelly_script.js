function createScript(name){
    Shelly.call("Script.Create", {'name': name}, function(result){
      let scriptId = result.id;
      console.log(scriptId);
    })
  }
  
  createScript("myDynamicallyCreatedScript");