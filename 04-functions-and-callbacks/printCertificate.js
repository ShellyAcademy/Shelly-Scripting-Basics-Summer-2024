function printHeader() {
    console.log("------------------");
    console.log("CERTIFICATE");
    console.log("------------------");
}
  
function printName(firstName, lastName) {
  console.log(firstName + " " + lastName);
}

function printCertificate(generation, firstName, lastName) {
  printHeader();
  printName(firstName, lastName);
  console.log("GENERATION:", generation);
}

printCertificate(2, "Shelly", "Dimmer");