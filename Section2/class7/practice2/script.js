// const x = document.getElementById('idHeading');
// console.log(x);

// const y = document.getElementsByClassName('classHeading1');
// console.log(y);

// const t = document.getElementsByTagName('h2');
// console.log(t);

// const x = document.querySelector('#idHeading');
// console.log(x);

const x = document.querySelector(".classHeading2");
console.log(x);

//element.style.propertyName = "value";
// x.style.color ="indigo";
// x.style.backgroundColor = "skyblue";

setTimeout(() => {
  x.style.color = "indigo";
  x.style.backgroundColor = "skyblue";
}, 3000);

document.getElementById("myButton").addEventListener("click", function () {
  document.getElementById("message").innerText = "Button was clicked!";
});
