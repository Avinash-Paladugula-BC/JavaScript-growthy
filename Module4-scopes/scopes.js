let globalVariable = "I am global";
function functionScopeDemo(){
    functionVariable = "I am function scope variable";
    console.log(functionVariable);
    if(globalVariable!=undefined){
        const num1 = 10;
        let num2 = 20;
        console.log("sum of num1 and num2(inside block scope) : ", (num1 + num2));
        console.log("From block scope trying to access the globalVariable which is notpresent in block or function: ",globalVariable);
    }
    // trying to access num1 and num2 which are block scope
    // console.log("Trying to print Block scope variables out of the bloock: ",num1, num2);  //throwing reference error
}
// console.log("Trying to access the function scope variable: ", functionVariable);   //throwing reference error
console.log(globalVariable);
functionScopeDemo();