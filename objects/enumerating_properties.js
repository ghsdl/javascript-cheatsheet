const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

for (let key in circle) {
    console.log(key, circle[key]);
}

/*for (let key of circle) {
    console.log(key); // circle is not ITERABLE -- an object is not iterable, not with a for...of loop
}*/

for (let key of Object.keys(circle)) {
    console.log(key); 
}

for (let entry of Object.entries(circle)) { // another way to get access to all the properties & methods of an object
    console.log(entry); 
}

if ('color' in circle) { // to check if a given property or method exists in an object we can use the IN operator
    console.log('yes');
}

