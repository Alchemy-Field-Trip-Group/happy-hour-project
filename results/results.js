import listOfBars from '../data/bar-list.js';
import { findById } from '../common/utils.js';

// import { districtArray } from '../data/districts.js'; 

let userPreferences = JSON.parse(localStorage.getItem('preference')); 


let userPreferenceFilteredArray = []; 
let chosenDistrictArray = []; 


for (let i = 0; i < userPreferences.length; i++) {
    let filteredPreference = userPreferences[i];

    listOfBars.forEach(bar => {
        if (bar[filteredPreference]) {
            userPreferenceFilteredArray.push(bar); 
        }
    }); 
}

// for (let i = 0; i < districtArray.length; i++) {
//     let listedDistrict = districtArray[i];

userPreferenceFilteredArray.forEach(bar => {
    if (bar.district[radioButtonValue]) {
        chosenDistrictArray.push(bar); 
    }
}); 

console.log(chosenDistrictArray);

// let newArray = []; 
// coolArray.forEach(bar =>{
//     if (bar[hawthorne]) {
//         newArray.push(bar)
//     }
// })


let favoritesArray = [];
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
    resultLiquor.id = `${thisBar.id}-liquor`;

    addToFavoritesButton.textContent = 'Add to Favorites';

    addToFavoritesButton.id = 'add-to-favorites';
    addToFavoritesButton.addEventListener('click', function() {
       
       

        const isItIntheFavoritesArray = (bar) => {
            
            for (let i = 0; i < favoritesArray.length; i++) {
                const barInArray = favoritesArray[i];
                if (barInArray.id === bar.id) {
                    return barInArray;
                } else {
                    return null;
                }
            }
        };
        const isItisIt = isItIntheFavoritesArray(thisBar);
        if (favoritesArray.length === 0 || isItisIt === null) {
            let found = findById(listOfBars, thisBar.id);
            favoritesArray.push(found);
            
            localStorage.setItem('favorites', JSON.stringify(favoritesArray));
        } else {
            return;
        }
    });
    addToFavoritesButton.id = 'add-to-favorites';

    resultsUl.appendChild(resultLi);
    resultLi.appendChild(resultHours);
    resultHours.appendChild(resultDays);
    resultLi.appendChild(resultMenu);
    resultMenu.appendChild(resultBeer);
    resultMenu.appendChild(resultFood);
    resultMenu.appendChild(resultLiquor);
    resultLi.appendChild(addToFavoritesButton);
});