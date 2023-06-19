// Get elements from the DOM
const cityInput = document.getElementById('city-input');
const searchButton = document.getElementById('search-btn');
const cityName = document.getElementById('city-name');
const weatherIcon = document.getElementById('weather-icon');
const temperature = document.getElementById('temperature');
const weatherDescription = document.getElementById('weather-description');
const humidity = document.getElementById('humidity');

// API configuration
const API_KEY = '292c1b2f6b073f4c09fe7d6ab08fd9b1';
const API_BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

// Set the default city as Chennai
setDefaultCity('Chennai');

// Function to set the default city
function setDefaultCity(city) {
    cityInput.value = city;
    fetchWeatherData(city);
}

// Attach event listener to the search button
searchButton.addEventListener('click', () => {
    const city = cityInput.value;
    fetchWeatherData(city);
});

// Function to fetch weather data from the API
function fetchWeatherData(city) {
    const apiUrl = `${API_BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`;

    // Fetch weather data from the API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Update the UI with the fetched weather data
            cityName.textContent = data.name;
            weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
            temperature.textContent = `${data.main.temp}°C`;
            weatherDescription.textContent = data.weather[0].description;
            humidity.textContent = `Humidity: ${data.main.humidity}%`;
        })
        .catch(error => {
            console.log('Error:', error);
        });
}
