const circle = {
    radius: 1
};

// once an object is create we can add or remove properties
circle.location = { x: 1, y: 1 };

// another way to write this code
circle['location'] = { x: 1 };

// another way would be this one
const propertyName = 'location';
circle[propertyName] = { x: 1 };

circle.color = 'yellow';
circle.draw = function() { }

// we can delete properties from an object with the DELETE operator
delete circle.color;
delete circle.draw;
delete circle.location; // or brackets notation : delete circle['location'];

console.log(circle);