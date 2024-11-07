$(document).ready(function () {
  // Countdown to January 1, 2025
  $("#timer").countdown("2025/01/01", function (event) {
    $(this).html(
      event.strftime("%w weeks %d days %H hours %M minutes %S seconds")
    );
  });
});
