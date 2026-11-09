// Exercise 1: Object Basics

// Creating an object
const person = {
    firstName: "Brian",
    lastName: "Kamau",
    age: 30,
    isStudent: false,
    hobbies: ["reading", "coding", "football"],
    address: {
        city: "Nairobi",
        country: "Kenya"
    }
};

// Accessing properties
console.log(person.firstName);      // Dot notation
console.log(person["lastName"]);    // Bracket notation
console.log(person.address.city);   // Nested
console.log(person.hobbies[1]);     // An array inside an object

// Modifying properties
person.age = 31;
person.phone = "0712 345 678";      // Add new property
delete person.isStudent;            // Remove property

console.log(person);

// Exercise 2: Object Methods
const calculator = {
    add: function(a, b) {
        return a + b;
    },
    // Shorthand method syntax
    subtract(a, b) {
        return a - b;
    },
    // Arrow function
    multiply: (a, b) => a * b
};

console.log(calculator.add(5, 3));
console.log(calculator.subtract(5, 3));
console.log(calculator.multiply(5, 3));

// Exercise 3: Object Iteration
const scores = {
    math: 95,
    english: 88,
    science: 92
};

// Get keys
console.log(Object.keys(scores));

// Get values
console.log(Object.values(scores));

// Get entries
console.log(Object.entries(scores));

// Loop through
for (const [subject, score] of Object.entries(scores)) {
    console.log(`${subject}: ${score}`);
}