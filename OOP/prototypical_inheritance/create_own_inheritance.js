function Circle(radius) {
    this.radius = radius;
}

Circle.prototype.draw = function() {
    console.log('draw.');
}

// inherit a circle from a shape
function Shape() {
}

Shape.prototype.duplicate = function() {
    console.log('duplicate.');
}

// creating an object with a given prototype so that it inherits from the new prototype
Circle.prototype = Object.create(Shape.prototype);

// the circle object has now a duplicate object inherited from the shape object

const shape = new Shape();
const circle = new Circle(1);