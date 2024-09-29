console.log(typeof(5<8));

//Using comparator operators

console.log(5==8);
console.log(5>8);
console.log(5>=8);

console.log(5 == '5.0');
console.log(5 === '5.0');
console.log(5!=5);


let isTrue = true;
let isFalse = false;

if (isTrue) {
    console.log("This is true!");
} else {
    console.log("This is false!");
}


// Other boolean functions

console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean("hello"));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));

//if- else 

console.log("Checking if you are voter.")
if(15>18){
    console.log('You can vote.');
}
else{
    console.log('You cannot vote.');
}