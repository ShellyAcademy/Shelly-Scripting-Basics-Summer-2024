function factorial(n){
    if (n <= 1) {
        return 1;
    }
    
    let data = factorial(n - 1);
    return data * n;
}

console.log(factorial(5));