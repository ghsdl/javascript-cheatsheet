// THIS references the object that is executing in the current function

// if a function is part of an object we call it a method

// if that function is a method THIS references that object itself
// if that function is a regular one not part of an object, THIS references the global object (window in browsers, global in node)

const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function(tag) {
            console.log(this.title, tag); // here THIS is in the callback function so it is referencing the window object and not the video object 
        }, this); // second argument of the function in the execution context of the showTags method
    },
    play() {
        console.log(this); // THIS references the object itself
    }
};

video.showTags(); // output : a a a b a c 

video.stop = function () {
    console.log(this);
}

video.play();
video.stop();

function Video(title) {
    this.title = title;
    console.log(this);
}

const vid = new Video('Speed'); // empty object  {}
// if calling a functio with the NEW operator with constructor functions THIS will reference a new empty object