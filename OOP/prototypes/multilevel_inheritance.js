// multilevel inheritance is several objects derived from each of them 

// myArray derives from arrayBase which derives from objectBase

function Circle(radius) {
    this.radius = radius;

    this.draw = function() {
        console.log('draw.');
    };
}

const cirlce = new Circle(10);

// Objects created by a given constructor will have the same prototype
// Similarly all arrays created by a given constructor will have the same prototype

// circle inherits from circleBase and inherits from objectBase