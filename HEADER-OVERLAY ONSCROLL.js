function myFunction() {
  const headerElement = document.getElementById("site-header")
  const headerOverlay = headerElement.appendChild(document.createElement('div'));
  headerOverlay.classList.add("header-overlay");
}
myFunction()

const headerOverlay = document.querySelector(".header-overlay")
const bodyGrab = document.querySelector("body");
bodyGrab.addEventListener("onscroll", setOpacityIndicator());

function setOpacityIndicator() {
headerOverlay.style.opacity =+ 0.01;
}

//to nie działa
//użyj tego stary: https://developer.mozilla.org/en-US/docs/Web/API/Window/scroll