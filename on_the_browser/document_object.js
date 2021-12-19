const title = document.getElementsByTagName("h1");
const hi = document.getElementById("hello1")

console.log(title);
console.log(hi);

title[1].innerText = "I can't!";
console.log(title);