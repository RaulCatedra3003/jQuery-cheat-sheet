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