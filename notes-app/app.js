const chalk = require('chalk');

const greenMessage = chalk.green('Success!');
const greenBoldMessage = chalk.green.bold('Success!');
const greenInverseBoldMessage = chalk.green.inverse.bold('Success!');

console.log(greenMessage);
console.log(greenBoldMessage);
console.log(greenInverseBoldMessage);