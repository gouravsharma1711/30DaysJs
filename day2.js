// Activity 1: Arithmetic operations 

let num1=56;
let num2=45;
//task 1: write a program to add two numbers and log the result to the console.

console.log(`sum of num1 and num2 : ${num1+num2}`);

//task 2: Write the program to subtract two numbers and log the result to the console

console.log(`num2-num1 is euqal to : ${num2-num1}`);

//task 3: Write the program to multiply two numbers and log the result to the console

console.log(`Product of num1 and num2 : ${num1*num2}`);

//task 4: Write the program to divide two numbers and log the result to the console

console.log(`divide of num1 to num2 : ${(num1/num2).toFixed(2)}`);

//task 5 : Write a program to find the remainder when one number is divided by another and log the result to the console.

console.log(`num1 % num2 : ${num1%num2}`);

// Actvity 2 : Assignment Operators
let num=56;
console.log(` num : ${num}`);
//Task 6 : Use the +=operator to add a number to a variable and log the reslut to the console
num+=14;
console.log(`After Task 6 the num is equal to ${num}`);
//Task 7 : Use the -=operator to subtract a number from a variable and log the reslut to the console
num-=5;
console.log(`After Task 6 and 7 the num is equal to ${num}`);

//Activity 3: Comparison Operators
let a=56;
let b=94;
//Task 8: Write a program to compare two numbers using '>' and '<' and  log the result to the console.
console.log(a>b);
console.log(a<b);
//Task 9: Write a program to compare two numbers using '>=' and '<=' and log the result to the console.
console.log(a>=b);
console.log(a<=b);
//Task 10: Write a program to compare two numbers using '==' and '===' and log the result to the console.
let x=56;
let y='56'
if(x==y){
    console.log("value is same but do not know about the type of both variable");
}else{
    console.log("value is not euqal");
}

if(x===y){
    console.log("both the value and the type of variable is same")
}else{
    console.log("either the type of variable or value of variable is not equal")
}

//Activity 4: Logical Operators
//Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.
let yourAge=28;;
if(yourAge>=18 && yourAge>=21){
    console.log("legal age to vote in elections");
    console.log("legal age to marry someone");
}else{
    console.log("not a legal age to vote in elections");
    console.log("not a legal age to marry someone");
}
//Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.

yourAge=20;
if(yourAge>=18 || yourAge>=21){
    console.log("legal age to vote in elections");
}else{
    console.log("not a legal age to vote in elections");
}
//Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console
console.log(!yourAge>=18);

//Activity 5: Ternary Operator
//Task 14: Write a program that uses the temary operator to check if a number is positive or negative and log the result to the console
let Num=-25;
let checkPositive=(Num)=>{
    return (Num>0)?true: false;
}
console.log(`Num is positive ? ${checkPositive(Num)}`);
Num=35;
console.log(`Num is positive ? ${checkPositive(Num)}`);
