const userGreetingSpot = document.getElementById('fav-page-greeting');



document.getElementById('reset-favorites-button').addEventListener(clearFavortesFunction);


const clearFavortesFunction = () => {
    localStorage.clear();
};

