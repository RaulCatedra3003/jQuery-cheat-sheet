/* Create an HTML element */
const button3 = document.getElementById("vanilla-functions__1-button");
button3.addEventListener("click", function() {
  const section = document.getElementById("vanilla-functions__1");
  const p = document.createElement("p");
  p.textContent = "Hi!"
  section.insertAdjacentElement("beforeend", p);
})

/* Remove an HTML element */
const button4 = document.getElementById("vanilla-functions__2-button");
button4.addEventListener("click", function() {
  const section = document.getElementById("vanilla-functions__2-content");
  section.remove();
})

/* Append an HTML element to a parent element */
const button5 = document.getElementById("vanilla-functions__3-button");
button5.addEventListener("click", function() {
  const section = document.getElementById("vanilla-functions__3");
  const p = document.createElement("p");
  p.textContent = "Child"
  section.insertAdjacentElement("beforeend", p);
})

/* Prepend an HTML element to a parent element */
const button6 = document.getElementById("vanilla-functions__4-button");
button6.addEventListener("click", function() {
  const section = document.getElementById("vanilla-functions__4");
  const p = document.createElement("p");
  p.textContent = "Child"
  section.insertBefore(p, button6);
})

/* Create and add an HTML elemen after another element */
const button7 = document.getElementById("vanilla-functions__5-button");
button7.addEventListener("click", function() {
  const p = document.createElement("p");
  p.textContent = "Child"
  button7.parentNode.insertBefore(p, button7.nextSibling);
})

/* Create and add an HTML elemen before another element */
const button8 = document.getElementById("vanilla-functions__6-button");
button8.addEventListener("click", function() {
  const p = document.createElement("p");
  p.textContent = "Child"
  button8.parentNode.insertBefore(p, button8);
})

/* Clone an HTML element within other element */
const button9 = document.getElementById("vanilla-functions__7-button");
button9.addEventListener("click", function() {
  const section = document.getElementById("vanilla-functions__7");
  const clone = document.getElementById("vanilla-functions__7-content").cloneNode(true);
  clone.setAttribute("id", "");
  clone.textContent = "Cloned element";
  section.insertAdjacentElement("beforeend", clone);
})

/* Add a class to an HTML element */
const button10 = document.getElementById("vanilla-functions__8-button");
button10.addEventListener("click", function() {
  const p = document.getElementById("vanilla-functions__8-content");
  p.classList.add("red");
})

/* Remove a class to an HTML element */
const button11 = document.getElementById("vanilla-functions__9-button");
button11.addEventListener("click", function() {
  const p = document.getElementById("vanilla-functions__9-content");
  p.classList.remove("red");
})

/* Toggle a class to an HTML element */
const button12 = document.getElementById("vanilla-functions__10-button");
button12.addEventListener("click", function() {
  const p = document.getElementById("vanilla-functions__10-content");
  p.classList.toggle("hidde");
})

/* Add a disabled attribute to an HTML button */
const button13 = document.getElementById("vanilla-functions__11-button");
button13.addEventListener("click", function() {
  const content = document.getElementById("vanilla-functions__11-content");
  content.disabled = true;
})

/* Remove the disabled attribute to an HTML button */
const button14 = document.getElementById("vanilla-functions__12-button");
button14.addEventListener("click", function() {
  const content = document.getElementById("vanilla-functions__12-content");
  content.disabled = false;
})

/* Set a data-src attribute to a img element */
const button15 = document.getElementById("vanilla-functions__13-button");
button15.addEventListener("click", function() {
  const content = document.getElementById("vanilla-functions__13-content");
  content.setAttribute("src", "https://media.giphy.com/media/gx54W1mSpeYMg/giphy.gif");
})

/* Set a data-src attribute to a img element */
const button16 = document.getElementById("vanilla-functions__14-button");
button16.addEventListener("click", function() {
  const content = document.getElementById("vanilla-functions__14-content");
  content.removeAttribute("src");
})

/* Hide an HTML element on click */
const button17 = document.getElementById("vanilla-functions__15-button");
button17.addEventListener("click", function() {
  const content = document.getElementById("vanilla-functions__15-content");
  content.style.display = "none";
})

