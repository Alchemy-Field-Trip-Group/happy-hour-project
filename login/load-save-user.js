function saveUser(user) {
    const stringifiedUser = JSON.stringify(user);
    localStorage.setItem('user', stringifiedUser);
}

function loadUser() {
    const user = localStorage.getItem('user');
    const parsed = JSON.parse(user);
    return parsed;
}

export { saveUser, loadUser };