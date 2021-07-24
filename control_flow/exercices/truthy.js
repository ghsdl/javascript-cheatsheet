const isActive = true;
const firstname = 'Maeva'; // Truthy value (true)
const lastname = ''; // Falsy value (false)
if (lastname) console.log('Hello!');

// falsy values : undefined - null - '' - false - 0 - NaN
const array = [0, null, undefined, '', 2, 3];

function isTruthy(array) {
    let count = 0;

    for (let value of array) 
        if (value)
            count++;
        return count;
}

console.log(isTruthy(array));