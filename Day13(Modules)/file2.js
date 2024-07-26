// Task 01
import {add} from './file1.js';
console.log(`Sum : ${add(5,7)}`);

// Task 02
import {myObj} from './file1.js'
myObj.PrintDetails();

// Task 03
import { greet1,greet2 } from './file1.js';
greet1();
greet2("Gourav");
// Task 04
import mutiply from './file1.js';
console.log(`Product : ${mutiply(5,7)}`);
// Task 05
import * as myObject from './module3.js'
console.log(`Value of pi : ${myObject.pi}`);
let {e}=myObject;
console.log(`Value of e : ${e}`);
console.log(`Circumference of a circle of radius 5 m : ${myObject.circleCircumference(5)}`);


// Task 06
import _ from 'lodash';
let array=[1,2,3,4,5,6,7,8];
let newarr=_.reverse(array.slice());
console.log(`Original array : ${array}`);
console.log(`Reversed array : ${newarr}`);

// Task 07
import axios from 'axios';

async function fetchData() {
  try {
    
    const response = await axios.get('https://api.github.com/users/HiteshChoudhary');
    console.log("UserName : ",response.data.name);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData();
