// Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the results.

// Sample numbers : 0, -1, 4
// Output : 4, 0, -1

var a = 4;
var b = 0;
var c = -1;

if (a > b && a > c){
    if(b > c){
        console.log("Sorted Values are: "+a+","+b+","+c);
    }
    else{
        console.log("Sorted Values are: "+a+","+c+","+b);
    }

}
else if (b>a && b > c){
    if(a > c){
        console.log("Sorted Values are: "+b+","+a+","+c);
    }
    else{
        console.log("Sorted Values are: "+c+","+b+","+a);
    }
} 

