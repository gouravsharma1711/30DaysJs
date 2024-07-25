// Day 10: Event Handling
// Tasks/Activities:
// Activity 1: Basic Event Handling
// Task 1: Add a click event listener to a button that changes the text content of a paragraph.
let para=document.querySelector(".para");
OriginalText=para.innerText;
let button1=document.querySelector("#button1");
button1.addEventListener('click',()=>{
    button1.classList.add('clicked');
    setTimeout(()=>{
        button1.classList.remove('clicked');
    },100)
    if(para.innerText===OriginalText){
        para.innerText="I'm Changed now!!";
    }else{
        para.innerText=OriginalText;
    }
    
});
// Task 2: Add a double-click event listener to an image that toggles its visibility.
let HideButton=document.getElementById("hideButton");
const image=document.getElementById('ImageTag');
HideButton.addEventListener('click',()=>{

    if(image.style.display=="none"){
        image.style.display="block";
    }else{
        image.style.display="none";
    }
});
// Activity 2: Mouse Events
// Task 3: Add a mouseover event listener to an element that changes its background color. 
let myDiv=document.querySelector('.mouseEvents');
myDiv.addEventListener('mouseover',()=>{
    myDiv.style.backgroundColor ="purple";
})
//Task 4: Add a mouseout event listener bo element that resets its background color.
myDiv.addEventListener('mouseout',()=>{
    myDiv.style.backgroundColor ="blue";
})
// Activity 3: Keyboard Events
// Task 5: Add a keydown event listener to an input field that logs the key pressed to the console.
let inputField=document.querySelector("#Activity3");
let displayField=document.querySelector(".display");

inputField.addEventListener('keydown',()=>{
    displayField.innerText="Key down"
});
// Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.
inputField.addEventListener('keyup',()=>{
    displayField.innerText="Key up"
});

// Activity 4: Form Events
// Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.
document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('myForm');
    const result=document.querySelector(".result");
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission

        const formData = new FormData(form); // Create a FormData object from the form element

        // Convert FormData to an object for logging
        const formObject = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });
        let newwTextNode=document.createTextNode(`Name : ${formObject.name} , email : ${formObject.email}`)
        result.appendChild(newwTextNode)
        // Log the form data to the console
        console.log(formObject);
    });
});
// Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.
document.addEventListener('DOMContentLoaded', (event) => {
    const selectElement = document.getElementById('choices');
    const paragraph = document.querySelector('.selectedValue');

    selectElement.addEventListener('change', (event) => {
        // Get the selected value
        const selectedValue = event.target.value;

        // Display the selected value in the paragraph
        paragraph.textContent = `Selected value: ${selectedValue}`;
    });
});
// Activity 5: Event Delegation
// Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation.
let list=document.querySelector("#unorderListTag")
let ListButton=document.querySelector("#buttonUnorderList");
list.addEventListener('click',(e)=>{
    if(e.target.tagName==='LI'){
        console.log(e.target.innerText);
    }
})
// Task 10: Add an event listener to a parent element that listens for events from dynamically added child delements.


ListButton.addEventListener('click',()=>{
    let textNode=document.createTextNode(`Text content ${list.children.length+1}`);
    let li=document.createElement('li');
    li.appendChild(textNode);
    list.appendChild(li);
})