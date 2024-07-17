//Activity 1: Function Declaration
//Task 1: Write a function to check if a number is even or odd and log the result to the console.
function checkEvenOdd(num){
    if (typeof num !== 'number') {
        console.log("Error: Expected a number as input.");
        return; 
      }
    if(num%2===0)return "even";
    else return "odd";
}
let num=-56;
console.log(checkEvenOdd(num));
//Task 2: Write a function to calculate the square of a number and return the result.
function calculateSquare(number){
    if (typeof num !== 'number') {
        console.log("Error: Expected a number as input.");
        return; 
      }
    return Math.pow(number,2);
}
let number=5;
console.log(`square of number (${number}) : ${calculateSquare(5)}`);
//Activity 2: Function Expression
//Task 3: Write a function expression to find the maximum of two numbers and log the result to the console. 
let findMax=function(n1 ,n2){
    if (typeof n1 !== 'number' || typeof n2!='number') {
        console.log("Error: Expected a number as input.");
        return; 
      }
    return (n1>n2)? n1:n2;
}
let n1=56;
let n2=86;
console.log(`Greater number between ${n1} and ${n2} : ${findMax(n1,n2)}`);
//Task 4: Write a function expression to concatenate two strings and return the result.
let s1="hello";
let s2="world";
let concatStrings=function(s1,s2){
    if(!s1 || !s2){
        console.log('one of the String is empty or undefined or null');
        return;
    }
    return s1+" "+s2; 
}
console.log(concatStrings(s1,s2));
//Activity 3: Arrow Functions
//Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
let sum=(x1,x2)=>{
    if(typeof x1!='number' || typeof x2!='number'){
        console.log("Error: Expected a number as input.");
        return; 
      }
    return x1+x2;
}
let x1=15;
let x2=56;
console.log(`sum of x1 and x2 : ${x1+x2}`);
//Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
let checkCharacter=(s1,char)=>{
    if(!s1){
        console.log('String is empty or undefined or null');
    }
    let flag=s1.includes('char');
    return flag;
}
let newString =new String("Gourav Sharma");
let char='c';
console.log(`does String "${newString}" contains character '${char}' ? : ${checkCharacter(newString,char)}`);
//Activity 4: Function Parameters and Default Values
//Task 7: Write a function that takes two parameters and retums their product. Provide a default value for the second parameter..
let productOfNumbers=(num1,num2=2)=>{
    if(typeof num1!='number' || typeof num2!='number'){
        console.log("one of the String is empty or undefined or null");
        return;
    }
    return num1*num2;
} 
let a=15;
console.log(productOfNumbers(a));
let b=3;
console.log(productOfNumbers(a,b));
//Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
let greeting=(name,age=18)=>{
    if(!name){
        console.log("one of the String is empty or undefined or null");
        return;
    }
    return `Hello !! I'm ${name} and my age is ${age}`;
}
console.log(greeting("gourav"));
//Activity 5: Higher-Order Functions
//Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
let DemoFunction=()=>{
    console.log("hello world");
}
let func=(fn,num=0)=>{
    if(typeof fn!='function'){
        console.log("provided fn is not a function");
        return ;
    }
    for(i=1;i<num;i++) fn();
}
func(DemoFunction,5)
//Task 10: Write a higher order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result
let f1=(value)=>(value*value)
let f2=(f1)=>(f1+5)
let value=9;
let mainFucntion=(f1,f2,value)=>{
    let result1=f1(value);
    let result2=f2(result1);
    return result2;
}
console.log(mainFucntion(f1,f2,value));