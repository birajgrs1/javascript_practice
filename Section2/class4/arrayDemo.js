/*

An array is an object that can store multiple values at once.

Why Use Arrays?
Arrays allow us to organize related data by grouping them within a single variable.

### Declaration of an Array
There are basically two ways to declare an array i.e. Array Literal and Array letructor.

1. Creating an Array using Array Literal:
Creating an array using array literal involves using square brackets [] to define and initialize the array. 
This method is concise and widely preferred for its simplicity.

Syntax:
let arrayName = [value1, value2, ...];

2. Creating an Array using JavaScript new Keyword (Array letructor):
The “Array letructor” refers to a method of creating arrays by invoking the Array letructor function. 
This approach allows for dynamic initialization and can be used to create arrays with a specified length or elements.

Syntax:

let arrayName = new Array();

*/
// Note: Array can never be letant.
// let  students = new Array('Aabishek', 'Sudheer', 'Bikalpa', 'Anita', 'Gayatri', 'Roshan');
let students = ['Aabishek', 'Sudheer', 'Bikalpa', 'Anita', 'Gayatri', 'Roshan'];
// let rollNo = [1,2,3,4,5,6];

//Accessing array elements ---> Any element in the array can be accessed using the index number. 
// The index in the arrays starts with 0.

console.log(students[0]);
console.log(students[1]);
console.log(students[4]);

// length of students
console.log('No of Students: ', students.length);

// Adding elements ---> using push() method
// push() method add the element to the end of the array.

students.push('Deepesh');


console.log(students);

// Adding elemenys ---> using unshift() method
// unshift() method add the element to the starting of the array.



students.unshift('Arjun');
console.log(students);

students.unshift('Sanju');
console.log(students);

students.unshift('Binaya');
console.log(students);




// Modifying  array elements

students[6] = 'Ramesh';
console.log(students);

// Removing elements from an array ---> using pop() method

// pop() method removes an element from the last index of the array.
students.pop()
console.log(students);

// shift() method removes the element from the first index of the array.

students.shift()

console.log(students);

// splice() method removes or replaces the element from the array.
students.splice(2,4);

console.log(students);

// Array Concatenation 

let students2 = ['Rahul', 'Shandya', 'Jeevan'];

let concatStudents = students.concat(students2);

console.log(concatStudents);

//Sorting
console.log(concatStudents.sort());

//sorting---> in descending
console.log(concatStudents.reverse());


//  Iterations --> for and forEach 

let numbers = [10, 14, 16, 20, 21, 25, 30, 45, 55, 60, 65, 70];


// for(let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }


// Using forEach loop
numbers.forEach(function(values){
    console.log(values);
});

/*
// Map in array:

The map() method in JavaScript creates a new array by applying a function
to each element of the original array.

map() skips empty elements, does not modify the original array.

Syntax:  map((element, index, array) => { .... })

Parameters:
element: It is a required parameter and it holds the value of the current element.
index: It is an optional parameter and it holds the index of the current element.
arr: It is an optional parameter and it holds the array.


Return Value:
It returns a new array and elements of arrays are the result of the callback function. 

*/

const newNumbers = numbers.map(function(value){
    return value*2;
});
console.log('Mapped Values: <br>', newNumbers);
