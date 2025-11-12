function delayedLowerCase(string){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const lowerString = string.toLowerCase();
            resolve(lowerString);
        },5000);
    })
}

delayedLowerCase("BEAUTIful Code")
.then((lowerString)=>{
    console.log(lowerString, " - ", lowerString.length);
})
.catch((error)=>{
    console.log("Error : ", error);
})

/* 
Different promise states available :
pending : which indicates the execution of the function is not yet completed.
fulfilled : it means the execution is completed and generally a value is  passed with the resolve to make the execution state from pending to the fulfilled state.
reject : when an error occurs while executing then we reject it using the reject by passing the reason with it.


PROMISE CHAINING: 
When we need to execute some other function after the completion of one particular task we place it after the particular promise object enclose inside the .then(). They will be executed by connecting with the previous one and the previous execution returned value will be used by the current function.
*/