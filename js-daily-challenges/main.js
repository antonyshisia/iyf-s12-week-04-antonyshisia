// Day 1: FizzBuzz
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// Day 2: Reverse a String
function reverseWithLoop(str) {
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}
function reverseWithMethods(str) {
    return str.split("").reverse().join("");
}
function reverseWithForOf(str) {
    let result = "";
    for (const char of str) {
        result = char + result;
    }
    return result;
}
console.log("Day 2 (Loop):", reverseWithLoop("hello")); // "olleh"
console.log("Day 2 (Methods):", reverseWithMethods("hello")); // "olleh"
console.log("Day 2 (For...of):", reverseWithForOf("hello")); // "olleh"

// Day 3: Find the Largest Number in an Array
function findLargestNumber(arr) {
    if (arr.length === 0) return null;
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}
console.log("Day 3:", findLargestNumber([1, 5, 3, 9, 2]));     // 9
console.log("Day 3:", findLargestNumber([-5, -2, -9]));       // -2

// Day 4: Remove duplicates from an Array
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
console.log("Day 4 (Set):", removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

// Day 5: Check if a string is a palindrome
function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    return cleaned === cleaned.split("").reverse().join("");
}
console.log("Day 5 (Palindrome):", isPalindrome("A man a plan a canal Panama")); // should be true
console.log("Day 5 (Palindrome):", isPalindrome("race a car")); // false