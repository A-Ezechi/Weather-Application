// VARIABLES

const searchButton = document.getElementById('search-button');

// API CALL

const apiKey = 'd9529baba1204da0876210250240901'

let weather = fetch('https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=d9529baba1204da0876210250240901')

console.log(weather)

// SEARCH BUTTON CLICK

searchButton.addEventListener('click', () => {

    const input = document.querySelector('.search-location');
    const inputResult = input.value;
    
    console.log(inputResult);

// DISPLAYING LCATION NAME    

document.querySelector('.variable-location').innerHTML = input.value;

// GETTING WEATHER



})





