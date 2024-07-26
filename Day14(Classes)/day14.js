// Day 14: Classes
// Tasks/Activities:
// Activity 1: Class Definition
// Task 1: Define a class Person with properties name and age, and a method to return a greeting message. Create an instance of the class and log the greeting message.
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    greeting(){
        console.log(`Hello !! ${this.name} :) `);
    }

}
let instance1 =new Person("Gourav Sharma",20);
// instance1.greeting();
// Task 2: Add a method to the Person class that updates the age property and logs the updated age.
Person.prototype.updateAge=function(age){
    this.age=age;
    console.log('Age is Updated');
}
// instance1.updateAge(28);
// console.log(instance1);
// Activity 2: Class Inheritance
// Task 3: Define a class student that extends the Person class. Add a property studentId and a method to return the student ID. Create an instance of the Student class and log the student ID.
class Student extends Person{
    constructor(name,age,studentID){
        super(name,age);
        this.studentID=studentID;
        if (typeof Student.incrementStudentCount === 'function') {
            Student.incrementStudentCount();
        }
    }
    returnStudentId(){
        return this.studentID;
    }
}
const s1=new Student("Ayushman",20,1784);
// console.log(`Student: ${s1.name}, ID: ${s1.returnStudentId()}`);
//  Task 4: Override the greeting method in the Student class to include the student ID in the message. Log the overridden greeting message.
Student.prototype.greeting=function(){
    console.log(`good morning :) ${this.name} your id is ${this.studentID}`);
}
// s1.greeting();

// Activity 3: Static Methods and Properties
// Task 5: Add a static method to the Person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message. 
Person.returnGenericGreeting=function(){
    return "Hello! I hope you're having a fantastic day. Whether you're tackling new challenges or just taking it easy, I wish you all the best. If you need assistance let me know :)"
}
// console.log(Person.returnGenericGreeting());
// Task 6: Add a static property to the Student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.
Student.studentCount=0;
Student.incrementStudentCount=function(){
    Student.studentCount++;
}
let s2=new Student('shruti',22,5468);
let s3=new Student('Harsh',92,5568);
console.log(`Student Count : ${Student.studentCount}`);
// Activity 4: Getters and Setters
// Task 7: Add a getter method to the Person class to return the full name (assume a firstName and lastName property). Create an instance and log the full name using the getter. 
class person{
    constructor(firstName,LastName,age){
        this.firstName=firstName;
        this.LastName=LastName;
        this.age=age;
    }
    get firstName(){
        return this._firstName;
    }
    set firstName(firstName){
        this._firstName=firstName;
    }
    get LastName(){
        return this._LastName;
    }
    set LastName(LastName){
        this._LastName=LastName;
    }
    get age(){
        return this._age;
    }
    set age(age){
        this._age=age;
    }
    print(){
        console.log(this);
    }
}
let p1=new person('Gourav',"Sharma",20);
console.log(`Name : ${p1.firstName} ${p1.LastName}`);
// Task 8: Add a setter method to the Person class to update the name properties (FirstName and LastName). Update the name using the setter and log the updated full name.
p1.LastName="Kumar";
p1.firstName="Ayushman"
console.log(`Name : ${p1.firstName} ${p1.LastName}`);
// Activity 5: Private Fields (Optional)
// Task 9: Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.
class Account{
    #balance;
    constructor(amount){
        if (amount < 0) {
            throw new Error('Initial amount cannot be negative');
        }
        this.#balance=amount;
    }
    deposit(amount){
        if (amount <= 0) {
            console.log('Deposit amount must be positive');
            return;
        }
        this.#balance=this.#balance+amount;
    }
    withdrawMoney(amount){
        if (amount <= 0) {
            console.log('Withdrawal amount must be positive');
            return;
        }else if (amount > this.#balance) {
            console.log('Insufficient funds');
            return;
        }
        this.#balance=this.#balance-amount;
    }
    get balance(){
        return this.#balance;
    }
}
//  Task 10: Create an instance of the Account class and test the deposit and withdraw methods, logging the balance after each operation.
let account1=new Account(10000);
console.log(account1.balance);
account1.deposit(5000);
account1.withdrawMoney(1000)
console.log(account1.balance);