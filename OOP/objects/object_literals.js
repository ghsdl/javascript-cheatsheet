const circle = { // curly braces are object literal syntax
    radius: 1, // property
    location: { // property
        x:  1,
        y: 1
    },
    draw: function() { // method
        console.log('draw');
    }
}; 

circle.draw();