const events = document.getElementById("events");
const functions = document.getElementById("functions");

events.addEventListener("click", function() {
  const eventsContent = document.getElementById("events-content");
  eventsContent.classList.toggle("hidde");
})

functions.addEventListener("click", function() {
  const functionsContent = document.getElementById("functions-content");
  functionsContent.classList.toggle("hidde");
})