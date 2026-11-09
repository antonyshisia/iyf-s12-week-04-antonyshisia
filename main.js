// Variable declarations — use YOUR details
let name = "Antony";
let age = 43;
const birthYear = 1983;

// typeof operator
console.log(typeof name);    // string
console.log(typeof age);     // number
console.log(typeof true);    // boolean

// let vs const
let score = 100;
score = 150;  // Works!

const PI = 3.14159;
// PI = 3;  // Error! const cannot be reassigned
let myName = "Antony";
console.log("My name is: " + myName);

let myAge = 43;
console.log("My age is: " + myAge);

let isStudent = true;
console.log("Is student: " + isStudent);

let favoriteColors = ["blue", "green", "red"];
console.log("Favorite colors: " + favoriteColors);

let today = new Date();
console.log("Today's date is: " + today);

// ===== Data Types & Operators =====
// Exercise 1 : Number Operations
let a = 10;
let b= 3;

console.log("Addition: " + (a + b));
console.log("Subtraction: " + (a - b));
console.log("Multiplication: " + (a * b));
console.log("Division: " + (a / b));
console.log("Modulus: " + (a % b));
console.log("Exponentiation: " + (a ** b));

let count = 0;
count++;
count--;

//Exercise 2 : String Operations
let firstName = "Antony";
let lastName = "Shisia";

let fullName = firstName + " " + lastName;

let greeting = `Hello, ${firstName}!`;
let message = `${firstName} has ${firstName.length} letters in their name.`;

console.log(greeting);
console.log(message);

console.log("Full name in uppercase: " + fullName.toUpperCase());
console.log("Full name in lowercase: " + fullName.toLowerCase());
console.log(firstName.charAt(0));  // A
console.log(fullName.includes("Shisia"));  // true

// Exercise 3 : Comparison & logical operators
console.log(5 > 3);  // true
console.log(5 < 3);  // false
console.log(5 === 5);  // true (strict equality)
console.log(5 == "5");   // true (loose equality - avoid!)
console.log(5 !== 3);  // true

console.log(true && true);  // AND
console.log(true || false); // OR
console.log(!true);         // NOT

// Challenge
let ageInDays = age * 365;
let ageInHours = ageInDays * 24;
let yearTurn100 = birthYear + 100;

console.log(`My age in days (approximately): ${ageInDays}`);
console.log(`My age in hours (approximately): ${ageInHours}`);
console.log(`I will turn 100 in the year: ${yearTurn100}`);

// ===== Task 7.3: Functions =====

// Exercise 1: Function Declarations

// Function declaration
function greet(name) {
    return `Hello, ${name}!`;
}

// Function expression
const add = function(a, b) {
    return a + b;
};

// Arrow function
const multiply = (a, b) => a * b;

// Arrow function with body
const divide = (a, b) => {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
};

// Calling the functions (this is what makes them run)
console.log(greet("Antony"));
console.log(add(5, 3));
console.log(multiply(4, 6));
console.log(divide(10, 2));
console.log(divide(10, 0));

// Exercise 2: Build These Functions

// 1. Area of a rectangle
function calculateArea(width, height) {
    return width * height;
}

console.log(calculateArea(5, 4));

function celsiusToFahrenheit(celsius) {
    return celsius * 9 / 5 + 32;
}
console.log(celsiusToFahrenheit(0)); // should be 32
console.log(celsiusToFahrenheit(100)); // should be 212

function isEven(number) {
    return number % 2 === 0;
}

console.log(isEven(4)); // should be true
console.log(isEven(7)); // should be false

function getInitials(fullName) {
    const words = fullName.split(" ");
    return words[0].charAt(0) + words[1].charAt(0);
}


console.log(getInitials("Antony Shisia")); // should be "AS"

function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("hello")); // should be "olleh"

// Exercise 3: Default Parameters
function greetWithDefaults(name = "Guest", greeting = "Hello") {
    return `${greeting}, ${name}!`;
}

console.log(greetWithDefaults());
console.log(greetWithDefaults("Antony"));
console.log(greetWithDefaults("Antony", "Hi"));

function calculateTip(bill, tipPercent = 15) {
    return bill * tipPercent / 100;
}

console.log(calculateTip(100));      // should be 15
console.log(calculateTip(200, 10));  // should be 20

// ===== Task 7.4: Control Flow =====
// Exercise 1: If/Else Statements
function getGrade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

console.log(getGrade(95));
console.log(getGrade(85));
console.log(getGrade(72));
console.log(getGrade(65));
console.log(getGrade(40));

// Exercise 2: Switch Statements
function getDayName(dayNumber) {
    switch (dayNumber) {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        // your turn: add cases 3, 4, 5 and 6 here
        default:
            return "Invalid day";
    }
}

console.log(getDayName(0));
console.log(getDayName(2));
console.log(getDayName(9));

// Exercise 3: Loops

// For loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// While loop
let counter = 0;
while (counter < 5) {
    console.log(counter);
    counter++;
}

// For...of (arrays)
const colors = ["red", "green", "blue"];
for (const color of colors) {
    console.log(color);
}

