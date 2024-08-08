// Day 23: LeetCode Hard
// Tasks/Activities:
// Activity 1: Median of Two Sorted Arrays
// Task 1: Solve the "Median of Two Sorted Arrays problem on LeetCode.
// Write a function that takes two sorted arrays of integers and retums the median of the two sorted arrays.
// Log the median for a few test cases, including edge cases..
const findMedianSortedArrays = function(nums1, nums2) {
    let myarr=[...nums1,...nums2];
    myarr.sort((a,b)=>a-b);
    if(myarr.length%2===0){
        return (myarr[Math.floor(myarr.length/2)]+myarr[Math.floor(myarr.length/2)-1])/2
    }else{
        return myarr[Math.floor(myarr.length/2)];
    }
};
console.log("Task 01 :-");

console.log("Median : ",findMedianSortedArrays([1,3],[2]));
console.log("Median : ",findMedianSortedArrays([1,2],[3,4]));
console.log("Median : ",findMedianSortedArrays([1,3,5,7,9],[2,4,6,8,10]));

// Activity 2: Merge k Sorted Lists
// Task 2: Solve the 'Merge k Sorted Lists problem on LeetCode.
// Write a function that takes an array of k linked lists, each linked list is sorted in ascending order, and merges all the linked lists into one sorted linked list.
// Create a few test cases with linked lists and log the merged list
console.log("Task 02 :-");
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function mergeKLists(lists) {
    function minHeapInsert(heap, node) {
        heap.push(node);
        heap.sort((a, b) => a.val - b.val); 
    }

    const heap = [];
    const dummy = new ListNode();
    let current = dummy;

    for (let list of lists) {
        if (list !== null) {
            minHeapInsert(heap, list);
        }
    }
    while (heap.length > 0) {
        let smallestNode = heap.shift(); 
        current.next = smallestNode;
        current = current.next;

        if (smallestNode.next !== null) {
            minHeapInsert(heap, smallestNode.next); 
        }
    }

    return dummy.next;
}

function printList(node) {
    const result = [];
    while (node) {
        result.push(node.val);
        node = node.next;
    }
    console.log(result.join(' -> '));
}

// Test Cases
let l1 = new ListNode(1, new ListNode(4, new ListNode(5)));
let l2 = new ListNode(1, new ListNode(3, new ListNode(4)));
let l3 = new ListNode(2, new ListNode(6));

let mergedList = mergeKLists([l1, l2, l3]);
printList(mergedList); 

let l4 = new ListNode(5, new ListNode(8));
let l5 = new ListNode(3, new ListNode(7));
let mergedList2 = mergeKLists([l4, l5]);
printList(mergedList2);

let mergedList3 = mergeKLists([]); 
printList(mergedList3); 

let mergedList4 = mergeKLists([null, new ListNode(1)]);
printList(mergedList4);

// Activity 3: Trapping Rain Water
// Task 3: Solve the "Trapping Rain Water problem on LeetCode.
// Write a function that takes an array of non-negative integers representing an elevation map where the width of each bar is 1, and computes how much water it can trap after raining. Log the amount of trapped water for a few test cases.
const trap = function(height) {
    let left=new Array(height.length);
    let right=new Array(height.length);
    let leftmax=-Infinity;
    for(let i=0;i<height.length;i++){
        if(height[i]>leftmax){
            leftmax=height[i];
        }
        left[i]=leftmax;
    }
    let rightmax=-Infinity;
    for(let i=height.length-1;i>=0;i--){
        if(height[i]>rightmax){
            rightmax=height[i];
        }
        right[i]=rightmax;
    }
    let StoredWater=0;
    for(let i=0;i<height.length;i++){
        StoredWater+=1*(Math.min(left[i],right[i])-height[i])
    }
    return StoredWater;

};
console.log("Task 03 :-");
console.log("Water Trapped :  ",trap([0,1,0,2,1,0,1,3,2,1,2,1]));
console.log("Water Trapped :  ",trap([4,2,0,3,2,5]));

