Shelly.call("Shelly.ListMethods", { 'id': 0 }, function (result) {
    let array = result.methods;
    for (let i = 0; i < array.length; i++) {
        let currentMethod = array[i];
        let number = currentMethod.indexOf("Shelly");
        if (number === 0) {
            console.log(currentMethod)
        }
    }
})