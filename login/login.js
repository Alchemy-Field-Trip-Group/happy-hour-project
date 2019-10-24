import { saveUser, loadUser } from './load-save-user.js';
import { makeUser } from './makeuser.js';

const form = document.querySelector('form');
const login = document.getElementById('login');
const userInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
let users = [];

login.addEventListener('click', (event) => {
    event.preventDefault();
    if(userInput.value === '' || passwordInput.value === '') {
        userInput.setCustomValidity('please fill out both');
        console.log('nope');
        return;
    } else {
        const formData = new FormData(form);
        
        const createdUser = makeUser(formData);
        
        const saved = saveUser(createdUser);
        const load = loadUser(saved);
        
        
        if(users.includes(load.username)) {
            register.setCustomValidity('That username already exists');
            console.log(users);
            return;
        } else {
            users.push(load);
            console.log(users);
        }
    }
});