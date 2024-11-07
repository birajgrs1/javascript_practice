
// document.write("<h2>Hello Everyone!</h2>");

// let x = window.innerHeight;
// let y = window.innerWidth;
// console.log(x,y);  //in pixel


const newWindow = window.open('', '_blank', 'width=400,height=400');

if (newWindow) {
    newWindow.document.write('<h1>Hello, BOM!</h1><p>This is a new window created using the Browser Object Model.</p>');
    setTimeout(() => newWindow.close(), 3000);
}
 else {
    alert('Popup blocked! Please allow popups for this site.');
}

