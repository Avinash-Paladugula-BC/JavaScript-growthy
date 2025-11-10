function createCounter(){
    let count = 0
    return {
        increment(){
            return ++count;
        },
        decrement(){
            return --count;
        }
    }

}
let counter = createCounter();
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.decrement());
console.log(counter.increment());