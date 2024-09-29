/*
let a= 5;
let b = 4;
let c= 5+4;
document.write("Sum is, "+c);
console.log("Sum: ",c);
alert("Hello");
*/

//  User Input

// Prompt user for input
let yourName = prompt("Enter your name:"); // String
let age = parseInt(prompt("Enter your age:")); // Integer
let height = parseFloat(prompt("Enter your height in meters:")); // Float
let weight = parseFloat(prompt("Enter your weight in kilograms:")); // Float


console.log("Name:", yourName);
console.log("Age:", age);
console.log("Height:", height);
console.log("Weight:", weight);

document.write("<h2>User Details</h2>");
document.write("<p>Name: " + yourName + "</p>");
document.write("<p>Age: " + age + "</p>");
document.write("<p>Height: " + height + " meters</p>");
document.write("<p>Weight: " + weight + " kilograms</p>");