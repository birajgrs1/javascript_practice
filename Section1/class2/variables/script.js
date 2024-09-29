
/*
let helloMessage = "Hello, World!";
// document.write(helloMessage);
console.log(helloMessage);


// Updating values 

// let noOfStudents = 4;
// noOfStudents = noOfStudents+1;

// console.log(noOfStudents);


// let a = 10 ; 
// // a=a+1;
// a+=1;
// console.log("Value of a: ",a);


// let x = 5;
// console.log(x);
// x = x+5;
// console.log(x);



*/

const pi = 3.14159265359;
let radius = 4;
//pi = 2;
console.log(pi * radius * radius);

// 1. Save your name in a variable inside script tag.

const myName = "Biraj Ghorasaine";

// 2. Display name from the variable on the page
document.write(`My name is ${myName}.`);


//3. Calculate bag value

let bagPrice = (15599 - (10/100 * 15599)) - 272;
let jeansPrice = (2499 - (41/100*2499)) - 29;
let bagValue = Math.round((jeansPrice + bagPrice + 25 + 20) * 118 / 100);
let bagSummary = `Your final Bag amount is रु.${bagValue}`;
console.log(bagSummary);


