// Task 01
export function add(a, b) {
    return a + b;
}
// Task 02
export const myObj={
    name:"Gourav",
    Couse:"B.Tech",
    Branch:"Computer Science and Engineering",
    PrintDetails:function(){
        console.log(`Name : ${this.name} , Couse : ${this.Couse} and branch : ${this.Branch}`);
    }
}
// Task 03
export const greet1=()=>{
    console.log("Hello User :) ");
}
export const  greet2=(name)=>{
    console.log(`Hello !! ${name} :) `);
}
// Task 04
export default function mutiply(num1,num2){
    return num1*num2
};


