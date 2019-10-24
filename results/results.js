import listOfBars from '../data/bar-list.js';
import { findById } from '../common/utils.js';
// 

let userPreferences = JSON.parse(localStorage.getItem('preference'));

const searchParam = new URLSearchParams(window.location.search);
const districtId = searchParam.get('id');  
console.log(typeof districtId);
let userPreferenceFilteredArray = []; 
let arrayToDisplay = []; 


for (let i = 0; i < userPreferences.length; i++) {	//  
    let filteredPreference = userPreferences[i];

    listOfBars.forEach(bar => {
        // eslint-disable-next-line eqeqeq
        if (bar[filteredPreference] && userPreferenceFilteredArray.indexOf(bar) == -1) {
            userPreferenceFilteredArray.push(bar);
            return true;
        }
        return false;
    });
}

userPreferenceFilteredArray.forEach(bar => {
    if (bar.district === districtId) {
        arrayToDisplay.push(bar);
    }
});

let favoritesArray = localStorage.getItem('favorites');

if (favoritesArray === null) {
    favoritesArray = [];
} else {
    favoritesArray = JSON.parse(localStorage.getItem('favorites'));
}

console.log(favoritesArray);
const districtHeading = document.getElementById('district-location');
districtHeading.textContent = districtId;
const resultsUl = document.getElementById('results-list');

arrayToDisplay.forEach(bar => {

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
    addToFavoritesButton.id = `${thisBar.id}-add-to-favorites`;	
    addToFavoritesButton.addEventListener('click', function() {

        if (!findById(favoritesArray, thisBar.id)) {	
            let found = findById(listOfBars, thisBar.id);
            thisBar.favorite = true;
            favoritesArray.push(found);
            localStorage.setItem('favorites', JSON.stringify(favoritesArray));
        } else {
            return;		
        }	
    });


    addToFavoritesButton.id = 'add-to-favorites';

    resultsUl.appendChild(resultLi);
    resultLi.appendChild(resultAddress);	
    resultLi.appendChild(resultHours);
    resultHours.appendChild(resultDays);
    resultLi.appendChild(resultMenu);

    if (resultLiquor.innerText) {
        resultMenu.appendChild(resultLiquor);
    } 

    if (resultBeer.innerText) {
        resultMenu.appendChild(resultBeer);
    }

    if (resultFood.innerText) {
        resultMenu.appendChild(resultFood);
    }
    
    resultLi.appendChild(addToFavoritesButton);

});

// import { mapNames } from '../map/map.js'; 


// function generateHeaderImage(district) {
//     let link = document.createElement('a');

//     const img = document.createElement('img');
     
//     link.classList.add('maplink');

//     link.href = '../results/?id=' + district.name;

//     img.setAttribute('src', '../assets/street_images/' + district.name + '.jpg'); 
//     link.appendChild(img); 


//     return link;
// }

// const figure = document.querySelector('h2');

// for (let i = 0; i < mapNames.length; i++) {
//     let item = generateHeaderImage(mapNames[i]);
//     figure.appendChild(item);

// }
