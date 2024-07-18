//Activity 1: Array Creation and Access
//Task 1: Create an array of numbers from 1 to 5 and log the array to the console. 
let myarr=[1,2,3,4,5];
console.log(myarr);
//Task 2: Access the first and last elements of the array and log them to the console.

console.log(`First Element : ${myarr[0]} and the last element : ${myarr[myarr.length-1]}`);

//Activity 2: Array Methods (Basic)
// Task 3: Use the push method to add a new number to the end of the array and log the updated array.
 let arr=[1,7,8,4,6,2,5];
 arr.push(56);
 arr.push(89);
 console.log(arr);
// Task 4: Use the pop method to remove the last element from the array and log the updated array.
arr.pop();
console.log(arr);
// Task 5: Use the shift method to remove the first element from the array and log the updated array.
arr.shift();
console.log(arr);
// Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.
arr.unshift(91);
console.log(arr);
// Activity 3: Array Methods (Intermediate)
let myArray=[1,2,3,4,5,6,7];
// Task 7: Use the map method to create a new array where each number is doubled and log the new array.
let newMapArray=myArray.map((item)=>item*2);
console.log(`Map new array : ${newMapArray}`);
// Task 8: Use the filter method to create a new array with only even numbers and log the new array.
let myNewFilterArray=myArray.filter((item)=>item%2==0);
console.log(`Filter new array : ${myNewFilterArray}`);
// Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
let sum=myArray.reduce((acc,currval)=>{
    return acc+currval;
},0)
console.log(`sum : ${sum}`);
// Activity 4: Array Iteration
// Task 10: Use a for loop to iterate over the array and log each element to the console.
let mynewarr=[9,45,6,89,70,100];
for(let i=0;i<mynewarr.length;i++){
    console.log(`Element ${i+1} in array : ${mynewarr[i]}`);
}
// Task 11: Use the forEach method to iterate over the array and log each element to the console.
let i=1;
mynewarr.forEach((element)=>{
    console.log(`Element ${i++} in array : ${element}`);
})
// Activity 5: Multi-dimensional Arrays
// Task 12: Create a two-dimensional array (matrix) and log the entire array to the console. 
let my2DArray=[[1,2,3],[4,5,6],[7,8,9],[15,17,18]];
let print2DArray=(my2DArray)=>{
    my2DArray.forEach((row)=>{
        row.forEach((columns)=>{
            console.log(columns);
        })
    })
}
print2DArray(my2DArray);
// Task 13: Access and log a specific element from the two-dimensional array.
console.log(`Element[2][1]  of my2DArray : ${my2DArray[2][1]}`);

