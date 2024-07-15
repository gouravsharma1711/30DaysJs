//Activity 1: if-else statements
// Task 1 : write a program to check if a number is positive , negative  or zero and log the result to the console.
let Num=-25;
if(Num>=0){
    console.log(`Num is positive`);
}else{
    console.log(`Num is negative`);
}
// task 2: write a program to check if a person is eligible to vote (age>=18) and log the result to the console.
let personOneAge=15;
let personTwoAge=21;
let checkEligibilityForVote=(age)=>{
    if(age<0){
       return "not a valid age!!" 
    }else if(age>=18){
        return "yes";
    }else{
        return "no"
    }
}
console.log(`does person one is eligible for vote ?? ${checkEligibilityForVote(personOneAge)}`);
console.log(`does person two is eligible for vote ?? ${checkEligibilityForVote(personTwoAge)}`);

//Activity 2 : Nested if else statements
// task 3 : Write a program to find the largest of three number using nested if else statememts.

let num1=56;
let num2=45;
let num3=12;

let checkGreatest=(num1,num2,num3)=>{
    if(num1>num2 && num1>num3){
        return num1;
    }else if(num2>num3 && num2> num1){
        return num2;
    }else{
        return num3;
    }
}

console.log(`which one is greater ?? num1(${num1}),num2(${num2}),num3(${num3})?? => ${checkGreatest(num1,num2,num3)}(answer)`);

// Activity 3: Switch Case
//task4: Write a program that uses a switch case to determine the day of the week based on number (1-7) and log the day name to the console. 

let weekDayNumber=3;
switch(weekDayNumber){
    case 1: console.log("Monday");
        break;
    case 2: console.log("Tuesday");
        break;
    case 3: console.log("Wednesday");
        break;
    case 4: console.log("Thrusday");
        break;
    case 5: console.log("Friday");
    break;
    case 6: console.log("Saturday");
        break;
    case 7: console.log("Sunday");
        break;
}

//task 5: Write a program that uses a switch case to assign a grade (A,B,C,D,F) based on a score and log the grade to the console.
let score=50;
let grade;
switch(true){
    case (score>=90): grade='A';
        break;
    case (score>=80 && score<90):grade='B';
        break;
    case (score>=70 && score<80):grade='C';
        break;
    case (score>=60 && score<70):grade='D';
        break;
    case (score<60):grade='E';
        break;
}
console.log(grade);

// Activity 4: Conditional (Ternary Operator)
// Task 6: write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.

let number=56;
let checkEvenOrOdd=(number)=>{
    return (number%2==0)?"even":"odd";
}
console.log(`${number} is even or odd ?? => ${checkEvenOrOdd(number)}`);
number=31;
console.log(`${number} is even or odd ?? => ${checkEvenOrOdd(number)}`);

//Activity 5 : Combining Conditions
// Task 7 : Write a program to check if a year is a leap year using mutiple conditions (divisible by 4 , but not 100 unless also divisible by 400 ) and log the result to the console.

let year=2028;
let chekLeapYear=(year)=>{
    if(year%4==0 && year%100!=0){
        return "yes it's a leap year"
    }else if(year%400==0){
        return "yes it's a leap year"
    }else{
        return "No it's not a leap year"
    }
}
console.log(`${year} ${chekLeapYear(year)}`);
year =2001;
console.log(`${year} ${chekLeapYear(year)}`);
