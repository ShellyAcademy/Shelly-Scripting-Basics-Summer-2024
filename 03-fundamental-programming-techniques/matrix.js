let valueToSearch = 3;
let m = [[1, 2, 3], 
          [4, 5, 6]];
let isFound = false;

let indexOutside = m.indexOf(valueToSearch);
console.log(indexOutside);

for (let row = 0; row < m.length; row++) {
  let index = m[row].indexOf(valueToSearch);
  if (index != -1) {
    isFound = true;
    console.log("Found at row", row, "and column", index);
    // access the value: m[row][index]
    console.log(m[0][2]);
  }
}