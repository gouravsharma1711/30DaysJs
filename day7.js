// Day 7: Objects
// Tasks/Activities:
// Activity 1: Object Creation and Access
// Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console. 
let book={
    title:"Harry Potter and the Philosopher's Stone",
    author:"J.K. Rowling",
    year:1997
};
console.log(book);
console.log();
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
console.log();
//Task 2: Access and log the title and author properties of the book object.
console.log(`Title of book : ${book.title} and the name of author : ${book["author"]}`);
console.log();
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
console.log();
// Activity 2: Object: Methods
// Task 3: Add a method to the book object that retums a string with the book's title and author, and log the result of calling this method. 
book.getString=()=>`book title :${book.title} and book author : ${book.author}`
console.log(book.getString());
console.log();
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
console.log();
//Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.
book.changeYear=function(year){
    this.year=year;
}
book.changeYear(1996);
console.log(book);
console.log();
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
console.log();
// Activity 3: Nested Objects
// Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console. 
const library={
    name:"Central Library",
    books:[
        book,
        {
            title: "JavaScript Essentials",
            author: "John Doe",
            year: 2020
        },
        {
            title: "Introduction to Python",
            author: "Jane Smith",
            year: 2019
        },
        {
            title: "Data Structures and Algorithms",
            author: "Alice Johnson",
            year: 2021
        }
    ]
}
console.log(library);
console.log();
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
console.log();
//Task 6: Access and log the name of the library and the titles of all the books in the library.
console.log(`Name of Library : ${library.name}`);
library.books.forEach((bookobj)=>console.log(bookobj.title));
console.log();
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
console.log();
// Activity 4: The this Keyword
// Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.
book.getStringFrombookObj=function(){
    return `book title ${this.title} and year : ${this.year} `
}
console.log(book.getStringFrombookObj());
console.log();
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
console.log();
// Activity 5: Object Iteration
// Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.
for (const key in book) {
    console.log(`key ${key} : ${book[key]}`);
}
console.log();
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
console.log();
// Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object
let keys=Object.keys(book);
let values=Object.values(book);
console.log(`keys are : ${keys}`);
console.log();
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
console.log();
console.log(`values are : ${values}`);
