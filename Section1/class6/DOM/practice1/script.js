/*
1. Selection of an elememt
2. changing HTML
3. Changing css
4. Event Listener
*/



// document.querySelector("h1").innerText ='DOM Manipulation Demo';

// var a = document.querySelector('h1');
// console.log(a);

var a = document.querySelector('h1');
a.innerHTML = "DOM manipulation demo";

a.style.color = 'red';
a.style.backgroundColor = 'aquamarine';
a.setAttribute('tabindex', '0');

function updateContent() {
    a.innerHTML = "This is DOM practice part.";
    a.style.color = "green";
    a.style.backgroundColor = "#bfbfbf";
}

//Applying Event Listener
a.addEventListener("click", updateContent);
a.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        updateContent();
    }
});



