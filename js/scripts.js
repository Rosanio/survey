$(document).ready(function() {
  $('#blanks form').submit(function(event) {

    $('#thanks').show();

    event.preventDefault();
  });
  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background")
  });
  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background")
  });
  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background")
  });
  $("button#white").click(function() {
    $("body").removeClass();
    $("body").addClass("white-background")
  });
  $("button#black").click(function() {
    $("body").removeClass();
    $("body").addClass("black-background")
  });

  $('#highlite').click(function() {
    $('#highlite').toggleClass("highlight_text");
  });
});
