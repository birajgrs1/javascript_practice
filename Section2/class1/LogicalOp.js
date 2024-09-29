var a = true;
var b = false;

// Logical AND (&&)
if (a && b) {
    console.log("Both a and b are true");
} else {
    console.log("Either a or b is false, or both are false");
}

// Logical OR (||)
if (a || b) {
    console.log("Either a or b is true, or both are true");
} else {
    console.log("Both a and b are false");
}

// Logical NOT (!)
if (!a) {
    console.log("a is false");
} else {
    console.log("a is true");
}

if (!b) {
    console.log("b is false");
} else {
    console.log("b is true");
}

// Combining logical operators
if ((a && !b) || (!a && b)) {
    console.log("Either a is true and b is false, or a is false and b is true");
} else {
    console.log("Both are true or both are false");
}

// Using logical operators with comparisons
var x = 5;
var y = 10;

// Check if both x is less than y and a is true
if ((x < y) && a) {
    console.log("x is less than y and a is true");
}

// Check if either x is greater than y or b is true
if ((x > y) || b) {
    console.log("x is greater than y or b is true");
} else {
    console.log("Neither x is greater than y nor b is true");
}
