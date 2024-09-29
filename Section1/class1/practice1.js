/*
1. At a restaurant you ate: 1 Dal ₹ 100, 2 Roti ₹10 
each, 1 Ice Cream ₹30, calculate and display the 
final bill amount.
*/

const dalPrice = 100;
const rotiPrice = 10;
const iceCreamPrice = 30;
const totalBill = dalPrice + (2 * rotiPrice) + iceCreamPrice;

console.log("Total Bill: ₹", totalBill); 

/*
2. Calculate 18% GST on iPhone15 ₹80000 and 2 
Air pods Pro ₹24990 each.
*/

const iphonePrice = 80000;
const airPodsProPrice = 24990;
const totalCost = iphonePrice + (2 * airPodsProPrice);
const gstAmount = totalCost * 18 / 100;

console.log(`Your GST amount is: ₹ ${gstAmount}`); 

/*
3. Create strings using all 3 methods.
*/

let str1= 'Hello, Everyone!';
let str2= "Hello, Everyone!";
let str3= `Hello, Everyone!`;

console.log(str1);
console.log(str2);
console.log(str3);

// Run: node practice1.js
