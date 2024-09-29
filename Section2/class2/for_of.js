// JavaScript for-of Loop:::
// JS for-of loop is used to iterate the iterable objects for example – array, object, set and map. 
// It directly iterate the value of the given iterable object and has more concise syntax than for loop.

// Syntax:
// for(let variable_name of  object_name) {
//     // Statement
// }

// let arr = [1, 2, 3, 4, 5];
// for (let value of arr) {
//     console.log(value);
// }


const students = ['Ram', 'Shyam', 'Hari'];

for (const element of students) {
    console.log(element);
}