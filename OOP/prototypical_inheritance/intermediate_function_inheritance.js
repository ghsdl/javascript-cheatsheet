function Shape(color) {
    this.color = color;
}

Shape.prototype.duplicate = function() {
    console.log('duplicate.');
}

// INTERMEDIATE FUNCTION INHERITANCE = encapsulating the logic to be used somewhere else
function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Circle(radius, color) {
    Shape.call(this, color);
    this.radius = radius;
}

extend(Circle, Shape);

Circle.prototype.draw = function() {
    console.log('draw.');
}

// creating a square object
function Square(size) {
    this.size = size;
}

extend(Square, Shape);

const shape = new Shape();
const circle = new Circle(1);