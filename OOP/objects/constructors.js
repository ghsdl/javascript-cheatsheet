// constructor function 

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('Draw.');
    }
}

const anotherCircle = new Circle(1);