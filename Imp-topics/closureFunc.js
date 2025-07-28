function outerFunc() {
    var a = 10;
    function innerFunc() {
        console.log(a);
    }
    return innerFunc;
}
var inner = outerFunc();
inner();

/*
Closure function:

A closure is a function that has access to the parent scope, even after the parent function has returned.
In JavaScript, closures are created when a function is created inside another function.

*/