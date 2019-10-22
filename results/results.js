import listOfBars from '../data/bar-list.js';

const resultsUl = document.getElementById('results-list');

listOfBars.forEach(bar => {

    let thisBar = bar;

    const resultLi = document.createElement('li');
    const resultAddress = document.createElement('p');
    const resultHours = document.createElement('span');
    const resultDays = document.createElement('span');
    const resultMenu = document.createElement('ul');
    const resultBeer = document.createElement('li');
    const resultFood = document.createElement('li');
    const resultLiquor = document.createElement('li');
    const addToFavoritesButton = document.createElement('button');

    resultLi.textContent = thisBar.name;
    resultLi.id = thisBar.id;

    resultAddress.textContent = thisBar.address;
    resultAddress.id = `${thisBar.id}-address`;

    resultHours.textContent = `${thisBar.time} | `;
    resultHours.id = `${thisBar.id}-hours`;

    resultDays.textContent = thisBar.days;
    resultDays.id = `${thisBar.id}-days-open`;

    resultMenu.id = `${thisBar.id}-menu`;

    resultBeer.textContent = thisBar.beer;
    resultBeer.id = `${thisBar.id}-beer`;

    resultFood.textContent = thisBar.food;
    resultFood.id = `${thisBar.id}-food`;

    resultLiquor.textContent = thisBar.liquor;
    resultLiquor.id = `${thisBar.id}-menu`;

    addToFavoritesButton.textContent = 'Add to Favorites';
    addToFavoritesButton.id = 'add-to-favorites';

    // addToFavoritesButton.addEventListener('click', function() {



    // }

    resultsUl.appendChild(resultLi);
    resultLi.appendChild(resultAddress);
    resultLi.appendChild(resultHours);
    resultHours.appendChild(resultDays);
    resultLi.appendChild(resultMenu);
    resultMenu.appendChild(resultBeer);
    resultMenu.appendChild(resultFood);
    resultMenu.appendChild(resultLiquor);
    resultLi.appendChild(addToFavoritesButton);
});