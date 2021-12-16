var type = new Typed('.home__post--typing-text', {
  strings: [''],
  typeSpeed: 150,
});

let themeColor = document.querySelectorAll(".theme-toggler span");
themeColor.forEach(function (color) {
  color.addEventListener('click', () => {
    let background = color.style.background;
    document.querySelector("body").style.background = background;
  })
});

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

// input에 값을 입력 받음
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
  type.options.strings = userdream;
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

// 값을 입력 안하면 안넘어감

// 값을 입력 받으면 위로 올라감 (.login--hidden 부여)
// 그 값이 #name에 모두 입력됨(2곳)
