function showNumbers(limit) {
    for (let index = 0; index <= limit; index++) {
        if (index % 2 === 0) console.log(index, 'EVEN')
        else console.log(index, 'ODD');
    }
}
showNumbers(10);

function oddOrEven(limit) {
    for (let index = 0; index <= limit; index++) {
        const message = (index % 2 === 0) ? 'EVEN' : 'ODD';
        console.log(index, message);
    }
}
oddOrEven(10);