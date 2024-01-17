function refreshWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = response.data.temperature.current;
}

function searchCity(city) {
  let apiKey = "1to3a6a944df3029f9d893d4e4aaf50b";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apikey}&units=metric`;
  axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
  searchCity(searchInput.value);
}
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
