function Circle(radius) {
    this.radius = radius;

    // by defining this as a local variable we make sure it won't be accessible from the outside
    let defaultLocation = { x: 0, y: 0 };  // a local variable is NOT a property of an object

    let computeOptimumLocation = function(factor) { // hide the details  and not make this function accessible from the outside. part of the CLOSURE of the draw function
        // ... 
    }

    this.draw = function() {
        computeOptimumLocation(0.1);  // it will work without THIS because of closure which determines what is accessible in the PARENT function

        console.log('Draw.');
    };
}

const circle = new Circle(10);
circle.draw();