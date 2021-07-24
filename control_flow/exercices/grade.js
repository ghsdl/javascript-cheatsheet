// calculate the grade of a student
const marks = [120, 90, 75];

// function to calculate average
function calculateAverage(array) {
    // variable and initialize it to 0
    let sum = 0;
    // iterate to calculate the sum of all the values
    for (let value of array) {
        sum += value; // this is the total
    }
    // calculate the average
    return sum / array.length;
}

// function to calculate the grades using the average function above
function calculateGrades(marks) {
    const average = calculateAverage(marks);
    if (average < 60) return 'E';
    if (average < 70) return 'D';
    if (average < 80) return 'C';
    if (average < 90) return 'B';
    return 'A';
}

console.log(calculateGrades(marks));

// average = 70

// 90 -100 > A
// 89 - 90 > B
// 70 - 89 > C
// 60 - 69 > D
// 0 - 59 > E