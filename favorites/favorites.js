// const removeFromFavoritesButton = document.getElementById('')
const favoritesUl = document.getElementById('user-favorites-list');
const getItemsFromLocal = localStorage.getItem('favorites');
const noFavsMessage = document.getElementById('no-favorites-selected');
// const userGreetingSpot = document.getElementById('fav-page-greeting');
console.log(getItemsFromLocal);

const parsedFavorites = JSON.parse(getItemsFromLocal);
console.log(JSON.parse(getItemsFromLocal));


if(!getItemsFromLocal) {
    noFavsMessage.textContent = 'You haven\'t Selected Any Items To Be In Favorites!';
}


parsedFavorites.forEach(bar => {
    let thisBar = bar;

    const favoriteLineItem = document.createElement('li');
    const favoriteAddress = document.createElement('p');
    const favoriteHours = document.createElement('span');
    const favoriteDays = document.createElement('span');
    const favoriteMenu = document.createElement('ul');
    const favoriteBeer = document.createElement('li');
    const favoriteFood = document.createElement('li');
    const favoriteLiqour = document.createElement('li');
    
    favoriteLineItem.textContent = thisBar.name;
    favoriteLineItem.id = thisBar.id;

    favoriteAddress.textContent = thisBar.address;
    favoriteAddress.id = `${thisBar.id}-address`;

    favoriteHours.textContent = `${thisBar.time} | `;
    favoriteHours.id = `${thisBar.id}-hours`;

    favoriteDays.textContent = thisBar.days;
    favoriteDays.id = `${thisBar.id}-days-open`;

    favoriteMenu.id = `${thisBar.id}-menu`;

    favoriteBeer.textContent = thisBar.beer;
    favoriteBeer.id = `${thisBar.id}-beer`;

    favoriteFood.textContent = thisBar.food;
    favoriteFood.id = `${thisBar.id}-food`;

    favoriteLiqour.textContent = thisBar.liquor;
    favoriteLiqour.id = `${thisBar.id}-liquor`;



    favoritesUl.appendChild(favoriteLineItem);
    favoriteLineItem.appendChild(favoriteAddress);
    favoriteLineItem.appendChild(favoriteHours);
    favoriteHours.appendChild(favoriteDays);
    favoriteLineItem.appendChild(favoriteMenu);
    favoriteMenu.appendChild(favoriteBeer);
    favoriteMenu.appendChild(favoriteFood);
    favoriteMenu.appendChild(favoriteLiqour);
 
 

    

})

// document.getElementById('reset-favorites-button').addEventListener(clearFavortesFunction);


// const clearFavortesFunction = () => {
//     localStorage.clear();
// };

