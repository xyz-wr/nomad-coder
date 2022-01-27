const $loginForm = document.getElementById("loginForm");
const $input = document.getElementById("name");
const $greeting = document.getElementById("greeting");

function onLoginsubmit(event) {
  event.preventDefault();
  $loginForm.classList.add('hidden');
  const username = $input.value;
  $input.value = '';
  localStorage.setItem('username', username);
  paintGreetings(username);
}

function paintGreetings(username){
  $greeting.classList.remove('hidden');
  $greeting.innerText = `Hello ${username}`;
}

const savedUsername = localStorage.getItem('username');
console.log(savedUsername);


if (savedUsername === null) {
  //show the loginForm
  $loginForm.classList.remove('hidden');
  $loginForm.addEventListener('submit', onLoginsubmit);
} else {
  //show the greeting
  $loginForm.classList.add('hidden');
  paintGreetings(savedUsername);
}