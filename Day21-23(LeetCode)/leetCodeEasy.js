// Day 21: LeetCode Easy
// Tasks/Activities:
// Activity 1: Two Sum
// Task 1: Solve the Two Sum problem on LeetCode.
// Write a function that takes an array of numbers and a target number, and returns the indices of the two numbers that add up to the target.
// Log the indices for a few test cases.
console.log("Task 1");

const twoSum = function(nums, target) {
    // const indexMap = new Map();
    // for (let i = 0; i < nums.length; i++) {
    //     indexMap.set(nums[i], i);
    // }
    
    let numbers = [...nums];
    numbers.sort((a,b)=>a-b);
    
    let i=0;
    let j=numbers.length-1;
    while(i<j){
        let sum=numbers[i]+numbers[j];
        if(sum===target){
            let index1 = nums.indexOf(numbers[i]);
            let index2 = nums.indexOf(numbers[j]);
            // Check if the indices are distinct
            if (index1 !== index2) {
                return [index1, index2]
            }else{
                let index1=nums.indexOf(numbers[i]);
                let index2=nums.indexOf(numbers[i],index1+1);
                return [index1,index2];
            }
        }
        else if(sum>target)j--;
        else i++;
    }
};
console.log(twoSum([3,2,4],6));
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([-1, -2, -3, -4, -5], -8));
console.log(twoSum([3,3],6));

// Activity 2: Reverse Integer
// Task 2: Solve the "Reverse Integer problem on LeetCode.
// Write a function that takes an integer and returns it with its digits reversed. Handle edge cases like negative numbers and numbers ending in zero.
// Log the reversed integers for a few test cases.
console.log("Task 2");

const reverse = function(x) {
    let temp=Math.abs(x);
    let y=0;
    while(temp>0){
        let rem=temp%10;
        y=y*10+rem;
        temp=Math.floor(temp/10);
    }
    if (y > 2**31 - 1) {
        return 0;
    }
    return (x<0)?-y:y;
};
let num1 = 1534236469;
let num2 = -12345;
let num3 = 67890;
console.log(`Result for num1 : ${reverse(num1)}`);
console.log(`Result for num2 : ${reverse(num2)}`);
console.log(`Result for num3 : ${reverse(num3)}`);

// Activity 3: Palindrome Number
// Task 3: Solve the Palindrome Number problem on LeetCode.
// Write a function that takes an integer and returns true if it is a palindrome, and false otherwise. Log the result for a few test cases, including edge cases like negative numbers.
console.log("Task 3");

const isPalindrome = function(x) {
    if(x<0)return false;
    let st=String(x);
    let i=0;
    let j=st.length-1;
    while(i<j){
        if(st[i]!=st[j])return false;
        i++;
        j--;
    }
    return true;
};
// Test cases
console.log(isPalindrome(121));
console.log(isPalindrome(-121)); 
console.log(isPalindrome(10));
console.log(isPalindrome(12321)); 
console.log(isPalindrome(0));
console.log(isPalindrome(1234321)); 
console.log(isPalindrome(123456)); 
// Activity 4: Merge Two Sorted Lists
// Task 4: Solve the 'Merge Two Sorted Lists problem on LeetCode.
// Write a function that takes two sorted linked lists and returns a new sorted list by merging them.
// Create a few test cases with linked lists and log the merged list.
console.log("Task 4");

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
const helper=(newList,list1,list2)=>{
    if(list1===null){
        newList.next=list2;
        return;
    }else if(list2===null){
        newList.next=list1;
        return;
    }
    if(list1.val>list2.val){
        newList.next=new ListNode(list2.val);
        helper(newList.next,list1,list2.next);
    }else if(list2.val>list1.val){
        newList.next=new ListNode(list1.val);
        helper(newList.next,list1.next,list2);
    }else{
        newList.next=new ListNode(list2.val);
        newList=newList.next;
        newList.next=new ListNode(list1.val);
        helper(newList.next,list1.next,list2.next);
    }
}
const mergeTwoLists = function(list1, list2) {
    let newList=new ListNode(10);
    helper(newList,list1,list2);
    return newList.next;
};
let temp1=new ListNode(1);
temp1.next=new ListNode(2);
temp1.next.next=new ListNode(4);
console.log(temp1);

let temp2=new ListNode(1);
temp2.next=new ListNode(3);
temp2.next.next=new ListNode(4);
console.log(temp2);
print(mergeTwoLists(temp1,temp2));
function print(node){
    let temp=node;
    while(temp!==null){
        if(temp.next!==null){
            process.stdout.write(temp.val+" -> ");
        }else if(temp.next===null){
            process.stdout.write(temp.val+" ");
        }
        temp=temp.next;
        
    }console.log();
}
// Activity 5: Valid Parentheses
// Task 5: Solve the "Valid Parentheses" problem on LeetCode.
// Write a function that takes a string containing just the characters (.).[.], '[' and ], and determines if the input string is valid. A string is valid if open brackets are closed in the correct order.
// Log the result for a few test cases.
console.log("Task 5");

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Stack {
    constructor() {
        this.top = null;
        this.size = 0;   
    }
    push(value) {
        const newNode = new Node(value);
        newNode.next = this.top; 
        this.top = newNode;    
        this.size++;
    }
    pop() {
        if (this.isEmpty()) {
            return null; 
        }
        const poppedValue = this.top.value; 
        this.top = this.top.next;           
        this.size--;
        return poppedValue;
    }
    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.top.value;
    }
    isEmpty() {
        return this.size === 0;
    }
}

const isValid = function(s) {
    let mystack=new Stack();
    for(let i=0;i<s.length;i++){
        let ch=s.charAt(i);
        if(mystack.peek()==='(' && ch===')' ||mystack.peek()==='{' && ch==='}' || mystack.peek()==='[' && ch===']' ){
            mystack.pop();
        }
        else if(ch === '(' || ch === '{' || ch === '[') {
            mystack.push(ch);
        }
    }
    return mystack.isEmpty();
};
console.log(isValid("((((((((((()))))))))))))"));
console.log(isValid("{[({}[])]}"));

