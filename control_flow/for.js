// repeat an action a number of times = loops

// 5 types of loops : for - while - do...while - for...in and for...of

for (let index = 0; index < 5; index++) {
    console.log('Hello World', index);
}

// let index = 0 === initial expression
// index < 5 === condition, as long as it's TRUE the loop will execute it
// index++ === incrementation of index
// for (initialExpression; condition; increment)

// displaying odd numbers
for (let index = 0; index < 5; index++) {
    if (index % 2 !== 0)
        console.log(index);
}

//instead of going from 0 to 5 we could go from 5 to 0 in reverse order
// we use decrement
for (let index = 5; index > 0; index--) {
    if (index % 2 !== 0)
        console.log(index);
}