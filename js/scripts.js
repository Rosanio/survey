$(document).ready(function() {
  $('#blanks form').submit(function(event) {

    $('#thanks').show();

    event.preventDefault();
  });
});
