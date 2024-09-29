class Person {
    constructor(firstName, lastName) {
        if (this.constructor === Person) {
            throw new Error("Cannot instantiate abstract class Person.");
        }
        this.firstName = firstName;
        this.lastName = lastName;
    }

    displayFullName() {
        return this.firstName + " " + this.lastName;
    }
}

class Employee extends Person {
    constructor(firstName, lastName, jobTitle) {
        super(firstName, lastName);
        this.jobTitle = jobTitle;
    }

    displayEmployeeDetails() {
        return this.displayFullName() + " - " + this.jobTitle;
    }
}

const emp1 = new Employee('Anita', 'Katwal', 'HR manager');
console.log(emp1.displayEmployeeDetails());  