/*
A Promise contains both the producing code and calls to the consuming code
When the producing code obtains the result, it should call 
one of the two callbacks.

Syntax:

let promise = new Promise(function(resolve, reject){
     //do something
});

*/

console.log("---- Promise in js ---- ");

let myPromise = new Promise(function(resolve, reject){
    let  x = 1;

    if(x == 1 ){
        resolve('OK Done.');
    }
    else{
        reject('Sorry fail!!!');
    }
});

myPromise.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
});