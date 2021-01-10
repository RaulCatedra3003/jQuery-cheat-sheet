/* HTML document has been loaded */
$(function() {
  $("#jquery-event__1").append(`<p>Document loaded</p>`);
})

/* HTML element has been clicked */
$("#jquery-event__2-button").on("click", function() {
  $("#jquery-event__2").append(`<p>Button has been clicked</p>`);
})

/* HTML element has been double clicked */
$("#jquery-event__3-button").on("dblclick", function() {
  $("#jquery-event__3").append(`<p>Button has been clicked</p>`);
})

/* User presses a key */
$(document).on("keypress", function(e) {
  $("#jquery-event__4").text(`You have pressed ${e.code}.`);
})

/* User moves the mouse cursor */
$(window).on("mousemove", function(e) {
  $("#jquery-event__5").text(`The mouse is in ${e.clientX}x and ${e.clientY}y position.`);
})

/* User changes a value of an text input */
$("#jquery-event__6").on("input", function() {
  $("#jquery-event__6-content").text(`The new value is ${$(this).val()}.`)
})

/* An image is loaded */
$("#jquery-event__7-content").on("load", function() {
  $("#jquery-event__7").append(`<p>The img has been loaded</p>`);
})

/* An image fails to load */
$("#jquery-event__8-content").on("error", function() {
  $("#jquery-event__8").append(`<p>The img can not loaded.</p>`);
})