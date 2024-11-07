/*
JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy for humans to read and write
and easy for machines to parse and generate. JSON is built on two structures:

A collection of name/value pairs. In various languages, this is realized as an object, record, struct, dictionary,
hash table, keyed list, or associative array.
An ordered list of values. In most languages, this is realized as an array, vector, list, or sequence.



Common in network calls and data storage.
i. JSON.stringify() and JSON.parse()
ii. Strings are easy to transport over network.
iii. JSON requires double quotes. Escaped as \".
iv. JSON is data format, JS object is a data structure

*/

let product ={
    name: 'TShirt',
    price: 750,
    rating:{
        stars: 4.5,
        moOfRevisers: 556
    },

};

console.log(typeof product);

// Convert to String
let str = JSON.stringify(product);
console.log(typeof str);
console.log(str);

let newProduct = JSON.parse(str);
console.log(typeof newProduct);
console.log(newProduct);


/*
Local Storage:::

1. Persistent data storage in the browser.
2. setItem: Stores data as key-value pairs. 
3. Only strings can be stored.
4. getItem: Retrieves data based on key.
5. Other Methods: localStorage.clear(), removeItem().
6. Do not store sensitive information. Viewable in storage console.

*/

// localStorage.setItem('Name', 'Biraj Grs');
// localStorage.setItem('Address', 'Boudha, KTM');

// console.log(localStorage.getItem('Name'));
// console.log(localStorage.getItem('Address'));

// localStorage.setItem('product', JSON.stringify(product));
// console.log(localStorage.getItem('product'));

let product2 = JSON.parse(localStorage.getItem('product'));
console.log(product2);
// remove item
localStorage.removeItem('price');
localStorage.clear();