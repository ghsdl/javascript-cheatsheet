function Circle(radius) {
    this.radius = radius;

    this.defaultLocation = { x: 0, y: 0 };

    this.computeOptimumLocation = function(factor) { // hide the details  and not make this function accessible from the outside
        // ... 
    }

    this.draw = function() {
        this.computeOptimumLocation(0.1); 

        console.log('Draw.');
    };
}

const circle = new Circle(10);
circle.draw();

// ABSTRACTION means we should hide the details and complexity 
