export const findById = (array, id) => {
    for (let i = 0; i < array.length; i++) {
        const bar = array[i];

        if (bar.id === id) {
            return bar;
        }
    }
};

export function makeUser(formData) {
    const user = {
        username: formData.get('username'),
        email: formData.get('email')
    };
    return user;
}

// kind of a weird name--this is 'getting', not 'generating'
export const generateUserName = () => {
    const userNameDisplay = localStorage.getItem('username');
    return userNameDisplay;

};