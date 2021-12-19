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
  const clickedClass = "clicked";
  if(h1.className === clickedClass) {
    h1.className = "";
  } else {
    h1.className = clickedClass;
  }
  // 문제점 발생
  // 기존에 가진 class를 없애고 새로운 클래스로 변경시켜서 기존에 클래스가 가진 속성도 같이 잃음
}

h1.addEventListener("click", handleTitleClick)