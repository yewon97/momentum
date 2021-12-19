const title = document.querySelector("div.hello:first-child h1");

title.style.color = "blue";

function handleTitleClick() {
  title.style.color = "black";
}

function handleMouseEnter() {
  title.innerText = "Mouse is here!";
}

function handleMouseLeave() {
  title.innerText = "Mouse is gone!";
}

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
  alert("copier");
}

// title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);

title.onclick = handleTitleClick;

window.addEventListener("resize", handleWindowResize);

window.addEventListener("copy", handleWindowCopy);