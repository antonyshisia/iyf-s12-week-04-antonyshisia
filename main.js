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