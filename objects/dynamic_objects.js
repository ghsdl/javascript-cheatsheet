const circle = {
    radius: 1
};

// once an object is create we can add or remove properties
circle.color = 'yellow';
circle.draw = function() { }

// we can delete properties from an object with the DELETE operator
delete circle.color;
delete circle.draw;

console.log(circle);