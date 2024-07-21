//Day 9: DOM Manipulation
//Tasks/Activities:
//Activity 1: Selecting and Manipulating Elements.
//Task 1: Select an HTML element by its ID and change its text content. 
let heading =document.getElementById('headingOfWebPage');
heading.innerText="Document Object Model";
//Task 2: Select an HTML element by its class and change its background color.
let headingDiv=document.querySelector(".heading");
headingDiv.style.backgroundColor="aqua";
headingDiv.style.width="25rem";

//Activity 2: Creating and Appending Elements
//Task 3: Create a new div element with some text content and append it to the body.
let newDiv=document.createElement('div');
newDiv.innerText="I'm New Div";
newDiv.style.backgroundColor="aquaMarine";
newDiv.style.color="red";
let body =document.querySelector('body');
let reference=body.children[1];
body.insertBefore(newDiv,reference);
//Task 4: Create a new li element and add it to an existing ul list.
let unOrderList=document.querySelector('#unOrderList');
let listItem=document.createElement("li");
listItem.innerText="item4(Created by using dom)";
unOrderList.appendChild(listItem);
//Activity 3: Removing Elements
//Task 5: Select an HTML element and remove it from the DOM.
let element=document.querySelector(".deletedElement");
body.removeChild(element);
//Task 6: Remove the last child of a specific HTML element.
let bodyElements = Array.from(body.children); 
let lastElement = bodyElements.reverse().find((el) => el.tagName !== 'SCRIPT'); 
if (lastElement) {
    body.removeChild(lastElement);
}
//Activity 4: Modifying Attributes and Classes
//Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag).
let myImageElement=document.querySelector(".imgClass");
myImageElement.src="ironman.jpg";
//Task 8: Add and remove a CSS class to/from an HTML element.
let myClassChangeDiv=document.querySelector('.classChange');
myClassChangeDiv.classList.remove(myClassChangeDiv.className);
myClassChangeDiv.classList.add("newClassChange");
//Activity 5: Event Handling
//Task 9: Add a click event listener to a button that changes the text content of a paragraph.
let button=document.getElementById("textChangeButton");
let divText=document.getElementById("divText");
let originalText=divText.innerText;

button.addEventListener('click',()=>{
    if(divText.innerText===originalText){
        divText.innerText="hello!! kaisa ho ap"
    }else{
        divText.innerHTML=originalText;
    }
})
//Task 10: Add a mouseover event listener to an element that changes its border color
let mydiv=document.querySelector(".borderColorChange");
mydiv.addEventListener('mouseover',()=>{
    mydiv.style.borderColor="green";
})
mydiv.addEventListener('mouseout',()=>{
    mydiv.style.borderColor="red";
})