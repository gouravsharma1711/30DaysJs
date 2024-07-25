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
// Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.
// Activity 4: Fetching Data from an API

// Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises. 
//Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.
// Activity 5: Concurrent Promises
// Task 8: Use Pronise.all to wait for multiple promises to resolve and then log all their values.
// Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises