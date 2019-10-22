export const setFavorite = (thisBar) => {

    localStorage.setItem('favorites', thisBar.id);
};

export const getFavorites = (favorites) => {
    const userFavorites = JSON.parse(localStorage.getItem(favorites));
    return userFavorites;
};

export const findById = (array, id) => {
    for(let i = 0; i < array.length; i++) {
        const bar = array[i];

        if(bar.id === id) {
            return bar;
        }
    }
};