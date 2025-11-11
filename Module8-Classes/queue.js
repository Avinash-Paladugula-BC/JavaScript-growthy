class Queue{
    constructor(){
        this.queue = [];
    }
    enqueue(value){
        this.queue.push(value);
    }
    dequeue(){
        if(this.queue.length===0){
            return "Queue is empty";
        }
        return this.queue.shift();
    }
    front(){
        if(this.queue.length===0){
            return "Queue is empty";
        }
        return this.queue[0];
    }
    isEmpty(){
        return this.queue.length===0;
    }
}

let numbers = new Queue();
numbers.enqueue("one");
numbers.enqueue("two");
numbers.enqueue("three");
numbers.enqueue("four");

console.log(numbers);

let removedValue = numbers.dequeue();
console.log("Removed value : ", removedValue);

let frontValue = numbers.front();
console.log("Front value : ", frontValue);

let containsElements = numbers.isEmpty();
console.log("Queue empty: ", containsElements);


/*

The instanceof operator will return a boolean value. It is used to check if the object is instanciated with the particular class or it is the parent class. 
The syntax to use this operator is :
    objectName instanceof constructor/className
When ever we try to use this operator with the Object it will return true.
Below is an simple example to demonstrate instanceof operator:
class Parent{
    constructor(){
        console.log("Inside the parent constructor");
    }
    // Parent methods
}
class Child{
    constructor(){
        super();
        console.log("Inside the child constructor");
    }
    //child methods
}
let childObject = new Child();
console.log(childObject instanceof Child); --> true
console.log(childObject instanceof Parent); --> true
console.log(childObject instanceof Object); --> true

*/