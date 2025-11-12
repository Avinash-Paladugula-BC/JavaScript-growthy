
// creating 2 functions that will be exported
function add(num1, num2){
    return num1 + num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

// named export
export {add};

// default export
export default multiply;