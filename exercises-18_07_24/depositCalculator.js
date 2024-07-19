let depositAmount = 2350;
let termOfTheDeposit = 6;
let annualInterestRate = 7;

let accumulatedInterest = depositAmount * (annualInterestRate / 100);
let interestRatePerMonth = accumulatedInterest / 12;
let totalAmount = depositAmount + termOfTheDeposit * interestRatePerMonth;

console.log(totalAmount);