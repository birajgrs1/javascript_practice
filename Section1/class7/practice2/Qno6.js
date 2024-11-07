// Create a for loop that prints number 1 to 10 in reverse order.
console.log("----- Qno6 -----");
for(let i = 10; i > 0; i--){
    console.log(i);
}

//Using continue only print positive numbers from the given 
// array [1,-6,5,7,-98]

console.log("----- Qno7 -----");

let nums = [1,-6,5,7,-98];
for(let i = 0; i<nums.length; i++){
    if((nums[i]<0)) continue;
    console.log(nums[i]);
}


//Using accumulator pattern concatenate all the strings in the 
// given array  ['I', 'am', 'a', 'Javascript', 'developer']

console.log("----- Qno8 -----");
let stringArrays =  ['I', 'am', 'a', 'Javascript', 'developer.'];
let finalString = '';
for(let i =0; i< stringArrays.length; i++){
    finalString += stringArrays[i]+' ';
}
console.log(finalString)