// Day 12: Error Handling
// Tasks/Activities:
// Activity 1: Basic Error Handling with Try-Catch
// Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console. 
const throwError=()=>{
    try{
        throw new Error("My error");
    }catch(error){
        console.log('Error : ',error.message);
    }
}
throwError();
//Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handie this error.
let divide=(numerator,denominator)=>{
    try{
        if(denominator===0) throw new Error('Denominator is zero !!');
        return numerator/denominator;
    }catch(error){
        console.log('Error : ',error.message);
    }
}
let num=48;
let deno=0;
console.log(`${num}/${deno} : ${divide(num,deno) || 'N/A'}`);
// Activity 2: Finally Block
// Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.
let task3=()=>{
    try{
        console.log("I'm in try block ");
    }catch(error){
        console.log("I'm in catch block ");
        console.log('Error : ',error.message);
    }finally{
        console.log('Task 3 Done :)');
    }
}
task3();
// Activity 3: Custom Error Objects
// Task 4: Create a custom error class that extends the built-in Error class, Throw an instance of this custom error in a function and handle it using a try-catch block
class MyErrorClass extends Error{
    constructor(message){
        super(message);
        this.name="MycustomError"
    }
}
function myfunction(){
    try{
        throw new MyErrorClass("My custom Error");
    }catch(error){
        console.log('Error : ',error);
    }
}myfunction()
// Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.
let validates=(input)=>{
    if(!input || input.trim()===''){
        throw new Error('input string is empty');
    }
}
const testValidity=(input)=>{
    try{
        validates(input);
        console.log('input String is valid');
    }catch(error){
        console.log('Error : ',error.message);
    }
}
console.log("Case 1 : Empty String");
testValidity("");
console.log("Case 2 : only spaces are present in the string");
testValidity(" ");
console.log("Case 3 : Valid String");
testValidity("Hello world");

// Activity 4: Error Handling in Promises
// Task 6: Create a promise that randomly resolves or rejects. Use catch() to handle the rejection and log an appropriate message to the console.
let promise1=new Promise((resolve,reject)=>{
    let error=true;
    if(!error){
        setTimeout(()=>{
            console.log('Promise resolved');
            resolve({Name: "Gourav",Course :"B.Tech"});
    },5000)
    }else{
        reject(new Error("Promise1 rejected !! "));
    }
});
promise1.
then((result)=>{
    console.log(`UserName : ${result.Name} and the course of user : ${result.Course}`);
})
.catch((error)=>{
    console.log('Error : ',error);
})
.finally(()=>{
    console.log('Task 6 done !!');
})

// Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.
async function consumePromise1(){
    try{
        let result= await promise1;
        console.log("Resolved by promise");
        console.log(`UserName : ${result.Name} and the course of user : ${result.Course}`);
    }catch(error){
        console.log('Error : ',error.message);
    }finally{
        console.log("task 7 done")
    }
}
consumePromise1();
// Activity 5: Graceful Error Handling in Fetch
// Task 8: Use the fetch API to request data from an invalid URL and handle the error using catch(). Log an appropriate error message to the console.
fetch('invalid-url')
.then((response)=>{{
    if(!response.ok){
        throw new Error(`Http error !! Status : ${response.status}`);
    }
    return response.json();
}})
.then((responseInJSON)=>{
    console.log("Data fetched Successfully :)");
    console.log(responseInJSON);
})
.catch((error)=>{
    console.log('Error : ',error.message)
})
// Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.
async function FetchApi(url){
    try{
        let response = await fetch(url);
        if(!response.ok){
            throw new Error(`Http error !! Status : ${response.status}`);
        }
        const responseJSON= await response.json();
        console.log(responseJSON);
    }catch(error){
        console.log('Error : ',error.message);
    }
}
FetchApi('invalid-url')