let product ={
    name: 'Jeans',
    size: 'S', 
    fit: 'Slim fit',
    'delivery-time': 'Same day delivery',
}

let copyProduct  = product;
console.log(product);
copyProduct.size = 'L';
console.log(product);
copyProduct.fit = 'Regular fit';
console.log(product);


console.log(product['delivery-time']);


let obj = {
    message: 'good job', 
    Status: 'complete'
}
console.log(obj);
let {message, Status} = obj;
console.log(message);
console.log(Status);


let product2 = {
    name: 'Jeans',
    size: 'M',
    fit: 'Slim Fit',
    'delivery-time': 'Same day delivery',
  };


function isIdenticalProduct(product1, product2){
    if(product1 == product2){
        return true;
    }
    if(typeof product1 !== 'object' || typeof product2 !== 'object'){
        console.warn('Parameter passed was not an object');
        return false;
    }
    if(
    product1.name === product2.name && product1.size === product2.size && product1.fit === product2.fit){
        return true;
    }
    return false;
    
}

console.log(isIdenticalProduct(product, ''));
console.log(isIdenticalProduct(product, product));
console.log(isIdenticalProduct(product, product2));



/*
1. Create object to represent a product from E-commerce site.
2. Create an Object with two references and log changes to one object by changing the other one.
3. Use bracket notation to display delivery-time.
4. Given an object {message: 'good job', status: 'complete'}, use de-structuring to create two variables message and status.
5. Add function isIdenticalProduct to compare two product objects.

*/