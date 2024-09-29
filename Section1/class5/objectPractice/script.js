/*
let product = {
    company : 'Mango',
    price : 860,
    'item-name' : 'T-shirt',    

};
console.log(typeof product);
console.log(product);
console.log(product.company, product.price);
product.company = 'Banana';
console.log(product);

//Using Bracket notation
console.log(product['company']);
console.log(product['item-name']);

delete product.company;
console.log(product);
*/

let product = {
    company: 'Mango',
    price: 860,
    'item-name': 'T-shirt',

    
    displayPrice: function() {  // anonymous function
        console.log(`Price of the product is रु ${this.price}`);
    }
};

product.displayPrice();
