const movie = {
    title: 'Title',
    releaseYear: 2021,
    rating: 4.5,
    director: 'Director'
};

function showProperties(object) {
    for (let key in object) {
        if (typeof object[key] === 'string') // or 'number'
        console.log(key, object[key]);
    }
}

showProperties(movie);