// const removeFromFavoritesButton = document.getElementById('')
const favoritesUl = document.getElementById('user-favorites-list');
const getItemsFromLocal = localStorage.getItem('favorites');
const noFavsMessage = document.getElementById('no-favorites-selected');
// const userGreetingSpot = document.getElementById('fav-page-greeting');
console.log(getItemsFromLocal);




const parsedFavorites = JSON.parse(getItemsFromLocal);


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
    const removeFavoriteButton = document.createElement('button');
    
    
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

    removeFavoriteButton.value = thisBar.id;
    removeFavoriteButton.textContent = 'Remove Favorite';



    favoritesUl.appendChild(favoriteLineItem);
    favoriteLineItem.appendChild(favoriteAddress);
    favoriteLineItem.appendChild(favoriteHours);
    favoriteHours.appendChild(favoriteDays);
    favoriteLineItem.appendChild(favoriteMenu);
    favoriteMenu.appendChild(favoriteBeer);
    favoriteMenu.appendChild(favoriteFood);
    favoriteMenu.appendChild(favoriteLiqour);
    favoritesUl.appendChild(removeFavoriteButton);
 
 

    

});

const clearFavoritesButton = document.getElementById('reset-favorites-button');

clearFavoritesButton.addEventListener('click', () => {
    localStorage.removeItem(getItemsFromLocal);
});


const grabRemoveButton = document.querySelectorAll('button');

grabRemoveButton.forEach((button, i) => {
    button.addEventListener('click', () => {
        const itemToRemove = i;
        parsedFavorites.splice(itemToRemove, 1);
        localStorage.setItem('favorites', JSON.stringify(parsedFavorites));
        location.reload();
    });
});


