function getScriptStatus(scriptId){
    let result = Shelly.getComponentStatus("script:" + scriptId);
    return "The script " + result.id + " is running: " + result.running; 
  }
  
  function getScriptInfo(numberOne, numberTwo){
    let id = "script:" + numberOne;
    let result = Shelly.getComponentConfig(id);
    let scriptId = result.id;
    let scriptName = result.name;
    let runOnStartupStatus = result.enable;
    console.log("Script ID:", scriptId);
    console.log("Script Name:", scriptName);
    console.log("Enable:", runOnStartupStatus);
    console.log(getScriptStatus(numberTwo));
  }
  
  getScriptInfo(3,1);