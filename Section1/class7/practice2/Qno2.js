/*
Create a method to return an element at a particular position 
in the array.
*/

console.log("----- Qno2 -----");

function getElement(numArr, pos) {
    return (pos >= 1 && pos <= numArr.length) ? numArr[pos - 1] : "Position out of bounds";
}

let numArr = [1, 2, 3, 4, 5, 6, 7];
console.log(getElement(numArr, 1));
console.log(getElement(numArr, 5));
console.log(getElement(numArr, 8));


/*
Create an array copy using slice method.
*/
console.log("----- Qno3 -----");

function arrCopy(numArr){
    console.log(numArr.slice(0,5));
}

console.log(arrCopy(numArr));