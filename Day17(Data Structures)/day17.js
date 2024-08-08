// To exit full screen, press Est
// Day 17: Data Structures
// Tasks/Activities:
// Activity 1: Linked List
// Task 1: Implement a node class to represent an element in a linked list with properties value and next 
class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}
//Task 2: implement a LinkedList class with methods to add a node to the end, remove a node from the end, and display all nodes.
class LinkedList{
    constructor(value=null){
        this.head = value !== null ? new Node(value) : null;
    }
    insert(value){
        let myNode=new Node(value);
        if(this.head===null){
            this.head=myNode;
            return;
        }
        let node=this.head;
        while(node.next!=null)node=node.next;
        node.next=myNode;
    }
    removeFromEnd(){
        if(this.head===null){
            throw new Error("List is empty");
        }else if(this.head.next===null){
            this.head=null;
            return;
        }
        let node=this.head;
        while(node.next.next!==null)node=node.next;
        node.next=null;
    }
    display(){
        let node=this.head;
        while(node!==null){
            process.stdout.write(node.value+" ");
            node=node.next;
        }
        console.log();
    }
}
let head=new LinkedList(15);
head.insert(10);
head.insert(56);
head.insert(12);
head.insert(100);
head.removeFromEnd();
// head.display();
// Activity 2: Stack
// Task 3: Implement a stack class with methods push (add element), pop (remove element), and peek (view the top element).
class Stack{
    constructor(value=null){
        if(value===null){
            this.Pointer=null;
        }else{
        this.Pointer=new Node(value);
        }
    }
    push(value){
        let newNode=new Node(value);
        newNode.next=this.Pointer;
        this.Pointer=newNode;
    }
    pop(){
        if(this.Pointer===null){
            return "Stack is empty";
        }
        let value=this.Pointer.value;
        this.Pointer=this.Pointer.next;
        return value;
    }
    peek(){
        if(this.Pointer===null){
            return "Stack is empty";
        }
        return this.Pointer.value;
    }
    isEmpty(){
        return this.Pointer===null;
    }
    print(){
        let temp=this.Pointer;
        while(temp!==null){
            process.stdout.write(temp.value+" ");
            temp=temp.next;
        }
        console.log();
    }
}
let mystack=new Stack(15);
console.log(mystack.peek());
// Task 4: Use the Stack class to reverse a string by pushing all characters onto the stack and then popping them off.
console.log("Task 04");

let myString="hello world";
let reverse=(str)=>{
    let myStack=new Stack();
    for(let i=0;i<str.length;i++){
        myStack.push(str.charAt(i));
        
    }
    let myNewString="";
    while(!myStack.isEmpty()){
        myNewString+=myStack.pop();
    }
    return myNewString;
}
console.log("Original String : "+myString);

console.log("Reversed String :- "+reverse(myString));
// Activity 3: Queue
// Task 5: Implement a Queve class with methods enqueue ladd element), dequeue (remove element), and front (view the first element). 
class Queue{
    constructor(val=null){
        if(val===null){
            this.Pointer=null;
        }else{
            this.Pointer=new Node(val);
        }
    }
    enqueue(value){
        let myNode=new Node(value);
        if(this.Pointer===null){
            this.Pointer=myNode;
        }else{
            let node=this.Pointer;
            while(node.next!==null){
            node=node.next;
            }
            node.next=myNode;
        }
        
    }
    isEmpty(){
        return this.Pointer===null;
    }
    dequeue(){
        if(this.Pointer===null){
            
            return "Queue is empty ";
            
        }
        let value=this.Pointer.value;
        this.Pointer=this.Pointer.next;
        return value;
    }
    front(){
        if (this.Pointer === null) {
            return "Queue is empty";
        }
        return this.Pointer.value;
    }
    print(){
        let temp=this.Pointer;
        while(temp!==null){
            process.stdout.write(temp.value+" ");
            temp=temp.next;       
        }
        console.log();
        
    }

}
console.log("Task 05");

let myQueue=new Queue(1);
myQueue.print();
myQueue.enqueue(2);
myQueue.print();
myQueue.enqueue(3);
myQueue.print();
myQueue.enqueue(4);
myQueue.print();
myQueue.dequeue();
myQueue.print();


//Task 6: Use the Queue class to simulate a simple printer queue where print jobs are added to the queue and processed in order.
console.log("Task 06");

class PrintJob {
    constructor(name) {
        this.name = name;
    }

    print() {
        console.log(`Printing: ${this.name}`);
    }
}

function simulatePrinterQueue() {
    let printerQueue = new Queue();

    printerQueue.enqueue(new PrintJob("Document 1"));
    printerQueue.enqueue(new PrintJob("Document 2"));
    printerQueue.enqueue(new PrintJob("Document 3"));

    while (!printerQueue.isEmpty()) {
        let job = printerQueue.dequeue();
        job.print();
    }
}

simulatePrinterQueue();
// Activity 4: Binary Tree
// Task 7: Implement a TreeNode class to represent a node in a binary tree with properties value, left and right.
console.log("Task 07 :- ");

class TreeNode{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}
// Create the root node
let root = new TreeNode(1);

// Create left and right children of the root
root.left = new TreeNode(2);
root.right = new TreeNode(3);

// Add children to the left child of the root
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

// Add children to the right child of the root
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

console.log(root);
// Task 8: Implement a BinaryTree class with methods for inserting values and performing in-order traversal to display nodes
class BinaryTree{
    constructor(value=null){
        if(value===null){
            this.root=null;
        }else{
            this.root=new TreeNode(value);
        }
    }
    insert(value){
        let temp=new TreeNode(value);
        if(this.root===null){
            this.root=new TreeNode(value);
        }else{
        let temp2=this.root;
        while(true){
            if( temp2.value>value){
                if(temp2.left===null){
                    temp2.left=temp;
                    break;
                }else{
                    temp2=temp2.left;
                }
            }else{
                if(temp2.right===null){
                    temp2.right=temp;
                    break;
                }else{
                    temp2=temp2.right;
                }
            }
        }
        }
    }
    
    inOrder(node=this.root){
        if(node===null)return;
        this.inOrder(node.left);
        process.stdout.write(node.value+" ");
        this.inOrder(node.right);
    }
}
console.log("Task 08 :- ");

// Testing the BinaryTree class
let bt = new BinaryTree();
bt.insert(5);
bt.insert(3);
bt.insert(7);
bt.insert(2);
bt.insert(4);
bt.insert(6);
bt.insert(8);

console.log("In-order traversal of the binary tree:");
bt.inOrder();
console.log();