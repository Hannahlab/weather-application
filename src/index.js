function searchCity(city){
let apiKey = "eea6ff3f83446t880010aod1f92b9fab";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apikey} `;
}

function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = searchInput.value;
    sea
searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);