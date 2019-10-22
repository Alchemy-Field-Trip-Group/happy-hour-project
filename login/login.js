import { saveUser, loadUser } from './load-save-user.js';
import { makeUser } from './makeuser.js';

const form = document.querySelector('form');
const register = document.getElementById('register');
let users = [];

register.addEventListener('click', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    
    const createdUser = makeUser(formData);
    
    const saved = saveUser(createdUser);
    const load = loadUser(saved);
    console.log(load);


    for(let i = 0; i < users.length; i++) {
        const userName = users[i];
        if(load.username !== userName.username) {
            users.push(load);
            console.log(users);
        } else {
            return;
        }
    }
});
