function getUserAge(processAge) {
  Shelly.call("HTTP.GET", { "url": "http://dummyjson.com/users/1" }, function (result) {
    let resultObj = JSON.parse(result.body);
    processAge(resultObj.age);
  })
}

getUserAge(function (age) {
  if (age >= 18) {
    console.log("Yes, user with ID: 1 is bigger than 18 years old")
  } else {
    console.log("No, user with ID: 1 is NOT bigger than 18 years old")
  }
})