// Activity 4: N-Queens
// Task 4: Solve the "N-Queens" problem on LeetCode.
// Write a function that places n queens on an nan chessboard such that no two queeris attach each other, and returns all distinct solutions to the n-queens puzzle. Log the distinct solutions for a few test cases.
console.log("task 04 :- ");
const check=(i,j,arr)=>{
    let r=j+1;
    while(r<arr.length){
        if(arr[i][r]==='Q')return false;
        r++;
    }
    r=j-1;
    while(r>=0){
        if(arr[i][r]==='Q')return false;
        r--;
    }
    r=i+1;
    while(r<arr.length){
        if(arr[r][j]==='Q')return false;
        r++;
    }
    r=i-1;
    while(r>=0){
        if(arr[r][j]==='Q')return false;
        r--;
    }
    let k=i-1;
    let l=j-1;
    while(k>=0 && l>=0){
        if(arr[k][l]==='Q')return false;
        k--;
        l--;
    }
    k=i+1;
    l=j+1;
    while(k<arr.length && j<arr.length){
        if(arr[k][l]==='Q')return false;
        k++;
        l++;
    }
    k=i-1;
    l=j+1;
    while(k>=0 && l<arr.length){
        if(arr[k][l]==='Q')return false;
        k--;
        l++;
    }
    k=i+1;
    l=j-1;
    while(l>=0 && k<arr.length){
        if(arr[k][l]==='Q')return false;
        k++;
        l--;
    }
    return true;

}
const helper=(arr,solution,i,j)=>{
    if(i===arr.length){
        let newArray=arr.map(row => {
            let st="";
            for(let i=0;i<row.length;i++){
                st+=row[i];
            }
            return st;
        });
        solution.push(newArray);
        return;
    }
    if(j===arr.length)return;
    if(check(i,j,arr)===true){
        arr[i][j]='Q';
        helper(arr,solution,i+1,0);
        arr[i][j]='.';
    }
    helper(arr,solution,i,j+1);
}
const solveNQueens = function(n) {
    let solution=[];
    let arr=[];
    for (let i = 0; i < n; i++) {
        let row = [];
        for (let j = 0; j < n; j++) {
            row.push('.');
        }
        arr.push(row);
    }
    helper(arr,solution,0,0);
    return solution;
};
console.log("Solution when n=4 :- ");
console.log(solveNQueens(4));
console.log("Solution when n=6 :- ");
console.log(solveNQueens(6));


// Activity 5: Word Ladder
// Task 5: Solve the "Word Ladder problem on LeetCode.
// Write a function that takes a begin word, an end ward, and a dictionary of words, and finds the length of the shortest trasformation sequence from the begin ward to the end word, such that only one letter can be changed
// at a time and each transformed word must exist in the word list. Log the length of the shortest transformation sequence for a few test cases
console.log("Task 05 :-");
function wordLadderLength(beginWord, endWord, wordList) {
    const wordSet = new Set(wordList); 
    if (!wordSet.has(endWord)) return 0; 

    const queue = [[beginWord, 1]]; 
    
    while (queue.length > 0) {
        const [currentWord, steps] = queue.shift();

        for (let i = 0; i < currentWord.length; i++) {
            for (let c = 97; c <= 122; c++) { // ASCII 'a' to 'z'
                const newWord = currentWord.slice(0, i) + String.fromCharCode(c) + currentWord.slice(i + 1);
                
                if (newWord === endWord) {
                    return steps + 1; 
                }

                if (wordSet.has(newWord)) {
                    queue.push([newWord, steps + 1]); 
                    wordSet.delete(newWord); 
                }
            }
        }
    }
    
    return 0; 
}

console.log(wordLadderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])); 
console.log(wordLadderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log"])); 
console.log(wordLadderLength("hit", "hot", ["hot"]));
