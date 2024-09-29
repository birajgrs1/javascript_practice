// Define a string
let str = "  Hello, Everyone! \n This is String methods in Js.  ";

// String length
console.log("Length:", str.length);

// Convert to uppercase
let upperStr = str.toUpperCase();
console.log("Uppercase:", upperStr);

// Convert to lowercase
let lowerStr = str.toLowerCase();
console.log("Lowercase:", lowerStr);

// Trim whitespace
let trimmedStr = str.trim();
console.log("Trimmed:", trimmedStr);

// Get a substring (from index 2 to 9)
let subStr = str.substring(2, 9);
console.log("Substring (2 to 9):", subStr);

// Replace a word
let replacedStr = str.replace("Everyone", "World");
console.log("Replaced:", replacedStr);

// Check if the string contains a word
let containsWord = str.includes("JavaScript");
console.log("Contains 'JavaScript'?", containsWord);

// Find the index of a word (index of "JavaScript")
let indexOfWord = str.indexOf("JavaScript");
console.log("Index of 'JavaScript':", indexOfWord);

// Split the string into an array (split by space)
let splitStr = str.split(" ");
console.log("Split by space:", splitStr);

// Concatenate with another string
let concatStr = str.concat(" Let's code!");
console.log("Concatenated:", concatStr);

// Repeat the string 2 times
let repeatStr = str.repeat(2);
console.log("Repeated:", repeatStr);

// Get a character at a specific index (character at index 4)
let charAt = str.charAt(4);
console.log("Character at index 4:", charAt);

// Convert string to array of characters
let charArray = [...str];
console.log("Array of characters:", charArray);

// Extract a part using slice 
let slicedStr = str.slice(7);
console.log("Sliced (from index 7):", slicedStr);






/*
charAt()
Definition: Returns the character at a specified index.
Syntax: str.charAt(index)

concat()
Definition: Combines two or more strings into one.
Syntax: str.concat(string2, string3, ...)

includes()
Definition: Checks if a string contains a specified substring.
Syntax: str.includes(substring)

indexOf()
Definition: Returns the index of the first occurrence of a substring.
Syntax: str.indexOf(substring)

lastIndexOf()
Definition: Returns the last occurrence index of a substring.
Syntax: str.lastIndexOf(substring)

slice()
Definition: Extracts a section of a string and returns it.
Syntax: str.slice(start, end)

split()
Definition: Splits a string into an array based on a delimiter.
Syntax: str.split(separator)

substring()
Definition: Returns a part of a string between two indices.
Syntax: str.substring(start, end)

toLowerCase()
Definition: Converts a string to lowercase letters.
Syntax: str.toLowerCase()

toUpperCase()
Definition: Converts a string to uppercase letters.
Syntax: str.toUpperCase()

trim()
Definition: Removes whitespace from both ends of a string.
Syntax: str.trim()

replace()
Definition: Replaces specified substring(s) with new string.
Syntax: str.replace(oldValue, newValue)

repeat()
Definition: Repeats a string for a specified number of times.
Syntax: str.repeat(count)

startsWith()
Definition: Checks if a string starts with a specified value.
Syntax: str.startsWith(substring)

endsWith()
Definition: Checks if a string ends with a specified value.
Syntax: str.endsWith(substring)
*/