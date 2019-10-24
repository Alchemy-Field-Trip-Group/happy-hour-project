function loadUserPreferecePage() {
    window.location = '../preferences/preferences.html'; 
}

document.getElementById('preferences-button').addEventListener('click', function(event) {
    event.preventDefault(); 
    loadUserPreferecePage();
}); 


const hawethorneMap = {
    name: 'Hawthorne',
    top: '56%',
    left: '54%',
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
    name: 'StJohns',
    top: '25%',
    left: '15%'
};

const nWMap = {
    name: 'Northwest',
    top: '48%',
    left: '27%'
};

const pearlDistrictMap = {
    name: 'Pearl',
    top: '53%',
    left: '33%'
};

const mississippi = {
    name: 'Mississippi',
    top: '37%',
    left: '38%'
};

const mapNames = [
    hawethorneMap,
    belmontMap, 
    divisionMap,
    albertaMap,
    stJohnsMap,
    nWMap,
    pearlDistrictMap,
    mississippi
];


function generateLink(district) {
    let link = document.createElement('a');

    const img = document.createElement('img');
     
    link.classList.add('maplink');

    link.href = '../results/?id=' + district.name;

    link.style.top = district.top;
    link.style.left = district.left;
    // link.textContent = 
    // district.name;


    img.setAttribute('src', '../assets/street_images/' + district.name + '.jpg'); 
    link.appendChild(img); 


    return link;
}

const figure = document.querySelector('figure');

for (let i = 0; i < mapNames.length; i++) {
    let item = generateLink(mapNames[i]);
    figure.appendChild(item);

}



let sendIt = () => {
    let selectedDistrict = document.querySelector('input:checked'); 

    let selectedDistrictValue = JSON.stringify(selectedDistrict.value); 

    localStorage.setItem('district', selectedDistrictValue); 

};

sendIt(); 






