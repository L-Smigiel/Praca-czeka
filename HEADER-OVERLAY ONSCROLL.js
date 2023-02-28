function myFunction() {
  const headerElement = document.getElementById("site-header") 
  const headerOverlay = headerElement.appendChild(document.createElement('div'));
  headerOverlay.classList.add("header-overlay");
}
myFunction()


window.onscroll = () => {
  const headerOverlay = document.querySelector(".header-overlay")
  if (window.scrollY * 0.1 < 100){
    headerOverlay.style.opacity = window.scrollY * 0.1;
  } else {
    headerOverlay.style.opacity = 100;
  }
}