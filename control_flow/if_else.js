// if hour is between 6am and 12pm: good morning
// if hour is between 12pm and 6pm: good afternoon
// otherwise just say good evening

// bloc of code
/*if (condition) {
    statement
} else if (anotherCondition) {
    statement
} else if (yetAnotherCondition) {
    statement
} else  {
    statement
}*/

let hour = 20; // 10 or 15 or 20

if (hour >= 6 && hour < 12) {
    console.log('Good morning');
} else if (hour >= 12 && hour < 18) {
    console.log('Good afternoon');
} else {
    console.log('Good evening');
}