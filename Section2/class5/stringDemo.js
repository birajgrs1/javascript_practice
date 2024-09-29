var text = "     THis is my simple code in String Js.    ";
// console.log(text);

// var num = text.length;
// console.log('\n');
// console.log(text, num);

/*
class string{
    toLowerCase(){

    }
}
*/

console.log(text.toUpperCase());
// console.log(text.toLocaleLowerCase());
console.log(text.toLowerCase());

// sliceDemo = text.slice(4);
// sliceDemo = text.slice(-4);
sliceDemo = text.slice(5,15);
console.log(sliceDemo);

//using trim method to remove white spaces
// console.log(text.trimStart());
// console.log(text.trimEnd());
console.log(text.trim());

var num = 9.24757896;
console.log(num.toFixed(2));

//converting num to string

var cvtStr = num.toString();
console.log(cvtStr, typeof cvtStr);










/*
In JavaScript, strings are used to represent and work with a sequence of characters. A string can 
represent an object as well as the primitive data type. JavaScript automatically converts primitive strings 
to String objects so that it's possible to use String methods and access properties even for primitive strings.

Escape Characters\ symbols\ Sequences:

Code	Result	Description
\'	'	Single quote
\"	"	Double quote
\\	\	Backslash




Code	Result
\b	Backspace
\f	Form Feed
\n	New Line
\r	Carriage Return
\t	Horizontal Tabulator
\v	Vertical Tabulator

*/