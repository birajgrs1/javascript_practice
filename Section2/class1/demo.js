// Js Intro

console.log("Hello, World!");
console.log("Hello Biraj", "Hii");

console.log("Addition: ", 2 + 3);
console.log(10 - 6);
console.log(10 * 3);

// Variables in Js
/*
Variable is just like a container where we store the datas.

denoted ::: var, let, const, nothing
*/

// nothing, and var
x = 10;
console.log(x);
console.log(typeof x);
var nam = "Ram"; // nam ---> Identifier
console.log("Hello, ", nam);

var x = 20; // var --- redeclaration possible
console.log(x);

//let
let a = 50;
let b = 40;
let c = a+b;
console.log(c);

// let a = 100;  //redeclaration  impossible



//const
const pii = 3.1416;
let radius = 8.0;

let areaOfCircle = pii * radius * radius;

console.log("\n Area of Circle: ", areaOfCircle);

/*
Datatypes:
Data types in JavaScript define the data type that a variable can store. JavaScript includes primitive and non-primitive data types. 
The primitive data types in JavaScript include string, number, boolean, undefined, null, and symbol. 
The non-primitive data type includes the object. A variable of primitive data type can contain only a single value.

Primitive Data Types:::

These are the lowest level of data value in the JavaScript programming language. They define immutable values – which can’t be changed.

Non-Primitive Data Type
Object:
An object data type stores multiple values or data collection regarding properties and methods. It contains key-value pairs in its address.
The properties of the object are written as key: value pairs. Each pair is separated by commas, enclosed in curly braces {}.
The key must be a string, and the value can be of any data type.
*/


//  primitive data types

// String::  A string data type is a group of characters or textual content enclosed by single quotes (‘ ‘) or double-quotes (” “), or tick signs (` `).


var str= "Hello, World!";
console.log(str);

let myName = 'Biraj';
console.log("Hii, i am", myName);

// number:  A number data type is a numeric value. It can be an integer (positive or negative), floating-point, or exponential.
var num1=47;  // positive integer value
var num2=629.5;  // floating point
var num3=-5; // number with negative value
console.log(num1);
console.log(num2);
console.log(num3);

// number can also includes infinity.

var num4 = 10;
var num5 = 0;
var divide = 10/0;
console.log(divide);

// Boolean :  Boolean is a logical data type used to compare two variables or check a condition. It has only two values, namely, true and false.


// isMarried = false;
// console.log("Hello Sudip, Are you married?", isMarried);

if(num1 == num2){
    console.log("Both are equal.");
}
else{
    console.log("Not-equal.");
}


//  non primitive 
// object

var Student = {
    firstName: 'Ram',
    lastName: 'Dahal', 
    grade: 10,
    age: 14
};

console.log("Full name:", Student.firstName, Student.lastName);
console.log(Student.grade);













/*

Run command:
node  file_name.js

e.g: node demo.js

*/
