(function(str){
    let reverseString = "";
    for(let i=0 ; i<str.length ; i++){
        reverseString = str[i] + reverseString;
    }
    console.log(reverseString);
})("javascript");