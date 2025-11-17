// Import lodash package
const _ = require('lodash');

const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = _.uniq(numbers);

console.log("Unique numbers are:", uniqueNumbers);
