class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    displayFullName() {
        return this.firstName + " " + this.lastName;
    }
}

class GraduateStudent extends Student {
    constructor(firstName, lastName, degree) {
        super(firstName, lastName); 
        this.degree = degree;
    }

    displayFullName() {
        return super.displayFullName() + " (" + this.degree + ")";
    }
}

// Creating object of subclass
const grad1 = new GraduateStudent('Sita', 'Sharma', 'MSc');

// Displaying name and degree
console.log(grad1.displayFullName()); 
