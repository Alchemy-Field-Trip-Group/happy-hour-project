const getItemsFromLocal = localStorage.getItem('favorites');
const userGreetingSpot = document.getElementById('fav-page-greeting');
console.log(getItemsFromLocal);

const parsedFavorites = JSON.parse(getItemsFromLocal);
console.log(JSON.parse(getItemsFromLocal));



// document.getElementById('reset-favorites-button').addEventListener(clearFavortesFunction);


// const clearFavortesFunction = () => {
//     localStorage.clear();
// };

