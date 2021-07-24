let index = 0;
while (index < 5) {
    console.log(index);
    // index++; 
    // if we don't increment it's an infinite loop and force quit whatever you were doing
}

while (true) {
    // this is an infinite loop also
}

let x = 0;
do {
    // x++; again an infinite loop
} while (x < 5);

for (let index = 0; index > 0; index++) // this loop is gonna run forever
// alternatively if the condition is right but we forget to increment