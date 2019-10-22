import { saveUser, loadUser } from './load-save-user.js';
import { makeUser } from './makeuser.js';

const form = document.querySelector('form');
const login = document.getElementById('submit-button');
let users = [];

login.addEventListener('click', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    
    const createdUser = makeUser(formData);
    
    const saved = saveUser(createdUser);
    console.log(loadUser(saved));
    for ( let i = 0; i < users.length; i++) {
        
    }
    users.push[];

});

