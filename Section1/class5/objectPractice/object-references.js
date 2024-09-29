let a = 5;
let b = a; 

console.log(`a= ${a}, b= ${b}`);

a = 8;
console.log(`a= ${a}, b= ${b}`);




let x = {num: 5};   //Create obj
let y = x;

console.log(`x= ${x.num}, y= ${y.num}`);
x.num = 10;
console.log(`x= ${x.num}, y= ${y.num}`);

let p = {pop: 'hello'};
let q = {pop: 'hello'};
console.log( p == q );





/*

Object References:

1. Objects work based on references, not actual data.
2. Copying an object copies the reference, not the actual object.
3. When comparing with ==, you're comparing references, not content.
4. Changes to one reference affects all copies.

*/