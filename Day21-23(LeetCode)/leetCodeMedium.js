// Day 22: LeetCode Medium
// Tasks/Activities:
// Activity 1: Add Two Numbers
// Task 1: Solve the 'Add Two Numbers problem on LeetCode.
// Write a function that takes two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each node contains a single digit. Add the two numbers and retum the sum as a linked
// List.
// Create a few test cases with linked lists and log the sum as a linked list.
function ListNode(val, next) {
        this.val = (val===undefined ? 0 : val);
        this.next = (next===undefined ? null : next);
}
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
const addTwoNumbers = function(l1, l2) {
    let node=new ListNode(10);
    let temp=node;
    let carry=0;
    while(l1!==null || l2!==null || carry!==0){
        let val1=(l1!==null)? l1.val:0;
        let val2=(l2!==null)? l2.val:0;
        let sum=val1+val2+carry;
        carry=Math.floor(sum/10);
        let newNode=new ListNode(sum%10);
        temp.next=newNode;
        temp=temp.next;
        if(l1!==null)l1=l1.next;
        if(l2!==null)l2=l2.next;
    }
    
    return node.next;
};
let l1=new ListNode(9);
let temp1=l1;
for(let i=1;i<=6;i++){
    temp1.next=new ListNode(9);
    temp1=temp1.next;
}
let l2=new ListNode(9);
let temp2=l2;
for(let i=1;i<=3;i++){
    temp2.next=new ListNode(9);
    temp2=temp2.next;
}
console.log("Task 01 :-");

print(addTwoNumbers(l1,l2));

// Activity 2: Longest Substring Without Repeating Characters
// Task 2: Solve the "Longest Substring Without Repeating ve the Longest Subs Characters problem on LeetCode.
// Write a function that takes a string and returns the length of the longest substring without repeating characters.
// Log the length for a few test cases, including edge cases.
console.log("Task 02");
function lengthOfLongestSubstring(s) {
    let maxLength = 0;
    let start = 0;
    const charIndexMap = new Map();

    for (let end = 0; end < s.length; end++) {
        const currentChar = s[end];

        if (charIndexMap.has(currentChar) && charIndexMap.get(currentChar) >= start) {
            start = charIndexMap.get(currentChar) + 1;
        }
        charIndexMap.set(currentChar, end);
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}

// Test Cases
console.log(lengthOfLongestSubstring("abcabcbb")); 
console.log(lengthOfLongestSubstring("bbbbb")); 
console.log(lengthOfLongestSubstring("pwwkew")); 
console.log(lengthOfLongestSubstring("")); 
console.log(lengthOfLongestSubstring("dvdf")); 

// Activity 3: Container With Most Water
// Task 3: Solve the "Container With Most Water problem on LeetCode.
// Write a function that takes an array of non-negative integers where each integer represents the height of a line drawn at each point. Find two lines that together with the x-axis form a container, such that the container holds
// the most water Log the maximum amount of water for a few test cases.
var maxArea = function(height) {
    let maxWater=0;
    let i=0;
    let j=height.length-1;
    while(i<j){
        let minheight=Math.min(height[i],height[j]);
        maxWater=Math.max(maxWater,minheight*(j-i));
        if(height[i]<height[j]){
            i++;
        }else if(height[i]>height[j]){
            j--;
        }else{
            i++;
            j--;
        }
    }
    return maxWater;
};
console.log("Task 03 :-");
console.log("Max Water stored :- ",maxArea([1,8,6,2,5,4,8,3,7]));

// Activity 4: 3Sum
// Task 4: Solve the "35um" problem on LeetCode.
// Write a function that takes an array of integers and finds all unique triplets in the array which give the sum of zero.
// Log the triplets for a few test cases, including edge cases.
console.log("task 04");

var threeSum = function(nums) {
    let answer=[];
    nums.sort((a, b) => a - b);
    for(let i=0;i<nums.length-2;i++){
        let j=i+1;
        let k=nums.length-1;
        if(i>0 && nums[i]===nums[i-1])continue;
        while(j<k){
            let sum=nums[i]+nums[j]+nums[k];
            if(sum===0){
               answer.push([nums[i],nums[j],nums[k]]);
               while (j < k && nums[j] == nums[j + 1]) j++;
                while (j < k && nums[k] == nums[k - 1]) k--;
                j++;
                k--;
            }else if(sum<0)j++;
            else k--;
        }
    }
    return answer;
};
console.log(threeSum([-1,0,1,2,-1,-4,-2,-3,3,0,4]));

// Activity 5: Group Anagrams
// Task 5: Solve the 'Group Anagrams problem on LeetCode.
// Write a function that takes an array of strings and groups anagrams together.
// Log the grouped anagrams for a few test cases.

console.log("Task 05 :- ");
function groupAnagrams(strs) {
    const anagrams = {};

    for (let str of strs) {
        const sortedStr = str.split('').sort().join('');

        if (!anagrams[sortedStr]) {
            anagrams[sortedStr] = [];
        }
        anagrams[sortedStr].push(str);
    }

    return Object.values(anagrams);
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])); 

console.log(groupAnagrams([""])); 
console.log(groupAnagrams(["a"])); 
console.log(groupAnagrams(["abc", "bca", "cab", "xyz", "yxz", "zxy", "pqr"])); 

