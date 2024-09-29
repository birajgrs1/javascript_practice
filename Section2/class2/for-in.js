/*
JavaScript for-in Loop:::
JS for-in loop is used to iterate over the properties of an object. The for-in loop iterates only over those keys
 of an object which have their enumerable property set to “true”.

 Syntax:
 for(let variable_name in object_name) {
    // Statement
}

*/

// let myObj = { x: 1, y: 2, z: 3 };

// for (let key in myObj) {
//     console.log(key, myObj[key]);
// }



// let nums = [10,20,30,40,50];   //array nums 

// for(let values in nums){
//     console.log(nums[values]);
// }

const Students = {
    stuName : "Ram", 
    class : 12, 
    enrolledIn : "Science"

}

for (const key in Students) {
    console.log(`${key} === ${Students[key]}`);
}


