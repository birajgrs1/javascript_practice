console.log('-------------- setTime out and setTime Interval Demo --------------');

setTimeout(function(){
    console.log("I am running now ...")
},3000);   //3000ms ---> 3s

let greet = () =>{
    console.log("Hello, Everyone!");
}
setInterval(greet, 1500);






/*
1. Functions for executing code asynchronously after a delay.
2. setTimeout runs once; setInterval runs repeatedly

3. setTimeout:
• Syntax: setTimeout(function, time)
• Cancel: clearTimeout(timerID)

4. setInterval:
• Syntax: setInterval(function, time)
• Cancel: clearInterval(intervalID)

*/