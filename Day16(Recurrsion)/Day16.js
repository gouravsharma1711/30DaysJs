// Day 16: Recursion
// Tasks/Activities:
// Activity 1: Basic Recursion
// Task 1: Write a recursive function to calculate the factorial of a number. Log the result for a few test cases.
const factorial=(num)=>{
    if(num==1)return 1;
    return num*factorial(num-1);
}
let num=5;
console.log(`Factorial of ${num} : ${factorial(num)}`);
// Task 2: Write a recursive function to calculate the nth Fibonacci number. Log the result for a few test cases.
const fibonacci=(n)=>{
    if(n==1)return 0;
    else if(n==2)return 1;
    return fibonacci(n-1)+fibonacci(n-2);
}
let n=4;
console.log(fibonacci(n));
// Activity 2: Recursion with Arrays
// Task 3: Write a recursive function to find the sum of all elements in an array. Log the result for a few test cases. 
let array=[1,4,5,7,2,3,4,5];
let sumOfArray=(array,i)=>{
    if(i==array.length)return 0;
    return array[i]+sumOfArray(array,i+1);
}
console.log(`Sum of Array : ${sumOfArray(array,0)}`);
//Task 4: Write a recursive function to find the maximum element in an array. Log the result for a few test cases.
const findMax=(array,i)=>{
    if(i==array.length-1)return array[i];
    let num=array[i];
    return Math.max(num,findMax(array,i+1));
}
console.log(`Maximum element in array : ${findMax(array,0)}`);

// Activity 3: String Manipulation with Recursion
// Task 5: Write a recursive function to reverse a string. Log the result for a few test cases.
let reverse=(st,i)=>{
    if (st.length === 0) {
        return "";
    }
    if(i==st.length-1)return st[i];

    return reverse(st,i+1)+st[i];

}
let str="Gourav";
console.log(reverse(str,0));
// Task 6: Write a recursive function to check if a string is a palindrome. Log the result for a few test cases.
const checPalindrome=(str,i,j)=>{
    if(i>=j)return true;
    if(str[i]!=str[j])return false;
    return checPalindrome(str,i+1,j-1);
}
let myString1="madam"
let myString2="racecar"
let myString3="Gourav"
console.log(`Does ${myString1} is palindrome : ${checPalindrome(myString1,0,myString1.length-1)}`);
console.log(`Does ${myString2} is palindrome : ${checPalindrome(myString2,0,myString2.length-1)}`);
console.log(`Does ${myString3} is palindrome : ${checPalindrome(myString3,0,myString3.length-1)}`);
// Activity 4: Recursive Search
// Task 7: Write a recursive function to perform a binary search on a sorted array, Log the index of the target element for a few test cases. 
let MySortedArray=[7,12,15,19,36,48,55,79];
const BinarySearch=(MySortedArray,si,ei,key)=>{
    if(si>ei)return -1;

    let mid=Math.floor(si+(ei-si)/2);
    if(MySortedArray[mid]===key)return mid;
    else if(MySortedArray[mid]>key){
        return BinarySearch(MySortedArray,si,mid-1,key);
    }else{
        return BinarySearch(MySortedArray,mid+1,ei,key);

    }
}
console.log(BinarySearch(MySortedArray,0,MySortedArray.length-1,80));
console.log(BinarySearch(MySortedArray,0,MySortedArray.length-1,12));
console.log(BinarySearch(MySortedArray,0,MySortedArray.length-1,36));
//Task 8: Write a recursive function to count the occurrences of a target element in an array. Log the result for a few test cases.
let count=[0];
let countOccurrences=(arr,key,i)=>{
    if(i===arr.length)return 0;
    let count=0;
    if(arr[i]===key)count=count+1;
    return count+countOccurrences(arr,key,i+1);
}
let Array=[4,1,5,4,8,6,5,2,3,9,7,7,1,5,5,55,5,4,8,5];
console.log( countOccurrences(Array,5,0))
let Array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(countOccurrences(Array2, 10,0)); 

let Array3 = [1, 1, 1, 1, 1, 1];
console.log(countOccurrences(Array3, 1,0));
// Activity 5: Tree Traversal (Optional)
class TreeNode{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}
// Task 9: Write a recursive function to perform an in-order traversal of a binary tree. Log the nodes as they are visited. 

let root=new TreeNode(8);
let a=new TreeNode(6);
let b=new TreeNode(17);
let c=new TreeNode(3);
let d=new TreeNode(7);
let e=new TreeNode(16);
let f=new TreeNode(18);
let g=new TreeNode(19);
let h=new TreeNode(20);

root.left=a;
root.right=b;
a.left=c;
a.right=d;
b.left=e;
b.right=f;
f.right=g;
g.right=h;
let inOrder=(root)=>{
    if(root===null)return;
    inOrder(root.left);
    process.stdout.write(root.value+" ");
    inOrder(root.right);
}
inOrder(root);
console.log();

//Task 10: Write a recursive function to calculate the depth of a binary tree. Log the result for a few test cases.
let depthOfBinaryTree=(root)=>{
    if(root===null)return -1;
    let left=depthOfBinaryTree(root.left);
    let right=depthOfBinaryTree(root.right);
    return 1+Math.max(left,right);

}
console.log(depthOfBinaryTree(root));