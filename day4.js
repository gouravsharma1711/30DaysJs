// Activity  : For loop
 // task1 : Write a program to print numbers from 1 to 10 using a loop.
 console.log("Task 1 : -");
 for(let i=1;i<=10;i++){
   process.stdout.write(`${i} `);
 }
 console.log();
 //task2 : write a program to print multiplication table of 5 using a for loop.
 console.log("Task 2 : -");
 for(let i=1;i<=10;i++){
    console.log(`5 X ${i} = ${5*i}`);
 }
 // Activity 2 : While loop
 //task 3 : Write a program to calculate the sum of numbers from 1 to 10 using a while loop.
 console.log("Task 3 : -");
 let sum=0;
 let i=1;
 while(i<11){
    sum+=i;
    i++;
 }
 console.log(`sum of numbers between 1 to 10 is equal to ${sum}`);
 //task 4 : write a program to print numbers from 10 to 1 using a while loop.
 console.log("Task 4 : -");
 i=10;
 while(i>0){
   process.stdout.write(`${i} `);
    i--;
 }
 console.log();
 // Activity 3 : do while loop
 //task5 : write a program to print numbers from 1 to 5 using a do while loop.
 console.log("Task 5 : -");
 i=1;
 do{
   process.stdout.write(`${i} `);
    i++;
 }while(i<=5);
 console.log();
 //task6 : Write a program to calculate the factorial of a number using a do while loop
 console.log("Task 6 : -");
 let fact=1;
let n=5;
let j=1;
 do{
    fact*=j;
    j++;
 }while(j<=n);
 console.log(`factorial of number ${n} : ${fact}`);
// Activity 4: Nested loops
//task 7 : Write a program to print a pattern using nested for loops: 
/*  *
    **
    ***
    ****
    *****
    */
    console.log("Task 7 : -");
for( let i=1;i<=5;i++){
    for(let j=1;j<=i;j++){
        process.stdout.write("*");
    }console.log();
}
//Activity 5 : Loop control statements 
//task 8: write a program to print numberd from 1 to 10 , but skip the number 5 using the continue statement.
console.log("Task 8 : -");
for(let i=1;i<=10;i++){
   if(i==5)continue;
   process.stdout.write(`${i} `);
}console.log();
//task 9 : write a program to print numbers from 1 to 10 but stop the loop when the number is 7 using the break statement.
console.log("Task 9 : -");
for(let i=1;i<=10;i++){
   if(i==7)break;
   process.stdout.write(`${i} `);
}