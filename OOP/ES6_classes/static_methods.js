class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    // instance method : available on an instance of a class which is an object
    draw() {
        console.log('draw.');
    }

    // utility methods
    // static methods are not tied to a particular circle object
    static parse(str) { // this method won't be available in the circle object
        const radius = JSON.parse(str).radius;
        return new Circle(radius);
    }
}

const c = new Circle(10);
// Circle.parse(); // to use a static method we don't have to use an instance of a class
const circle = Circle.parse('{"radius" :1 }'); // this static method returns a circle object
console.log(circle);

// utility methods for example "Math" : we directly access this methods on the math object itself


