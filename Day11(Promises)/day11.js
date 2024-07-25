// Day 11: Promises and Async/Await
// Tasks/Activities:
// Activity 1: Understanding Promises
// Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
let promise1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(`Promise 1 resolved `)
    },2000)
});
promise1.then((result)=>{
        console.log(result);
});
// Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using catch().
let promise2=new Promise((resolve,reject)=>{
    let error=false;
    setTimeout(()=>{
        if(!error){
            resolve(`Promise 2 Resolved`)
        }else{
            reject(`Something went wrong`)
        }
    },2000);
});
promise2
.then((result)=>{
    console.log(result);
})
.catch((error)=>{
    console.log(error);
})
// Activity 2: Chaining Promises.
// Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.
function fetchUserData(){
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            console.log('Fetched user data');
            resolve({userId:71,name:"Gourav Sharma"});
        },2000)

    });
}
function fetchUserPosts(UserId){
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
             console.log(`Fetched posts for user ID ${UserId}`);
             resolve({postId:81,content:"Hello World"});
        },2000)

    });
}
function fetchPostComments(postId){
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
             console.log(`Fetched comments for post ID ${postId}`);
             resolve({ commentId: 1, content: 'Nice post!' });
        },2000)

    });
}
fetchUserData()
.then((result)=>{
    return fetchUserPosts(result.userId);
})
.then((postData)=>{
    return fetchPostComments(postData.postId);
})
.then((post)=>{
    console.log(`Comment Id : ${post.commentId} and the content inside it ${post.content}`);
    console.log('All the data fetched successfully');
})
.catch((error)=>{
    console.log('Error : ',error);
})
.finally(()=>{
    console.log(`Task 3 is done`);
})
// Activity 3: Using Async/Awatt
// Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.
let task4Promise=new Promise((resolve,reject)=>{
    let error=false;
    setTimeout(()=>{
        if(!error){
            console.log("task4 data fetched");
        resolve({UserName:"Gourav Sharma",userId:"gourav1177"});
        }else{
            reject('Error : promise rejected')
        }
    },2000);
})
async function task4PromiseConsume(){
    try{
        let response=await task4Promise;
        console.log(`User name : ${response.UserName} and userId : ${response.userId}`);
        console.log('Task  4 done');
    }catch(error){
        console.log('error : ',error);
    }
}
task4PromiseConsume();
// Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.
let task5Promise=new Promise((resolve,reject)=>{
    let error=true;
    setTimeout(()=>{
        if(!error){
            console.log('Task 4 data fetched ');
            resolve({Name:'Gourav', Location:"Delhi"});
        }else{
            reject(new Error('Promise rejected'));
        }
    },2000)
})
async function HandleRejectedPromise(){
    try{
    let response =await task5Promise;
    console.log(`UserName :${response.Name} and location : ${response.Location}`);
    console.log('Task 5 done');
    }catch(Error){
        console.log('Error : ',Error);
    }
}
HandleRejectedPromise();
// Activity 4: Fetching Data from an API

// Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises. 
fetch('https://api.github.com/users/HiteshChoudhary')
.then((response)=>{
    if(!response.ok){
        throw new Error('Network issues');
    }
    return response.json();
})
.then((dataInJSON)=>{
    return dataInJSON.name
})
.then((userName)=>{
    console.log(`Name : ${userName}`);
})
.catch((error)=>{
    console.log('Error :',error);
})
.finally(()=>{
    console.log("Task 6 done");
})
//Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.
async function Task7(){
    try{
        let response =await fetch('https://api.github.com/users/HiteshChoudhary');
        if(!response.ok){
            throw new Error('Network response was not ok');
        }
        let json=await response.json();
        console.log(` Name : ${json.name ||'N/A'} and the location of user is ${json.location ||'N/A'}`);
    }catch(error){
    console.log('Error : ',error.message);
    }
}
Task7();
// Activity 5: Concurrent Promises
// Task 8: Use Pronise.all to wait for multiple promises to resolve and then log all their values.
let user1=fetch('https://api.github.com/users/HiteshChoudhary');
let user2=fetch('https://api.github.com/users/gouravsharma1711');
Promise.all([user1,user2])
.then(([response1,response2])=>{
    return Promise.all([response1.json(),response2.json()]);
})
.then(([R1,R2])=>{
    console.log(`user 1 => Name : ${R1.name} and the location : ${R1.location}`);
    console.log(`user 2 => Name : ${R2.name} and the location : ${R2.location}`);
})
.catch((error)=>{
   console.log(error);
})
// Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises
// Create three promises with different timeouts
const p1 = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Promise 1 resolved');
    }, 3000); // Resolves after 3 seconds
  });
  
  const p2 = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Promise 2 resolved');
    }, 1000); // Resolves after 1 second
  });
  
  const p3 = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Promise 3 resolved');
    }, 2000); // Resolves after 2 seconds
  });
  

  Promise.race([p1, p2, p3])
    .then((result) => {
      console.log('First resolved promise:', result);
    })
    .catch((error) => {
      console.log('Error:', error);
    });
  