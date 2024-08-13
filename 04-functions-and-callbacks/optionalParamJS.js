function printName(name = 'default value') {
    console.log(name);
}

printName();

// defaultParameter in Shelly device - workaround
function printName(name) {
    if (name === undefined) {
      name = "default value";
    }
    console.log(name);
  }
  
  printName();