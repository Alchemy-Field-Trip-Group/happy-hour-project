// import { saveUser, loadUser } from 'login/load-save-user.js';
import { makeUser } from '/common/utils.js';

const form = document.querySelector('form');
const logInButton = document.getElementById('login-button');

logInButton.addEventListener('click', (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    const createdUser = makeUser(formData);

    console.log(createdUser);

    JSON.stringify(localStorage.setItem('username', createdUser.username));

    JSON.stringify(localStorage.setItem('password', createdUser.password));
    
    window.location = '/map/map.html';
});