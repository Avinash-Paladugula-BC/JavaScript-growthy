let incrementLogic = function(start, end, step){
    if(start<=end){
        console.log(start);
    }
}

function increment(start, end, step, incrementLogic){
    for(let i=start ; i<= end ; i+=step){
        incrementLogic(i, end, step);
    }
}

increment(1, 10, 3, incrementLogic);