import barsList from '../data/bar-list.js'; 

const foodCheck = document.getElementById('food'); 
const beerCheck = document.getElementById('beer'); 
const liquorCheck = document.getElementById('liquor'); 
const dateCheck = document.getElementById('date'); 



const preferenceArray = [foodCheck, beerCheck, liquorCheck, dateCheck];


// checkedPreference.addEventListener('click', function(){


  
 




function loadMap() {
    window.location = '../map/map.html'; 
}

document.getElementById('map-button').addEventListener('click', function(event) {
    for (let i = 0; i < preferenceArray.length; i++){
        let checkedPreference = preferenceArray[i];
        
        if (checkedPreference.checked){
            console.log('yee'); 
        } 
        else {
            console.log('hmmm');
        }
    }  
    event.preventDefault(); 
    loadMap(); 
}); 
function loadFavorites() {
    window.location = '../favorites/favorites.html'; 
}

document.getElementById('favorites-button').addEventListener('click', function(event) {
    event.preventDefault(); 
    loadFavorites();
}); 