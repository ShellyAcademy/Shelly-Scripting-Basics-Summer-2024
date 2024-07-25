let day = "Monday";
let hour = 11;

let result = "closed";

switch(day){
  case "Monday":
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
  case "Friday":
  case "Saturday":
    if(hour > 10 && hour < 18){
      result = "open";
    }
}

console.log(result);