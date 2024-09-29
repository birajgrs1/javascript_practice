
/*
JavaScript operators are symbols that are used to execute operations on operands. Operands are the variables they 
operate on. 

For example: 
If we add 3 and 7, we get 10 as a result.
*/

var  num1 = 150;
var num2 = 25;

var addition = num1+num2;
var subtraction = num1-num2;
var multiplication = num1*num2;
var division = num1/num2;
var modulo =num1%num2;



console.log("Addition :", addition);
console.log("Subtraction: ", subtraction);
console.log("Multiply: ", multiplication);
console.log("Division: ", division);
console.log("Modulo: ", modulo);



// Increment and decrements
var incr_1= ++num1;
console.log("Value is, ", incr_1);

var decr_1= --num1;
console.log("Value is, ", decr_1);


// run:::   node ArithmeticOperator.js