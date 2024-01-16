// VARIABLES

const apiKey = '6a663b61cf89f60f777e35f1b14a35b3';
const limit = 1;
const searchButton = document.getElementById('search-button');


// SEARCH BUTTON CLICK

searchButton.addEventListener('click', async() => {

    const inputResult = input.value
    const input = document.querySelector('.search-location');
    const data = fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${inputResult}&limit=${limit}&appid=${apiKey}`);
    
    
    
    console.log(inputResult);

// DISPLAYING LCATION NAME    

document.querySelector('.variable-location').innerHTML = input.value;

// GETTING WEATHER


})





