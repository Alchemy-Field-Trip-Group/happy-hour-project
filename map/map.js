const hawethorneMap = {
    name: 'Hawthorne',
    top: '56%',
    left: '54%'
};

const belmontMap = {
    name: 'Belmont',
    top: '54%',
    left: '58%'
};

const divisionMap = {
    name: 'Division',
    top: '59%',
    left: '56%'
};

const albertaMap = {
    name: 'Alberta',
    top: '41%',
    left: '58%'
};

const stJohnsMap = {
    name: 'St Johns',
    top: '25%',
    left: '15%'
};

const nWMap = {
    name: 'NW Portland',
    top: '48%',
    left: '27%'
};

const pearlDistrictMap = {
    name: 'Pearl District',
    top: '53%',
    left: '33%'
};

const mapNames = [
    hawethorneMap,
    belmontMap, 
    divisionMap,
    albertaMap,
    stJohnsMap,
    nWMap,
    pearlDistrictMap
];

function generateLink(district) {
    let link = document.createElement('a');
    link.classList.add('maplink');

    link.href = '../results/?id=' + district.name;

    link.style.top = district.top;
    link.style.left = district.left;
    link.textContent = district.name;

    return link;
}

const figure = document.querySelector('figure');

for(let i = 0; i < mapNames.length; i++) {
    let item = generateLink(mapNames[i]);
    console.log(item);
    figure.appendChild(item);
}
let selectedDistrict = document.querySelector('input:checked'); 

let selectedDistrictValue = JSON.stringify(selectedDistrict.value); 

localStorage.setItem('district', selectedDistrictValue); 


console.log(selectedDistrict.value); 
