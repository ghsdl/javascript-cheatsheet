// for loop
for (let index = 0; index < 5; index++) {
    if (index % 2 !== 0)
    console.log(index);
}

// as a while loop
let index = 0;
while (index < 5) {
    if (index % 2 !== 0)
        console.log(index);
    index++;
}

// and as a do-while loop 
let i = 9; // will be in console.log
do {
    if (i % 2 !== 0)
        console.log(i);
    i++;
} // the conditions is evaluated at the end
while (i < 5);