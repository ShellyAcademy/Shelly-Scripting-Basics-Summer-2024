let person = {
    name: "John",
    age: 20,
    "city": "Berlin",
    showDetailsPerson: function() {
    // Access fields from inside the object
    //   console.log("Name:", this.name, "Age:", this.age, "City:", this.city);
    console.log("Name:", this.name, "Age:", this.age, "City:", this.city);
    // Not valid
    // console.log("Name:", name, "Age:", age, "City:", city);
    }
  }
  
  // Access fields from outside the object
  // console.log(person.name);
  // console.log(person);
  person.showDetailsPerson();
  let name = "Denis";