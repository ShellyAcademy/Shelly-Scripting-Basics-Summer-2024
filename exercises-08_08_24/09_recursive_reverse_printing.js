function recursiveReversePrinting(n){
    if(n <= 1){
        return console.log(n);
    }

    console.log(n);
    recursiveReversePrinting(n - 1);
}

recursiveReversePrinting(100);