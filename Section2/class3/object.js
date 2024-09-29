/*

What are JavaScript Objects?
JavaScript objects are collections of properties, where each property is defined as a key-value pair. They are used to model 
real-world entities and complex data structures.

Syntax:
Objects can be created using either the object literal syntax {} or the Object() constructor.

objectName.methodName()
*/

const Student = {
    firstName : "Ram",
    lastName : "Dahal",
    dob : '2005-03-15',
    class : 12,

    fullName: function(){
        return this.firstName+" "+this.lastName;
    }
}
console.log(Student);
// console.log(Student.firstName);
// console.log(Student.lastName);
// console.log(Student.firstName, Student.lastName);
console.log("Date of Birth: ", Student.dob);
console.log("Full name: ", Student.fullName());