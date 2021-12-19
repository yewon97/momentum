const h1 = document.querySelector("div.hello:first-child h1");

// function handleTitleClick() {
//   if(!h1.className) {
//     h1.className = "active";
//   } else {
//     h1.className = "";
//   }
// }

// function handleTitleClick() {
//   if(h1.className === "") {
//     h1.className = "active";
//   } else {
//     h1.className = "";
//   }
// }

function handleTitleClick() {
  // 방법1
  // const clickedClass = "clicked";
  // if(h1.classList.contains(clickedClass)) {
  //   h1.classList.remove(clickedClass)
  // } else {
  //   h1.classList.add(clickedClass);
  // }

  // 방법2
  h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleTitleClick)