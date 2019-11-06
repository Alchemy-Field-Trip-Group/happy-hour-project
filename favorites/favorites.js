import { generateUserName } from '../common/utils.js';

const favoritesUl = document.getElementById('user-favorites-list');
// getItemsFromLocal is a little confusing, since it sounds like a function but isn't
const getItemsFromLocal = localStorage.getItem('favorites');
const noFavsMessage = document.getElementById('no-favorites-selected');

const parsedFavorites = JSON.parse(getItemsFromLocal);

const userGreetingSpan = document.getElementById('generate-username');
userGreetingSpan.textContent = generateUserName();


if (parsedFavorites.length === 0) {
    noFavsMessage.textContent = 'You haven\'t Selected Any Items To Be In Favorites!';
}


parsedFavorites.forEach(bar => {
    let thisBar = bar;

    const favoriteLineItem = document.createElement('li');
    const favoriteDistrict = document.createElement('p');
    const favoriteAddress = document.createElement('p');
    const favoriteHours = document.createElement('span');
    const favoriteDays = document.createElement('span');
    const favoriteMenu = document.createElement('ul');
    const favoriteBeer = document.createElement('li');
    const favoriteFood = document.createElement('li');
    const favoriteLiqour = document.createElement('li');
    const removeFavoriteButton = document.createElement('button');

    /* hmm this whole section feels pretty redundant. i bet there's some smart looping and a smart hash map you could have used to achieve all of this in like three lines.  

    const domElements = [favoriteLineItem,
        favoriteDistrict,
        ...etc
    ]
    ['name', 'district', 'address', 'hours', 'days-open', 'menu', 'beer', 'food', 'liquor].forEach((key, i) => {
        const domEl = domElements[i];
          domEl.textContent = thisBar[key];
          domEl.id = thisBar.id;
    })
    */

    favoriteLineItem.textContent = thisBar.name;
    favoriteLineItem.id = thisBar.id;

    favoriteDistrict.textContent = thisBar.district;
    favoriteDistrict.id = `${thisBar.id}-district`;

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
    favoriteLineItem.appendChild(favoriteDistrict);
    favoriteLineItem.appendChild(favoriteAddress);
    favoriteLineItem.appendChild(favoriteHours);
    favoriteHours.appendChild(favoriteDays);
    favoriteLineItem.appendChild(favoriteMenu);
    favoriteMenu.appendChild(favoriteBeer);
    favoriteMenu.appendChild(favoriteFood);
    favoriteMenu.appendChild(favoriteLiqour);
    favoritesUl.appendChild(removeFavoriteButton);


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


