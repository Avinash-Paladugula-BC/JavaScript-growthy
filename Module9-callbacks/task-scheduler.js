function taskScheduler(tasks){
    function runTask(taskNumber){
        if(tasks.length<=taskNumber){
            console.log("All tasks completed");
            return;
        }
        tasks[taskNumber](()=>{ 
            runTask(taskNumber+1); 
        });
        
    }
    runTask(0);
}


const task1 = (callback) => {
    setTimeout(()=>{
        console.log("Task 1 completed");
        callback();
    },1000);
};
const task2 = (callback) => {
    setTimeout(()=>{
        console.log("Task 2 completed");
        callback();
    },2000);
};
const task3 = (callback) => {
    setTimeout(()=>{
        console.log("Task 3 completed");
        callback();
    },3000);
};

let tasks = [task1, task2, task3];
taskScheduler(tasks);