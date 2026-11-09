//Exercise 1: Arrays

// Creating arrays
const fruits = ["apple", "banana", "orange"];
const mixed = ["hello", 42, true, null];

// Accessing array elements
console.log(fruits[0]); // "apple"
console.log(fruits.length); // 3
console.log(mixed)

// Modifying arrays
fruits.push("grape"); // Add to the end
console.log(fruits); 

fruits.unshift("mango"); // Add to the beginning
console.log(fruits);

fruits.pop(); // Remove from the end
console.log(fruits);

fruits.shift(); // Remove from the beginning
console.log(fruits);

//Exercise 2: Array Methods

const numbers = [1, 2, 3, 4, 5];

// forEach - do something for each element
numbers.forEach(num => console.log(num * 2));

// map - create a new array by transforming each element
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// filter - create a new array with elements that pass a test
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]

//find - find the first element that passes a test
const firstEven = numbers.find(num => num % 2 === 0);
console.log(firstEven); // 2

//reduce - reduce combine all elements
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // 15

// includes - check if element exists
console.log(numbers.includes(3)); // true