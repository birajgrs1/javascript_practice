/*
Syntax of the switch...case Statement
switch (expression) {

    case value1:
        // code block to be executed
        // if expression matches value1
        break;

    case value2:
        // code block to be executed
        // if expression matches value2
        break;

    ...

    default:
        // code block to be executed
        // if expression doesn't match any case
}

*/


let day = 2;

switch (day) {
    case 1:
        console.log("Sunday");
        break;

      
     case 2:
        console.log("Monday");
        break;

        case 3:
        console.log("Tuesday");
        break;

      
     case 4:
        console.log("Wednesday");
        break;


    case 5:
        console.log("Thursday");
        break;
    
          
    case 6:
        console.log("Friday");
        break;
    
    case 7:
        console.log("Saturday");

    default:
        console.log("Invalid!!!");
        break;
}
