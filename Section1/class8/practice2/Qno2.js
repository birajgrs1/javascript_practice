/*
Create a function that sums an array of numbers. Do this 
using a for-each loop.
*/

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let sum = 0;

arr.forEach((num) => (sum += num));
console.log(sum);

/*
Create a function that takes an array of numbers and 
return their squares using map function.
*/

let squares = arr.map(num => num*num);
console.log(squares);
