// one of the solution is using a variable for THIS (self)
const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        const self = this; // not the best approach
        this.tags.forEach(function(tag) {
            console.log(self.title, tag); 
        }); 
    }
};
video.showTags(); 

function playVideo(a, b) {
    console.log(this);
}
playVideo.call({ name: 'Maeva' }, 1, 2);
playVideo(); // window object
playVideo.apply({ name: 'Maeva' }), [1, 2]; // with the apply method you have to pass the arguments as an array
playVideo.bind({ name: 'Maeva'})(); // returns a new function and set THIS to point to this object permanently

// one of the solution is using bind
const VHS = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function(tag) {
            console.log(this.title, tag); 
        }.bind(this)); 
    }
};
VHS.showTags(); 

// the ECMAScript solution is using arrow function to change THIS
const CD = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() { // THIS references the CD object
        this.tags.forEach(tag => { // arrow functions inherit THIS from the containing function
            console.log(this.title, tag); // when we pass THIS in an arrow function here the same THIS value is used
        }); 
    }
};
CD.showTags(); 