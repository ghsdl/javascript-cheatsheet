function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('Draw.');
    }
}

const circle = new Circle(10);

for (let key in circle) {
    if (typeof circle[key] !== 'function')
        console.log(key, circle[key]);
}

const keys = Object.keys(circle);
console.log(keys); // this wil l return all the keys in the circle as an array

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

if ('radius' in circle)
    console.log('Circle has a radius.');
