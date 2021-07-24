// show rows of stars

function showStars(rows) {
    for (let row = 1; row <= rows; row++) {
        let pattern = '';
        // nested loop
        for(let i = 0; i < row; i++)
            pattern += '*';
        console.log(pattern);
    }
}

showStars(5);

function showLines() {
    for (let line = "#"; line.length <= 5; line += "#")
    console.log(line);
}

showLines(5);