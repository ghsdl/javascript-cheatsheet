function Circle(radius) {
    this.radius = radius;

    let defaultLocation = { x: 0, y: 0 };  // private members (property) as local variables which CANNOT be accessible from the outside

    this.getDefaultLocation = function() { 
        return defaultLocation; // here we have access to defaultLocation
    };

    this.draw = function() {
        console.log('Draw.');
    };

    Object.defineProperty(this, 'defaultLocation', {
        get: function() {
            return defaultLocation;
        }, 
        set: function(value) {
            if (!value.x || !value.y)
                throw new Error('Invalid location.')

            defaultLocation = value;
        }
    });
}

const circle = new Circle(10);
circle.defaultLocation = 1;
circle.draw();