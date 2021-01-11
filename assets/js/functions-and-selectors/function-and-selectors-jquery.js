/* Create an HTML element */
$("#jquery-functions__1-button").on("click", function() {
  $("<p>Hi!</p>").appendTo($("#jquery-functions__1"))
})

/* Remove an HTML element */
$("#jquery-functions__2-button").on("click", function() {
  $("#jquery-functions__2-content").remove();
})

/* Append an HTML element to a parent element */
$("#jquery-functions__3-button").on("click", function() {
  $("<p>Child</p>").appendTo($("#jquery-functions__3"))
})

/* Prepend an HTML element to a parent element */
$("#jquery-functions__4-button").on("click", function() {
  $("#jquery-functions__4").prepend($("<p>Child</p>"))
})

/* Create and add an HTML elemen after another element */
$("#jquery-functions__5-button").on("click", function() {
  $(this).after("<p>Child</p>");
})

/* Create and add an HTML elemen before another element */
$("#jquery-functions__6-button").on("click", function() {
  $(this).before("<p>Child</p>");
})

/* Clone an HTML element within other element */
$("#jquery-functions__7-button").on("click", function() {
  const cloneElement = $("#jquery-functions__7-content").clone()
  cloneElement.attr("id", "");
  cloneElement.text("Cloned element")
  cloneElement.appendTo($("#jquery-functions__7"))
})

/* Add a class to an HTML element */
$("#jquery-functions__8-button").on("click", function() {
  $("#jquery-functions__8-content").addClass("red");
})

/* Remove a class to an HTML element */
$("#jquery-functions__9-button").on("click", function() {
  $("#jquery-functions__9-content").removeClass("red");
})

/* Toggle a class to an HTML element */
$("#jquery-functions__10-button").on("click", function() {
  $("#jquery-functions__10-content").toggleClass("hidde");
})

/* Add a disabled attribute to an HTML button */
$("#jquery-functions__11-button").on("click", function() {
  $("#jquery-functions__11-content").prop("disabled", true);
})

/* Remove the disabled attribute to an HTML button */
$("#jquery-functions__12-button").on("click", function() {
  $("#jquery-functions__12-content").prop("disabled", false);
})

/* Set a data-src attribute to a img element */
$("#jquery-functions__13-button").on("click", function() {
  $("#jquery-functions__13-content").attr("src", "https://media.giphy.com/media/gx54W1mSpeYMg/giphy.gif");
})

/* Set a data-src attribute to a img element */
$("#jquery-functions__14-button").on("click", function() {
  $("#jquery-functions__14-content").removeAttr("src");
})

/* Hide an HTML element on click */
$("#jquery-functions__15-button").on("click", function() {
  $("#jquery-functions__15-content").css("display", "none");
})

/* Show an HTML element on click */
$("#jquery-functions__16-button").on("click", function() {
  $("#jquery-functions__16-content").css("display", "block");
})

/* Fade in an HTML elemen */
$("#jquery-functions__17-button").on("click", function() {
  $("#jquery-functions__17-content").fadeIn();
})

/* Fade out an HTML elemen */
$("#jquery-functions__18-button").on("click", function() {
  $("#jquery-functions__18-content").fadeOut();
})

/* Iterate a collection of elements and apply a change of style on them */
$("#jquery-functions__19-button").on("click", function() {
  $(".jquery-functions__19-content").each(function() {
    $(this).css("color", "blue")
  })
})

/* Get the parent element of a certain element */
$("#jquery-functions__20-button").on("click", function() {
  $(this).parent().css("font-weight", "bold")
})

/* Get the collection of children of a certain element */
$("#jquery-functions__21-button").on("click", function() {
  $("#jquery-functions__21").children().css("font-weight", "bold")
})

/* Get all the elements that have a certain class */
$("#jquery-functions__22-button").on("click", function() {
  $(".jquery-certain").css("font-weight", "bold");
})

/* Get an item by id */
$("#jquery-functions__23-button").on("click", function() {
  $(this).css("font-weight", "bold");
})

/* Get all the elements that have a certain class and the display property of none */
$("#jquery-functions__24-button").on("click", function() {
  $(".jquery-certain:hidden").css({"display": "block", "color": "blue"})
})

/* Get the options of a select element that are selected */
$("#jquery-functions__25-button").on("click", function() {
  $("#jquery-functions__25").append(`<p>The value of the selected element is: ${$(".jquery-option:selected").val()}</p>`)
})

/* Change the href attribute of the first <a> element */
$("#jquery-functions__26-button").on("click", function() {
  $("#jquery-functions__26 a").first().attr("href", "https://www.google.es");
})

/* Show an alert with the value of the first <input> of the page */
$("#jquery-functions__27-button").on("click", function() {
  alert($("#jquery-functions__27-input").val());
})

/* Remove all items from a specific selector */
$("#jquery-functions__28-button").on("click", function() {
  $("#jquery-functions__28").children().remove();
})

/* Animate an item after 2 seconds from the initial page load */
$(function() {
  $("#jquery-functions__29-content").delay(2000).animate({"height": "50px"}, 5000);
})