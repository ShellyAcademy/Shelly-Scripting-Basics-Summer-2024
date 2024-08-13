function formatGrade(grade){
    let message;
    if(grade < 3){
      grade = 2;
      message = "Fail";
    } else if (grade < 3.5){
      message = "Poor";
    } else if (grade < 4.5){
      message = "Good";
    } else if (grade < 5.5){
      message = "Very Good";
    } else {
      message = "Excellent";
    }
    
    message = message + " ( " + grade + " )";
    return message;
  }
  
  console.log(formatGrade(4.50));