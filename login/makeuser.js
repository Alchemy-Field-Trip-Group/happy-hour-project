export function makeUser(formData) {
    const user = {
        username: formData.get('username'),
        password: formData.get('password')
    };
    return user;
}