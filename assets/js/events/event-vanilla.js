/* HTML document has been loaded */
document.addEventListener("DOMContentLoaded", function() {
  const content = document.getElementById("vanilla-event__1");
  content.innerHTML = "<p>Document loaded</p>";
})

/* HTML element has been clicked */
const button1 = document.getElementById("vanilla-event__2-button");
button1.addEventListener("click", function() {
  const content = document.getElementById("vanilla-event__2");
  content.insertAdjacentHTML("beforeend", "<p>Button has been clicked</p>");
})

/* HTML element has been double clicked */
const button2 = document.getElementById("vanilla-event__3-button");
button2.addEventListener("dblclick", function() {
  const content = document.getElementById("vanilla-event__3");
  content.insertAdjacentHTML("beforeend", "<p>Button has been doble clicked</p>");
})