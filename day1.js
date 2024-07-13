// Activity 1: Variable Declaration
// task1: Declare a variable using var , assign it a number , and log the value to the console
var num=25;
console.log(num);
//task2: declare a variable using let, assign it a string , and log the value to the console
let st="Hello I'm Gourav";
console.log(st);
// Activity 2: Constant Declaration
//task 3: declare a variable using const , assign it a  boolean value and log the value to the console
const flag =true;
console.log(flag);
// Activity 3: Data types
//task 4: create variable of different types(number, string , boolean , object ,array) and log each variable's type using typeof operator 
let a=15;
let str="string";
let bool=false;
let arr=[1,2,3,4,5,6,8,6,9];
let student={
    name:"Gourav",
    rollNo:71,
    branch:"computer science and engineerig"
}
console.log(`type of a : ${typeof a} , type of str : ${typeof str}, type of bool : ${typeof bool} , type of arr : ${typeof arr}, type of student : ${typeof student}`);
//Activity 4: Reassigning variables
//task 5: declare a variable using let, assign it an initial value , reassign a new value and log both the value to the console .
let variable1=56;
console.log(variable1);
variable1=556;
console.log(variable1);
//Activity 5: Understanding const
const c="hello bhai";
c="hello bhai log !!";
// feature Request: 
// 1) variable type Console log: write a script that declares varibles of different data types and logs both the value and type of each variable to the console.
let var1=1711;
let var2="gourav";
let var3=true;
let var4=null;
let var5=undefined;
let var6=6465894768974684687469874698746874689746769874n;
let var7=Symbol("1234");
let arrVar=[1,5,8,6,5,5,66,5,5,6];
let objvar={
    st:"hello world",
    flag:false
};
let fn=()=>{
    console.log("hello world!!!");
}
console.log("values of above datatypes => ");
console.table([var1, var2, var3,var4,var5,var6,var7, arrVar,objvar]);
console.log("data type of above variables => ");
console.table([typeof var1,typeof var2,typeof var3,typeof var4,typeof var5,typeof var6,typeof var7, typeof arrVar, typeof objvar, typeof fn]);
// 2) Reassignment Demo : Create a script that demonstrates the difference in behavior between let and cosnt when it comes to reassignment
let letVariable =56;
console.log(letVariable);
letVariable=true;
console.log(letVariable);

const constVariable=56;
console.log(constVariable);
constVariable="hello";
console.log(constVariable);