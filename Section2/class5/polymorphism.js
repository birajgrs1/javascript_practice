class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    displayDetails() {
        return "Student: " + this.firstName + " " + this.lastName;
    }
}

class Teacher {
    constructor(firstName, lastName, subject) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.subject = subject;
    }

    displayDetails() {
        return "Teacher: " + this.firstName + " " + this.lastName + " (" + this.subject + ")";
    }
}


const members = [
    new Student('Ram', 'Dahal'),
    new Teacher('Sita', 'Dulal', 'Math')
];

members.forEach(member => {
    console.log(member.displayDetails());
});
