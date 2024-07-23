const input = document.querySelector('.input-box');
const searchButton = document.getElementById('search-button');
const weatherImage = document.getElementById('weather-image');
const temperature = document.querySelector('.temperature');
const temperatureDescription = document.querySelector('.description');
const humidityPercentage = document.getElementById('humidity');
const windSpeed = document.getElementById('wind-speed');



async function getWeather(city) {
    const api_key = '8df5c54101ed9e89c12795d1f75be082';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    const weatherData = await fetch(url).then((response) => response.json());

    temperature.innerHTML = `${Math.round(weatherData.main.temp - 273.15)}°C`;
    temperatureDescription.innerHTML = `${weatherData.weather[0].description}`;
    humidityPercentage.innerHTML = `${weatherData.main.humidity}%`;
    windSpeed.innerHTML = `${(weatherData.wind['speed'] / 10) * 100}%`;
}


searchButton.addEventListener("click", () => {
    getWeather(input.value);
})