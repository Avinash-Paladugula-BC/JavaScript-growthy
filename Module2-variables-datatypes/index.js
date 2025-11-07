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
console.log("team: ",typeof team);
let role;
console.log("role : ", typeof role);
let learningJS = true;
console.log("learnilngJS : ", typeof learningJS);
let age = 21;
console.log("age : ",typeof(age));
let phoneNumber = 929293929399321291n;
console.log("phoneNumber : ", typeof phoneNumber)
let laptop = "Asus ZenBook";
console.log("laptop : ", typeof laptop);
let symbol1 = Symbol("Avinash");
let symbol2 = Symbol("Avinash");
console.log("symbol1 : ", typeof symbol1, symbol1);
console.log(symbol1==symbol2, symbol1, symbol2);

// objects
const myDetails = {
    firstName : "Avinash",
    lastName : "Paladugula",
}
for(const key in myDetails){
    console.log(key, " : ", myDetails[key]);
}
let arr = ["one" , "two" , "three" , "four", "five"];
for (let i=0;i<arr.length;i++){
    console.log((i+1) , " : ", arr[i]);
}


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

// string
let fName = "Akhila";
let lName = "Guda";
let completeName = fName + lName;
let length = completeName.length;
if(completeName.substring(0,6)===fName){
    console.log("first name matched : ", fName);
}

// type conversion
let number = 7;
let numberToString = number+"";
let stringToNumber = parseInt(numberToString)
if(number == numberToString && number==stringToNumber){
    console.log("All are same");
}else{
    console.log("Not same");
}

if(number===numberToString){
    console.log("value matched but type didn't");
}else{
    console.log("mismatch");
}

if(number===stringToNumber){
    console.log("type and value matched");
}