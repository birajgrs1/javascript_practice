// Create a method to return larger of the two numbers.


function findLargerNumber(num1, num2){

    if(num1 > num2){
        return num1;
    }
    else{
        return num2;
    }
}
console.log('Larger number is', findLargerNumber(4,5));