// string primitive
const message = 'My first message';
console.log(message.length);
console.log(message[9]);
console.log(message.includes('first'));
console.log(message.startsWith('my')); // FALSE, case sensitive
console.log(message.endsWith('e'));
console.log(message.indexOf('first'));
console.log(message.replace('first', 'second')); // returns a new string but does NOT change the original message
console.log(message.toUpperCase());
console.log(typeof message); // STRING

const anotherMessage = ' My new message ';
console.log(anotherMessage.trim()); // gets rid of all the white space between and after my string

const escapeNotation = 'Yet another \'new message'; // backslash allows escape
console.log(escapeNotation);

const yam = 'This is another\n message';
console.log(yam);
console.log(yam.split(' '));

// string object
const another = new String('hi');
console.log(typeof another); // OBJECT