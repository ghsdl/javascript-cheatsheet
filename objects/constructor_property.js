function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
    return this;
}

const circle = new Circle(3);
const another = new Circle(1);
console.log(another.constructor);

let x = {};

// let x = new Object();

// every object has a contructor property and that references the function that was to create that object