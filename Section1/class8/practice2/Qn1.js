/*
Create a variable multiply and assign a function to this 
variable that multiplies two numbers. Call this method from 
the variable
*/

// let multiply = function(num1, num2){
//     return num1*num2;
// }
// console.log(multiply(4,5));

console.log("--------- Qno1 ----------");

let multiply = (num1, num2) => num1 * num2;
console.log(multiply(4, 5));

/*
Create a function runTwice that takes a function as a 
parameter and then runs that method twice.

*/

console.log("--------- Qno2 ----------");

let printMsg = () => console.log('Hello, This is my message.');

let runTwice = inputFunction =>{
    inputFunction();
    inputFunction();
};
runTwice(printMsg);


/*
Create a button which should grow double in size on 
clicking after 2 seconds. 
*/

// console.log("--------- Qno3 ----------");

// function dblSize(){
//     let btnElement = document.querySelector('.clickMeToGrow');
//     btnElement.classList.add('dblWhenClicked');
// }


/*
In the above exercise add the behavior using an event 
listener instead of onclick.
*/

function dblSize(){
    let btnElement = document.querySelector('.clickMeToGrow');
    btnElement.classList.add('dblWhenClicked');
}

console.log("--------- Qno4----------");

document.querySelector('.clickMeToGrow').addEventListener('click', () => {
    setTimeout(dblSize, 2000);
});
