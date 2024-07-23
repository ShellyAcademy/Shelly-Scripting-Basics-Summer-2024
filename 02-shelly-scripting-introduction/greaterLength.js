let nameOne = "Shelly Dimmer";
// let nameTwo = "Shelly Plus";
let nameTwo = "Shelly Dimmer";

let nameOneLength = nameOne.length;
let nameTwoLength = nameTwo.length;

if (nameOneLength > nameTwoLength) {
    console.log(nameOne);
} else if (nameTwoLength > nameOneLength) {
    console.log(nameTwo);
} else {
    console.log("Names have equal length");
}