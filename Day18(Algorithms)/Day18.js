// Day 18: Algorithms
// Tasks/Activities:
// Activity 1: Sorting Algorithms
// Task 1: Implement the bubble sort algorithm to sort an array of numbers in ascending order, Log the sorted array. 
const bubbleSort=(arr)=>{
    for(let i=1;i<arr.length;i++){
        let flag=false;
        for(let j=0;j<arr.length-i;j++){

            if(arr[j]>arr[j+1]){
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                flag=true;
            }

        }
        if(!flag)break;
    }
}
let arr1=[5,4,2,3,1];
bubbleSort(arr1);
console.log(`Bubble sort result : [${arr1}]`);
// Task 2: Implement the selection sort algorithm to sort an array of numbers in ascending order. Log the sorted array.
const selectionSort=(arr)=>{
    for(let i=0;i<arr.length;i++){
        let min=i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[min])min=j;
        }
        [arr[i],arr[min]]=[arr[min],arr[i]];


    }
}
let arr2=[5,8,1,3,4,6,7,20]
selectionSort(arr2);
console.log(`Selection sort result : [${arr2}]`);
// Task 3: Implement the quicksort algorithm to sort an array of numbers in ascending order. Log the sorted array
const partition=(arr,si,ei)=>{
    const pivot=arr[ei];
    let i=si-1;
    let j=si;
   while(j<ei){
        if(arr[j]<=pivot){
            i++;
            [arr[i],arr[j]]=[arr[j],arr[i]];
        }
        j++;
    }
    i++;
    [arr[i],arr[ei]]=[arr[ei],arr[i]]
    return i;
}

const quickSort=(arr,si,ei)=>{
    if(si>=ei)return ;
    let pivot=partition(arr,si,ei);
    quickSort(arr,si,pivot-1)
    quickSort(arr,pivot+1,ei)
}
let arr3=[6,3,9,8,2,5];
quickSort(arr3,0,arr3.length-1)
console.log(`Quick sort result : [${arr3}]`);

// Activity 2: Searching Algorithms
// Task 4: Implement the linear search algorithm to find a target value in an array. Log the index of the target value. 
const linearSearch=(arr,key)=>{
    for(let i=0;i<arr.length;i++){
        if(arr[i]===key)return i;
    }
    return -1;
}
let arr4=[6,3,9,8,2,5];
console.log("Linear Search :- ");
console.log(`element 2 present in  ${linearSearch(arr4,2)} index in arr4`);
console.log(`element 10 present in  ${linearSearch(arr4,10)} index in arr4`);

// Task 5: Implement the binary search algorithm to find a target value in a sorted array. Log the index of the target value.
const binarySearch=(arr,key)=>{
    let si=0;
    let ei=arr.length-1;
    while(si<ei){
        let mid=Math.floor(si+((ei-si)/2));
        if(arr[mid]===key)return mid;
        else if(arr[mid]>key){
            ei=mid-1;
        }else{
            si=mid+1
        }
    }
    return -1;
}
let arr5=[2,3,5,6,8,9];

console.log("Binary Search :- ");
console.log(`element 2 present in  ${binarySearch(arr5,8)} index in arr5`);
console.log(`element 10 present in  ${binarySearch(arr5,10)} index in arr5`);
// Activity 3: String Algorithms
// Task 6: Write a function to count the occurrences of each character in a string. Log the character counts.
let countCharacterOccurrences=(str)=>{
    let charCount={};
    for(let char of str){
        if(charCount[char]){
            charCount[char]++;
        }else{
            charCount[char]=1;
        }
    }
    return charCount;
}
let myString="hello world";
let myCharObj=countCharacterOccurrences(myString);
console.log(myCharObj);
// Task 7: Write a function to find the longest substring without repeating characters in a string. Log the length of the substring.
function lengthOfLongestSubstring(s) {
    let n = s.length;
    let maxLength = 0;
    let lastIndex = new Array(256).fill(-1); 

    let i = 0;

    for (let j = 0; j < n; j++) {
        let currentChar = s.charCodeAt(j);
        if (lastIndex[currentChar] >= i) {
            i = lastIndex[currentChar] + 1;
        }
        lastIndex[currentChar] = j;
        maxLength = Math.max(maxLength, j - i + 1);
    }

    console.log("Length of the longest substring without repeating characters:", maxLength);
    return maxLength;
}

let inputString = "abcabcbb";
lengthOfLongestSubstring(inputString); 

// Activity 4: Array Algorithms
// Task 8: Write a function to rotate an array by k positions. Log the rotated array 
const rotateArray = (arr, k) => {
    const n = arr.length;
    k = k % n; 
    const reverse = (start, end) => {
        while (start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++;
            end--;
        }
    };
    reverse(0, n - 1);
    reverse(0, k - 1);
    reverse(k, n - 1);
};
let arr = [1, 2, 3, 4, 5, 6, 7];
let k = 3;
console.log("Task 8 :- ");
rotateArray(arr, k);
console.log(arr);
//Task 9: Write a function to merge two sorted arrays into one sorted array. Log the merged array.
const mergeTwoSortedArray=(arr1,arr2)=>{
    let i=0;
    let j=0;
    let newArray=[];
    while(i<arr1.length && j<arr2.length){
        if(arr1[i]<arr2[j]){
            newArray.push(arr1[i]);
            i++;
        }else if(arr1[i]>arr2[j]){
            newArray.push(arr2[j]);
            j++;
        }else{
            newArray.push(arr2[j]);
            newArray.push(arr2[j]);
            i++;
            j++;
        }
    }
    while(i<arr1.length)newArray.push(arr1[i++]);
    while(j<arr2.length)newArray.push(arr2[j++]);
    return newArray;
}
let arr6= [1, 2, 3, 5, 7];
let arr7=[2, 3, 5, 8, 10];
let mergedArray=mergeTwoSortedArray(arr6,arr7);
console.log("Task 9 :-");
console.log(mergedArray);