// keywords BREAK and CONTINUE

let index = 0;

while (index <= 10) {
    if (index === 5) break;
    console.log(index);
    index++; // at the end of the 5th iteration we increment index and now index is 5 so we break out of the loop
}

let i = 0;

while (i <= 10) {
    if (i % 2 === 0) {
        i++;
        continue; // it will jump at the beginning of the loop and continue to execute going to the next iteration
        // old legacy thing on javascript
    }

    console.log(i); // we only get the odd numbers
    i++; 
}