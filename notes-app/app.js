const validator = require('validator');

const getNotes = require('./notes');

const message = getNotes();

console.log(message);

// Check Email
console.log(validator.isEmail('dzulfikar.maulana@gmail.com'));

// Check URL
console.log(validator.isURL('https://www.google.com'));
