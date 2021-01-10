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

/* A form is submitted */
$("#jquery-event__9-content").on("submit", function(e) {
  e.preventDefault();
  $("#jquery-event__9").append(`<p>The fomr has been submited.</p>`);
})

/* User changes the option of a select element */
$("#jquery-event__10-content").on("change", function() {
  $("#jquery-event__10").append(`<p>You have selected an option.</p>`);
})

/* User position the mouse over an element */
$("#jquery-event__11").on("mouseover", function() {
  $(this).css("color", "red");
})

/* Checkbox is checked or unchecked */
$("#jquery-event__12").on("click", function() {
  if($("#jquery-event__12").is(":checked")) {
    console.log("aqui");
    $("#jquery-event__12-content").text("The checkbox is checked.");
  } else {
    $("#jquery-event__12-content").text("The checkbox is not checked.");
  }
})

/* Click in a ul list element */
$(".jquery-event__13").on("click", function() {
  $("#jquery-event__13-content").text(`You have clicked in the ${$(this).text()} element.`)
})