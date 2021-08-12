
function sum() {
    let total = 0;
    for (let value of arguments) 
        total += value;
    return total;
}

console.log(sum(1,2, 3, 4, 5,10 ,20)); // if only one argument output : NaN
// even with 5 arguments the js engine will only take the first two