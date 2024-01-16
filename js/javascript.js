// VARIABLES

const apiKey = '3b9d30f04c36413d97c220108241601';
const limit = 1;
const searchButton = document.getElementById('search-button');


// SEARCH BUTTON CLICK
document.addEventListener('DOMContentLoaded', () => {
    searchButton.addEventListener('click', async() => {

        const input = document.querySelector('.search-location');
        const inputResult = input.value

    // GETTING WEATHER    

        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${inputResult}`);
        const data = await response.json();

        let returnedData;
        
        if (data.location && data.current) {
            returnedData = {
                location: {
                    name: data.location.name
                },
                current: {
                    windMph: data.current.wind_mph,
                    Humid: data.current.humidity,
                    temperature: data.current.temp_c
                }
            }
        }
        console.log(data)

    // DISPLAYING LOCATION NAME ON UI 

        const locationName = document.querySelector('.variable-location').innerHTML = inputResult;

    // Displaying Wind Speed

        const windSpeedDisplay = document.querySelector('.wind-speed');
        windSpeedDisplay.innerHTML = `${returnedData.current.windMph}${' MPH'}`;

    //Displaying Temperature on UI

        const uiTemperature = document.querySelector('.variable-temperature');
        uiTemperature.innerHTML = `${returnedData.current.temperature}${'°C'}`;

    //DISPLAYING HUMIDITY ON UI

        const uiHumidity = document.querySelector('.humidity-percentage');
        uiHumidity.innerHTML = `${returnedData.current.Humid}`;
    })
})




