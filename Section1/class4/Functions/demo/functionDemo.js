/*
function sayHello(){
    console.log('Hello, Everyone!');
}
sayHello();
*/

let age =21; 

function printAge(){
    console.log(`Your age is ${age}.`);
}
printAge();

age =22;
printAge();

age =23;
printAge();

//return statement demo 

function generateRandomMove(){
    let random = Math.random();
    let randomMove = random*3;

    return randomMove;
}
console.log(generateRandomMove());
// console.log(generateRandomMove());
// console.log(generateRandomMove());



// Parameters and return statements

function sum(a, b) {
    return a + b;
}

console.log('Sum is: ', sum(4, 5)); 


