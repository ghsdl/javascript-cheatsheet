function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Shape() {
}

Shape.prototype.duplicate = function() {
    console.log('duplicate.');
}

function Circle() {
}

extend(Circle, Shape);

Circle.prototype.duplicate = function() {
    console.log('duplicate circle.');
}

function Square() {
}

extend(Square, Shape);

Square.prototype.duplicate = function() {
    console.log('duplicate square.');
}

// polymorphism means many forms

// simple hierarchy : on the top we have the shape and 2 derivetives : Circle and Shape. aach object will provide an implementation of the duplicate method === many forms of the duplicate method === polymorphism

const shapes = [
    new Circle(),
    new Square()
];

for (let shape of shapes) {
    shape.duplicate();
}

// output : duplicate circle and duplicate square