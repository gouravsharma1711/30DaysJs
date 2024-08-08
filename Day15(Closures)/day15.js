// Day 15: Closures
// Tasks/Activities:
// Activity 1: Understanding Closures
// Task 1: Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result..
const outer=()=>{
    let myName="Gourav Sharma";
    return ()=>{
        console.log(`Name : ${myName}`);
    }

}
let returnedFunction=outer();
returnedFunction();
//Task 2: Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.
let PrivateCounterFunction=()=>{
    let counter=0;
    return {
        increaseCounter:function(){
            counter++;
            console.log("Counter is increased :)");
            
        },
        getCounter:function(){
            return counter;
        }

    };
}
const get=PrivateCounterFunction();
let {increaseCounter,getCounter}=get;
increaseCounter();
console.log(`counter value : ${getCounter()}`);


// Activity 2: Practical Closures
// Task 3: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.
let UniqueId=()=>{
    let lastId=1245789;
    return ()=>{
        console.log(`Last Id : ${lastId}`);
        
        let newId=lastId+1;
        lastId=newId;
        return newId
    }
}
let generateUniqueId=UniqueId();
console.log(generateUniqueId());

// Task 4: Create a closure that captures a user's name and returns a function that greets the user by name.
const containUserName=()=>{
    let userName="Gourav Sharma";
    return ()=>{
        console.log(`Hello !!  ${userName} :)`);
    }
}
const greet=containUserName();
greet();
// Activity 3: Closures in Loops
// Task 5: Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.
function createFunctionsArray(size) {
    let functionsArray = [];

    for(let i=0;i<size;i++){
        functionsArray.push(()=>{
            console.log(`Index is ${i}`);
        })
    }


    return functionsArray;
}
let Function=createFunctionsArray(5);
Function[0]();
Function[1]();
Function[2]();
Function[3]();
// Activity 4: Module Pattern
// Task 6: Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.
const m=()=>{
    let items=[];
    return {
        add:(item)=>{
            items.push(item)
        },
        remove:(item)=>{
            items=items.filter((i)=>i!==item)
        },
        listItems:()=>{
            console.log(items);
        }
    }
}
const managingModule=m();
let {add,remove,listItems}=managingModule;
add("Pen");
add("Pencil");
add("Eraser");
listItems();
remove("Pen");
listItems();
// Activity 5: Memoization
// Task 7: Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.
const memoize=(fn)=>{
    const cache={};
    return function(...arguments){
        let key=JSON.stringify(arguments);
        if(key in cache){
            return cache[key];
        }else{
            let result=fn(...arguments);
            cache[key]=result;
            return result;
        }
    }
}
let sum=(...arguments)=>{
    return arguments.reduce((acc,currval)=>(acc+currval),0);
}
let memoizedFunction=memoize(sum);
console.time()
console.log(memoizedFunction(5,5,5,5,5,5,5,5,5));
console.timeEnd();



// Task 8: Create a memoized version of a function that calculates the factorial of a number.
const FactorialMemoize=(fn)=>{
    const cache={};
    return function(argument){
        
        if(argument in cache){
            console.log("cache");
            
            return cache[argument];
        }else{
            console.log("All");
            let result=fn(argument);
            cache[argument]=result;
            return result;
        }
    }
}
const fact=(n)=>{
    let factorial=1;
    for(let i=1;i<=n;i++){
        factorial*=i;
    }
    return factorial;
}

let myresult=FactorialMemoize(fact);
console.log(myresult(5));
