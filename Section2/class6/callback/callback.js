/*
--> A callback is a function passed as an argument to another function
--> This technique allows a function to call another function
--> A callback function can run after another function has finished

Syntax:

function myFunction(param1, param2, callback) {
    // Do some work...
    // Call the callback function
    callback(result);
}


E.g:

function sayHello(callback) {
    console.log("Hello !");
    if (callback) {
        callback();
    }
}

function sayHii() {
    console.log("Hii...");
}

sayHello(sayHii);

*/

function sayHello(callback) {
    console.log("Hello !");
    setTimeout(() => {
        if (callback) {
            callback();
        }
    }, 2000); 
}

function sayHii() {
    console.log("Hii...");
}


sayHello(sayHii);
