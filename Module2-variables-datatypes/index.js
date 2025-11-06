var fullName = "Avinash";
console.log("Name: ", fullName);
var firstName = "Avinash";
console.log("First Name after redeclaration : ",firstName);

let lastName = "Paladugula";
console.log("Last Name : ",lastName);

const employeeId = 110;
console.log("Employee ID : ", employeeId)

// using different primitive datatypes:
let team = null;
let role;
let learningJS = true;
let age = 21;
let phoneNumber = 929293929399321291n;
let laptop = "Asus ZenBook";
let symbol1 = Symbol("Avinash");
let symbol2 = Symbol("Avinash");

// objects
let myDetails = {
    firstName : "Avinash",
    lastName : "Paladugula",
}
let arr = ["one" , "two" , "three" , "four", "five"];

// operators
let num1 = 10; 
let num2 = 2;
let arithmeticAdd = num1 + num2;
let comparision = num1 < num2;
let logicalOR = true || false;

if(logicalOR){
    console.log("logical OR operation turned out to be true");
}else{
    console.log("logical OR operation turned out to be false");
}

//
let fName = "Akhila";
let lName = "Guda";
let completeName = fName + lName;
let length = completeName.length;

// type conversion
let number = 7;
let numberToString = number+"";
let stringToNumber = parseInt(numberToString)