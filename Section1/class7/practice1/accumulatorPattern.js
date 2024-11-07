console.log("------- Accumulator Pattern in js -------");

let nums = [1,3,4,5,6,7,8,9,11,12,14,15,17,21];
let sum = 0;

for(let i = 0; i<nums.length; i++){
    // sum = sum+nums[i];
    sum += nums[i];
}
console.log('Sum of the array: '+sum);

//squares
let squares = [];
for(let i =0; i<nums.length;i++){
    // squares[i] = nums[i]*nums[i];
    squares.push(nums[i]*nums[i]);
}
console.log(squares);


let words = ["Hello", "world", "from", "JavaScript."];
let sentence = ""; 

for (let i = 0; i < words.length; i++) {
    sentence += words[i] + " "; // Concatenate 
}

console.log(sentence.trim()); 







/*
A pattern to accumulate values through looping.
2. Common Scenarios:
• Sum all the numbers in an array.
• Create a modified copy of an array.

*/