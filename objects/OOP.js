// object-oriented programming (OOP)
// style of programming where we see a program as a collection of objects that talk to each other to perform a functionality/feature

const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function () {
        console.log('draw');
    }
};

// if a function is part of an object, the function is called a method so 
circle.draw(); // is a method