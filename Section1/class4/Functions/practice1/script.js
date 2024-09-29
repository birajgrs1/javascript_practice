
// Create a method to check if a number is odd or even
let num = prompt(parseInt("Enter any positive integer: "));
function checkOddOrEven(){
    if(num%2 == 0){
        console.log(`${num} is Even.`);
    }
    else{
        console.log(`${num} is Odd.`);
    }
}
checkOddOrEven();