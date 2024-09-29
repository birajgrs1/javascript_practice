
/*
Arrow Function:
Arrow Function is one of the most used and efficient methods to create a function in JavaScript because 
of its comparatively easy implementation. It is a simplified as well as a more compact version of a regular
 or normal function expression or syntax.

Syntax:

let function_name = (argument1, argument2 ,..) => expression
*/




// Arrow Function With No Argument
const sayHello = () => "Hello, Everyone!";
console.log(sayHello());


//arrow function with argument
let addNums = (a,b) => a+b;

let res = addNums(4,5);

console.log("Sum = ", res);


//Using 'this' keyword in arrow function

function Person(){
    this.name = 'Ram Dahal',
    this.class = 11
    this.age = 15,
    this.sayAge = function(){
        console.log(this.age);
    }
    let innerFunc = () =>{
        console.log(this.age);
    }
    innerFunc();
}

const x = new Person();
x.sayAge();
