console.log("------------ Anonymous Functions -------------");

// let sum = function(num1, num2){
//     return num1+num2;
// };

// let newSum = sum;

// console.log(sum(4,5));
// console.log(newSum(4,5));



let sum = function(num1, num2) {
    return num1 + num2;
};

let sumThreeNumbers = function(num1, num2, num3, sumTwoNumbers) {
    let sum1 = sumTwoNumbers(num1, num2);
    return sumTwoNumbers(sum1, num3);
};

console.log(sumThreeNumbers(4, 5, 6, sum));
console.log(typeof sumThreeNumbers);



console.log("--------------- Arrow Functions ---------------");

let mySum = (num1, num2) =>{
    return num1+num2;
};

console.log(mySum(5,6));

// let square = (num) =>{
//     return num*num;
// }
let square = num =>  num*num;
console.log(square(10));