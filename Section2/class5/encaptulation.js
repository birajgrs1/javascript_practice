class Student {
    #firstName;  // Private property
    #lastName;

    constructor(firstName, lastName) {
        this.#firstName = firstName;
        this.#lastName = lastName;
    }

    get fullName() {
        return this.#firstName + " " + this.#lastName;
    }

    set lastName(name) {
        this.#lastName = name;
    }
}

// Creating object
const s1 = new Student('Ram', 'Dahal');

// Accessing fullName through getter
console.log(s1.fullName);

// Using setter to change last name
s1.lastName = 'Thapa';
console.log(s1.fullName); 
