function delayedFunction(time){
    return new Promise((resolve, reject)=>{
        console.log("The task is being processed...");
        setTimeout(()=>{
            console.log("Task completed");
            resolve(
                "task accomplished"
            );
        },time);
    });
};

const promise = delayedFunction(5000);

promise.then(
    taskStatus => console.log("Task status : ", taskStatus),
    error => console.log("Error : ", error)
);