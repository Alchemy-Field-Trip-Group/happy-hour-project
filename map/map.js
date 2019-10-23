const hawethorneMap = {
    name: 'Hawthorne',
    top: '50%',
    left: '43%'
};

const belmontMap = {
    name: 'Belmont',
    top: 'auto',
    left: 'auto'
};

const divisionMap = {
    name: 'Division',
    top: 'auto',
    left: 'auto'
};

const albertaMap = {
    name: 'Alberta',
    top: 'auto',
    left: 'auto'
};

const stJohnsMap = {
    name: 'St Johns',
    top: 'auto',
    left: 'auto'
};

const nWMap = {
    name: 'NW Portland',
    top: 'auto',
    left: 'auto'
};

const pearlDistrictMap = {
    name: 'Pearl District',
    top: 'auto',
    left: 'auto'
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

for (let i = 0; i < mapNames.length; i++) {
    let item = generateLink(mapNames[i]);
    console.log(item);
    figure.appendChild(item);
}






let selectedDistrict = document.querySelector('input:checked'); 

let selectedDistrictValue = JSON.stringify(selectedDistrict.value); 

localStorage.setItem('district', selectedDistrictValue); 


console.log(selectedDistrict.value); 
