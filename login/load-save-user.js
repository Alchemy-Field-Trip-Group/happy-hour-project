function saveUser(user) {
    const stringifiedUser = JSON.stringify(user);
    localStorage.setItem('user', stringifiedUser);
}

function loadUser() {
    const user = localStorage.getItem('USER');
    const parsed = JSON.parse(user);
}

export { saveUser, loadUser };