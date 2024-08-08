// Task 1: Basic Regular Expressions

// Task 1a: Write a regular expression to match all occurrences of the word "JavaScript" in a string. Log the matches.
const task1a = (str) => {
    const regex = /JavaScript/g;
    const matches = str.match(regex);
    console.log(matches);
};

// Task 1b: Write a regular expression to match all digits in a string. Log the matches.
const task1b = (str) => {
    const regex = /\d+/g;
    const matches = str.match(regex);
    console.log(matches);
};

// Task 2: Character Classes and Quantifiers

// Task 2a: Write a regular expression to match all words in a string that start with a capital letter. Log the matches.
const task2a = (str) => {
    const regex = /\b[A-Z][a-z]*\b/g;
    const matches = str.match(regex);
    console.log(matches);
};

// Task 2b: Write a regular expression to match all sequences of one or more digits in a string. Log the matches.
const task2b = (str) => {
    const regex = /\d+/g;
    const matches = str.match(regex);
    console.log(matches);
};

// Task 3: Grouping and Capturing

// Task 3a: Write a regular expression to capture the area code, central office code, and line number from a US phone number format (e.g., (123) 456-7890). Log the captures.
const task3a = (phone) => {
    const regex = /\((\d{3})\)\s(\d{3})-(\d{4})/;
    const matches = phone.match(regex);
    console.log(matches ? matches.slice(1) : []);
};

// Task 3b: Write a regular expression to capture the username and domain from an email address. Log the captures.
const task3b = (email) => {
    const regex = /(\w+)@(\w+\.\w+)/;
    const matches = email.match(regex);
    console.log(matches ? matches.slice(1) : []);
};

// Task 4: Assertions and Boundaries

// Task 4a: Write a regular expression to match a word only if it is at the beginning of a string. Log the matches.
const task4a = (str) => {
    const regex = /^\w+/;
    const matches = str.match(regex);
    console.log(matches);
};

// Task 4b: Write a regular expression to match a word only if it is at the end of a string. Log the matches.
const task4b = (str) => {
    const regex = /\w+$/;
    const matches = str.match(regex);
    console.log(matches);
};

// Task 5: Practical Applications

// Task 5a: Write a regular expression to validate a simple password (must include at least one uppercase letter, one lowercase letter, one digit, and one special character). Log whether the password is valid.
const task5a = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const isValid = regex.test(password);
    console.log(isValid ? "Valid password" : "Invalid password");
};

// Task 5b: Write a regular expression to validate a URL. Log whether the URL is valid.
const task5b = (url) => {
    const regex = /^(https?:\/\/)?([\w\-]+)\.([a-z]{2,6})(\/[\w\-]*)*\/?$/;
    const isValid = regex.test(url);
    console.log(isValid ? "Valid URL" : "Invalid URL");
};

// Test Cases
task1a("I love JavaScript. JavaScript is fun!"); // ["JavaScript", "JavaScript"]
task1b("My phone number is 1234567890 and my zip code is 98765."); // ["1234567890", "98765"]

task2a("Hello World! This is JavaScript."); // ["Hello", "World", "This", "JavaScript"]
task2b("In 2024, I will be 25 years old."); // ["2024", "25"]

task3a("(123) 456-7890"); // ["123", "456", "7890"]
task3b("example@domain.com"); // ["example", "domain.com"]

task4a("Hello world!"); // ["Hello"]
task4b("Say hello to the world"); // ["world"]

task5a("Password123!"); // "Valid password"
task5b("https://www.example.com"); // "Valid URL"
