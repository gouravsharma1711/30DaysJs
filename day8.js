// Activity 1 : Template Literals
//Task 1 : Use template literals to create a string that includes variables for person's name and ago , and log the string to the conole.
let name="Gourav";
let location="Delhi"
let introduce=`Hello !! I'm ${name} and i live in ${location}`;
console.log(introduce);
// Task 2 : Create a multi-line string using template literals and log it the console.
let multiLineString=`This is a multi-line string.
It spans multiple lines.
Each new line is part of the same string.`
console.log(multiLineString);
// Activity 2 : Destructuring 
// Task 03: Use array Destructuring to extract the first and second element from an array of numbers and log them to the console.
let myArray=[8,5,4,2,6,9,7,4];
let [element1, element2]=myArray;
console.log(`First element in array : ${element1} and the Second element : ${element2}`);
// tas 04: Use object Destructuring to extract the title and author from a book object and log them to the console.
let book={
    title:"Harry Potter and the Philosopher's Stone",
    author:"J.K. Rowling",
    year:1997
}
let {title,author}=book;
console.log(`title of book object : ${title}`);
console.log(`author of book object : ${author}`);
// Activity 3 : Spread and Rest Operator:-
// task 05: Use the spread opeartor to create a new array that includes all element of an existing array plus additional elements and log the new array to the console.
let existingArray=[56,78,12,24,11,17];
let myNewArray=[...existingArray,10,100,200,1000];
console.log(myNewArray);
//task 06 : Use the rest operator in a function to accept and arbitary numberof argumemts , sum them and return the result.
let myFunction=(...num)=>{
    return num.reduce((acc,currval)=>acc+currval,0);
}
console.log(myFunction(11,45,17,25,36));
-
//Activity 04 : Default Parameters
//Task 7 : Write a function that takes two parameters and returns their product , with the second parameter having a default value of 1 . log the result of calling this function with and without the second parameter . 
let productFunction=(num1,num2=1)=>num1*num2;  
console.log(`With both parameter : ${productFunction(5,4)}`);
console.log(`Without num2 parameter : ${productFunction(5)}`);

// Activity 05 : Enhanced Object Literals 
// Task 8 :Use enhanced object literals to create an object with methods and properties and log the object to the console.
const Name="Gourav";
const email="gourav@123";
const Location="Delhi";
const Course="Computer Science and Engineering";
let student={Name,email,Location,Course ,printDetail: function(){
    console.log(`Name: ${this.Name} , email : ${this.email} , Location :${Location} and course : ${this.Course}`);
}  };
student.printDetail();
console.log(student);
// Task 9 : Create an object with computed property names based on variables and log the object to the console.

const property1="BookName";
const  property2="Author";
let bookObj={
    [property1]:"You are the Best Wife: A True Love Story",
    [property2]:"Ajay k Pandey"
}
console.log(bookObj);
