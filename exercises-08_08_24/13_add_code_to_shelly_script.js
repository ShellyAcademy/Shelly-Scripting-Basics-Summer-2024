function addScriptToScript(){
    Shelly.call("Script.PutCode", { 
      'id': 5,
      'code': "console.log('My Second Dynamically Added script!')"
      }, function(result){
        Shelly.call("Script.Start", {'id': 5}, function(data){})
      }
      )
  }
  
  addScriptToScript();