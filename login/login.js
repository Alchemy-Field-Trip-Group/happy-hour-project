import { saveUser } from './load-save-user.js';
import { makeUser } from './makeuser.js';

const form = document.querySelector('form');
const button = document.getElementById('submit-button');

button.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    console.log(formData);

    const createdUser = makeUser(formData);

    saveUser(createdUser);
});

