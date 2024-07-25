let side = 5;
let area = side * side;
let expectedResult = 26;
let result;

console.log("I am before if/else statement");

if (area === expectedResult){
    console.log("I am in the case where area is same with expected result!");
    result = "Area matches with exprected result";
}else{
    result = "CALCULATION ERROR! Area NOT same with expected result!";
    console.log("I am in the case where area is NOT same with expected result!");
}

console.log(result);