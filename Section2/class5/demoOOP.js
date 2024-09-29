
class Student{

    //Constructor creating --- Automatically called when object is created

    constructor(firstName, lastName){
        // console.log("Object is created.");
        this.firstName = firstName
        this.lastName = lastName
        
    }
    displayFullName(){
        return this.firstName+" "+this.lastName;
    }
}

//Creating object 

const s1 = new Student('Ram', 'Dahal');
const s2 = new Student('Aarav', 'Sharma');
// const s3 = new Student();

// s1.displayFullName();
// s2.displayFullName();

const name1 = s1.displayFullName();
const name2 = s2.displayFullName();
console.log(name1);
console.log(name2);

/*
Object-Oriented Programming (OOP)
OOP treats data as a critical element and ties it securely to functions operating on it, preventing accidental
modification. It focuses on objects, which contain data and functions.

Objects
Objects represent entities in a program (e.g., place, person) and are the basic runtime bodies in OOP.
They contain both data and the functions to manipulate that data.

Classes
Classes are templates for creating objects. They bundle data and functions into a user-defined data type,
allowing for multiple objects of the same class.

Encapsulation
Encapsulation is the process of bundling data and functions into a single unit, typically a class.
It protects data from external access and allows controlled interaction through functions.

Inheritance
Inheritance allows one class to acquire the properties and methods of another class, enabling reusability 
and hierarchical classification.

Polymorphism
Polymorphism means having different and many forms. We can overwrite a method inherited from a parent class.

Abstraction:

Abstraction means hiding certain details that don't matter to the user and only showing essential features or 
functions.
For example, take a cell phone. 
We don't show details like verifyTemperature(), verifyVolt(), frontCamOn(), frontCamOff() and so on. 
Instead we provide essential features which matter to user like camera(), volumeBtn(), and others.

*/