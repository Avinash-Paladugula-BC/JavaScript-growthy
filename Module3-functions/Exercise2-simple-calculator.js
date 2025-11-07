function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1* num2;
}

function divide(num1, num2){
    return num1 / num2;
}

function calculate(num1, num2, operation){
    if(operation==="add"){
        return add(num1, num2);
    }

    if(operation==="subtract"){
        return subtract(num1, num2);
    }

    if(operation==="multiply"){
        return multiply(num1, num2);
    }

    if(operation==="divide"){
        return divide(num1, num2);
    }
    
}

const readline = require("readline");
const rl= readline.createInterface({
    input: process.stdin,
    output: process.stdout 
});

const num1 = 10;
const num2 = 2; 
let operation = "add";
console.log(calculate(num1, num2, operation));
operation = "subtract";
console.log(calculate(num1, num2, operation));
operation = "multiply";
console.log(calculate(num1, num2, operation));
operation = "divide";
console.log(calculate(num1, num2, operation));