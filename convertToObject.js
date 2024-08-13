let jsonString = '{"name": "George", "age": 40, "city": "London"}';

console.log(jsonString);
// not valid
// console.log(jsonString.name);
let obj = JSON.parse(jsonString);
console.log(obj.name);
for (let prop in obj) {
  console.log(prop, "-", obj[prop]);
}