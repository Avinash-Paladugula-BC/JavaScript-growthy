let numbers = [1,2,3,4,5,6];

function doubleNumbers(numbers){

    return numbers.map((value)=> 2*value);
}
let twice = doubleNumbers(numbers);
console.log("Twice of the numbers are : ", twice);

function filterEvenNumbers(numbers){
    return numbers.filter(value=> !(value%2))
}
let evenNumbers = filterEvenNumbers(numbers);
console.log("Even numbers are: " , evenNumbers);

function sumNumbers(numbers){
    return numbers.reduce((total, currentValue )=> total+currentValue);
}
let totalSum = sumNumbers(numbers);
console.log("Total sum: ",totalSum);