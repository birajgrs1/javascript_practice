
$(document).ready(function() {
      
    // Click Event
    $('#clickButton').click(function() {
      alert("Button clicked!");
    });

    // Mouseover Event
    $('#mouseoverDiv').mouseover(function() {
      $(this).css('background-color', 'yellow');
    }).mouseout(function() {
      $(this).css('background-color', 'lightblue');
    });

    // Keypress Event
    $('#keypressInput').keypress(function(event) {
      alert("Key pressed: " + String.fromCharCode(event.which));
    });

    // Focus and Blur Events
    $('#focusInput').focus(function() {
      $(this).css('border', '2px solid green');
    }).blur(function() {
      $(this).css('border', '1px solid #ccc');
    });

    // Submit Event
    $('#myForm').submit(function(event) {
      event.preventDefault(); 
      alert("Form submitted with name: " + $('#nameInput').val());
    });

  });
