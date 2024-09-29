/*

A function in JavaScript is a reusable block of code that performs a specific task.
A JavaScript function runs when it is “called” by some part of your code.

Syntax: 
function functionName(Parameter1, Parameter2, ...)
{
    // Function body
}

functionName(param(s));   //calling function

Why Functions?
---> Functions can be used multiple times, reducing redundancy.
---> Break down complex problems into manageable pieces.
---> Manage complexity by hiding implementation details.
---> Can call themselves to solve problems recursively.

E.g: 
function sayHello(){
    console.log("Hello, Everyone!");
}
//Calling function
sayHello();

function calculation(a,b){
    console.log(a+b);
}
calculation("Sum= ",(4,5));
*/

function displayTable(num) {
  //usung function parameter num
  for (let i = 1; i <= 10; i++) {
    //    console.log(5,"x",i, "= ",5*i);
    console.log(num, "x", i, "= ", num * i);
  }
}
displayTable(10);
console.log();
displayTable(17);

/*
Function Expression:::
It is similar to a function declaration without the function name. 
Function expressions can be stored in a variable assignment. 
Syntax: 

let functionName = function(param(s)){
// statements
}
*/

const square = function(num){
    return num*num;    //using return statement
}
const x = square(5);
console.log("Square = ", x);
