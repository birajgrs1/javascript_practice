/*
Create a while loop that exits after counting 5 prime 
numbers.
*/
console.log("----- Qno4 -----");

function isPrime(num){
    for(let i = 2; i<num;i++){
        if (num%i === 0) {
            return false;
        }
    }
    return true;
}
// console.log(isPrime(2));
// console.log(isPrime(4));
// console.log(isPrime(5));
// console.log(isPrime(7));
// console.log(isPrime(8));
// console.log(isPrime(10));
// console.log(isPrime(11));
// console.log(isPrime(15));
// console.log(isPrime(17));
// console.log(isPrime(19));
// console.log(isPrime(20));
// console.log(isPrime(21));

// Modify the above loop to finish using break.
console.log("----- Qno5 -----");

let num =2;
let count = 0;
while(count<5){
    if(isPrime(num)){
        console.log(num);
        count++;  
        if(count >=5){
            break;
        }
    }
    num++;
}



