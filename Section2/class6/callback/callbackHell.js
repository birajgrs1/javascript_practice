/*
In JavaScript, a callback is a function passed to another function to execute after an asynchronous operation completes.
Callback hell refers to the problematic situation where multiple nested callbacks create a “pyramid of doom,” 
making the code difficult to read, debug, and maintain.
*/

function sayhello(callback){
    console.log('Hello');
    callback();
}

function sayHi(callback){
    console.log('Hii');
    callback();
}

function sayBye(callback){
    console.log('Bye...');
    callback();
}

//Callback hell 
sayhello(()=>{
    sayHi(()=>{
        sayBye(()=>{
            console.log('Nested function....');
        })
    })
})