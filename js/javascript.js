// SEARCH BUTTON CLICK

const searchButton = document.getElementById('search-button');

searchButton.addEventListener('click', function(){

    const input = document.querySelector('.search-location');
    const inputResult = input.value;

    console.log(inputResult);

// DISPLAYING LCATION NAME    

document.querySelector('.variable-location').innerHTML = input.value;

})