/* Show an HTML element on click */
const button18 = document.getElementById("vanilla-functions__16-button");
button18.addEventListener("click", function() {
  const content = document.getElementById("vanilla-functions__16-content");
  content.style.display = "block";
})

/* Fade in an HTML element */
const button19 = document.getElementById("vanilla-functions__17-button");
button19.addEventListener("click", function() {
  const content = document.getElementById("vanilla-functions__17-content");
  content.style.opacity = 0;
  fadeIn(content);
  function fadeIn(element) {
    element.style.display = "block";
    (function fade() {
      let val = parseFloat(element.style.opacity);
      if(!((val += 0.1) > 1)) {
        element.style.opacity = val;
        requestAnimationFrame(fade);
      }
    })();
  }
})

/* Fade out an HTML element */
const button20 = document.getElementById("vanilla-functions__18-button");
button20.addEventListener("click", function() {
  const content = document.getElementById("vanilla-functions__18-content");
  content.style.opacity = 1;
  fadeOut(content);
  content.style.display = "none";
  function fadeOut(element) {
    (function fade() {
      let val = parseFloat(element.style.opacity);
      if(!((val -= 0.1) > 1)) {
        element.style.opacity = val;
        requestAnimationFrame(fade);
      }
    })();
  }
})

/* Iterate a collection of elements and apply a change of style on them */
const button21 = document.getElementById("vanilla-functions__19-button");
button21.addEventListener("click", function() {
  const content = document.querySelectorAll(".vanilla-functions__19-content");
  content.forEach(el => {
    el.style.color = "blue";
  })
})

/* Get the parent element of a certain element */
const button22 = document.getElementById("vanilla-functions__20-button");
button22.addEventListener("click", function() {
  this.parentNode.style.fontWeight = "bold";
})

/* Get the collection of children of a certain element */
const button23 = document.getElementById("vanilla-functions__21-button");
button23.addEventListener("click", function() {
  let collection = this.parentNode.children;
  for(element of collection) {
    element.style.fontWeight = "bold";
  }
})

/* Get all the elements that have a certain class */
const button24 = document.getElementById("vanilla-functions__22-button");
button24.addEventListener("click", function() {
  const section = document.querySelector(".vanilla-certain");
  section.style.fontWeight = "bold";
})

/* Get an item by id */
const button25 = document.getElementById("vanilla-functions__23-button");
button25.addEventListener("click", function() {
  this.style.fontWeight = "bold";
})

/* Get all the elements that have a certain class and the display property of none */
const button26 = document.getElementById("vanilla-functions__24-button");
button26.addEventListener("click", function() {
  const sections = document.querySelectorAll(".vanilla-certain");
  sections.forEach(el => {
    if(el.style.display === "none") {
      el.style.color = "blue";
      el.style.display = "block";
    }
  })
})

/* Get the options of a select element that are selected */
const button27 = document.getElementById("vanilla-functions__25-button");
button27.addEventListener("click", function() {
  const options = document.querySelectorAll(".vanilla-option");
  options.forEach(el => {
    if(el.selected) {
      const section = document.getElementById("vanilla-functions__25");
      section.insertAdjacentHTML("beforeend", `<p>The value of the selected element is: ${el.value}</p>`)
    }
  })
})

/* Change the href attribute of the first <a> element */
const button28 = document.getElementById("vanilla-functions__26-button");
button28.addEventListener("click", function() {
  const link = document.querySelectorAll("#vanilla-functions__26 a");
  link[0].setAttribute("href", "https://www.google.es");
})

/* Show an alert with the value of the first <input> of the page */
const button29 = document.getElementById("vanilla-functions__27-button");
button29.addEventListener("click", function() {
  const input = document.getElementById("vanilla-functions__27-input");
  alert(input.value);
})

/* Remove all items from a specific selector */
const button30 = document.getElementById("vanilla-functions__28-button");
button30.addEventListener("click", function() {
  const section = document.getElementById("vanilla-functions__28");
  const children = Array.from(section.children);
  children.forEach(el => {
    el.remove();
  })
})

/* Animate an item after 2 seconds from the initial page load */
document.addEventListener("DOMContentLoaded", function() {
  const content = document.getElementById("vanilla-functions__29-content");
  content.animate({height: "50px", backgroundColor: "red"}, {delay: 2000, duration: 5000, fill: "forwards"})
})