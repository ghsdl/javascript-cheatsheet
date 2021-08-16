// factory function 

function createCircle(radius) {
    return {
        radius,
        location: {
            x: 1,
            y: 1
        }, 
        draw: function() {
            console.log('Draw.');
        }
    };
}

const circle = createCircle(1);
circle.draw();