const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

/* 내가 생성한 string을 반복해서 사용하게 될 경우에는 이렇게 반복되는 string들은 대문자 변수로 저장해놓는 것이 좋은게 실수를 만들고 싶지 않은 string이라는 사실을 기억하고 상기하기! 변수명이 틀리면 콘솔에 오류가 떠서 찾기 쉬움 오타는 콘솔에 아무런 반응이 없음 */
const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username";

function onLoginClick(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreeting(username);
};

function paintGreeting(username) {
  greeting.innerText = `What's up~! ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginClick);
} else {
  paintGreeting(savedUsername);
}

