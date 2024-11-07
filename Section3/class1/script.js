// console.log($);
// console.log(jquery);

$(document).ready(function () {
  console.log("We are using jQuery.");

  $("p").click(function () {
    console.log("Clicked on p.");
    $(this).hide();
  });

  $(".myClass").click(function () {
    alert("You clicked a myClass div!");
  });

  $("#para").click(function () {
    alert("You clicked the element with ID 'para'!");
  });

  // $('h1').hide();
});

/*
jQuery Syntax
$(selector).action()
Where –

$ – It the the shorthand for jQuery function.
(selector) – It defines the HTML element that you want to select
action() – It is the jQuery method used to perform actions on the elements.

Type of Selectors:::

i. Element Selector: Selects all elements of a specified type.
$('p')    // Selects all <p> elements

ii. Class Selector: Selects all elements with a specific class.
$('.className')    // Selects all elements with class 'className'

iii. ID Selector: Selects an element with a specific ID.
$('#Id')    // Selects the element with ID 'Id'

iv. Attribute Selector: Selects elements with a specific attribute.
$('input[type="text"]')    // Selects all <input> elements with type 'text'

*/
