const login = document.querySelector('.login');
const loginForm = document.querySelector('.login__form');
const inputName = document.querySelector('.input--name');
const inputDream = document.querySelector('.input--dream');
const loginLable = document.querySelector('.login__label');

const HIDDEN_CLASSNAME = 'login--hidden';
const USERNAME_KEY = 'username';
const USERDREAM_KEY = 'userdream';
const $name = document.querySelectorAll('.user__name, .home__name>span');
const $dream = document.querySelector('.user__dream');

function onLoginClick(event) {
  event.preventDefault();
  login.classList.add(HIDDEN_CLASSNAME);
  const username = inputName.value;
  const userdream = inputDream.value;
  localStorage.setItem(USERNAME_KEY, username);
  localStorage.setItem(USERDREAM_KEY, userdream);
  paintGreeting(username, userdream);
}

function paintGreeting(username, userdream) {
  login.classList.add(HIDDEN_CLASSNAME);
  for (i=0; i<$name.length; i++) {
    $name[i].innerText = username;
  }
  $dream.innerText = userdream;
  let type = new Typed('.home__post--typing-text', {
    strings: [userdream],
    typeSpeed: 150,
  });
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
const savedUserdream = localStorage.getItem(USERDREAM_KEY);


if (savedUsername === null || savedUserdream === null) {
  // show the form
  // login.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener('submit', onLoginClick);
} else {
  paintGreeting(savedUsername, savedUserdream);
}

