const hawethorneMap = 'Hawthorne';
const belmontMap = 'Belmont';
const divisionMap = 'Division';
const albertaMap = 'Alberta';
const stJohnsMap = 'St Johns';
const nWMap = 'NW Portland';
const pearlDistrictMap = 'Pearl District';

const mapNames = [
    hawethorneMap,
    belmontMap, 
    divisionMap,
    albertaMap,
    stJohnsMap,
    nWMap,
    pearlDistrictMap
];

let selectedDistrict = document.querySelector('input:checked'); 

let selectedDistrictValue = JSON.stringify(selectedDistrict.value); 

localStorage.setItem('district', selectedDistrictValue); 


console.log(selectedDistrict.value); 