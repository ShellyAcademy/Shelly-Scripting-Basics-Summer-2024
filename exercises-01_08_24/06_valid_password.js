let credentials = ["jane_smith", "mypassword"];
let database = ["1234", "mypassword", "password"];

let username = credentials[0];
let password = credentials[1];
let isFound = false;

for (let i = 0; i < database.length; i++){
  let currentPasswordinDatabase = database[i];
  
  if(currentPasswordinDatabase === password){
    isFound = true;
    console.log("Welcome, ", username, "!");
    break;
  }
}

if(isFound === false){
  console.log("Error: Incorrect password. Access denied.");
}