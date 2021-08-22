function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Shape(color) {
}

Shape.prototype.duplicate = function() {
    console.log('duplicate.');
}

function Circle() {
}

extend(Circle, Shape);

// overriding the method : important to do it AFTER extending circle and shape
// it means reimplementing a method in a child object
Circle.prototype.duplicate = function() {
    Shape.prototype.duplicate.call(this); // we pass this as the context of the current object

    console.log('duplicate circle.');
}

const circle = new Circle();