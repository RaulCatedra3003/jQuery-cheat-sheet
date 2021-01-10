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

/* User presses a key */
document.addEventListener("keypress", function(e) {
  const content = document.getElementById("vanilla-event__4");
  content.innerHTML = `You have pressed ${e.code}.`;
})

/* User moves the mouse cursor */
window.addEventListener("mousemove", function(e) {
  const content = document.getElementById("vanilla-event__5");
  content.innerHTML = `The mouse is in ${e.clientX}x and ${e.clientY}y position.`
})

/* User changes a value of an text input */
const input1 = document.getElementById("vanilla-event__6");
input1.addEventListener("input", function() {
  const content = document.getElementById("vanilla-event__6-content");
  const value = input1.value;
  content.innerHTML = `The new value is ${value}.`
})

/* An image is loaded */
const img1 = document.getElementById("vanilla-event__7-content");
img1.addEventListener("load", function() {
  const section = document.getElementById("vanilla-event__7");
  section.insertAdjacentHTML("beforeend", `<p>The img has been loaded</p>`)
})

/* An image fails to load */
const img2 = document.getElementById("vanilla-event__8-content");
img2.addEventListener("error", function() {
  const section = document.getElementById("vanilla-event__8");
  section.insertAdjacentHTML("beforeend", `<p>The img can not loaded.</p>`)
})

/* A form is submitted */
const form1 = document.getElementById("vanilla-event__9-content");
form1.addEventListener("submit", function(e) {
  e.preventDefault();
  const section = document.getElementById("vanilla-event__9");
  section.insertAdjacentHTML("beforeend", `<p>The fomr has been submited.</p>`);
});

/* User changes the option of a select element */
const select1 = document.getElementById("vanilla-event__10-content");
select1.addEventListener("change", function() {
  const section = document.getElementById("vanilla-event__10");
  section.insertAdjacentHTML("beforeend", `<p>You have selected an option.</p>`);
})

/* User position the mouse over an element */
const section = document.getElementById("vanilla-event__11");
section.addEventListener("mouseover", function(e) {
  this.style.color = "red";
})

/* Checkbox is checked or unchecked */
const checkbox = document.getElementById("vanilla-event__12");
checkbox.addEventListener("click", function() {
  const section = document.getElementById("vanilla-event__12-content");
  if(checkbox.checked === true) {
    section.textContent = `The checkbox is checked.`
  } else {
    section.textContent = `The checkbox is not checked.`
  }
})

/* Click in a ul list element */
const lis = document.querySelectorAll(".vanilla-event__13");
lis.forEach(e => {
  e.addEventListener("click", function() {
    const content = document.getElementById("vanilla-event__13-content");
    content.textContent = `You have clicked in the ${this.textContent} element.`
  });
})
