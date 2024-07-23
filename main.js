const input = document.querySelector('.input-box');
const weatherBody = document.querySelector('.weather-body');
const searchButton = document.getElementById('search-button');
const weatherImage = document.getElementById('weather-image');
const temperature = document.querySelector('.temperature');
const temperatureDescription = document.getElementById('weather-info');
const humidityPercentage = document.getElementById('humidity');
const windSpeed = document.getElementById('wind-speed');
const cityTitle = document.getElementById('city-title');
const err = document.querySelector('.location-not-found');



async function getWeather(city) {
    const api_key = '8df5c54101ed9e89c12795d1f75be082';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    const weatherData = await fetch(url).then((response) => response.json());
    console.log(weatherData);

    if (weatherData.cod == '404') {
        err.style.display = 'block';
        weatherImage.style.display = 'none';
        weatherBody.style.display = 'none';
        return;
    } else {
        err.style.display = 'none';
        weatherBody.style.display = 'block';
        weatherImage.style.display = 'block';
    }



    temperature.innerHTML = `${Math.round(weatherData.main.temp - 273.15)}°C`;
    temperatureDescription.innerHTML = `${weatherData.weather[0].description}`;
    humidityPercentage.innerHTML = `${weatherData.main.humidity}%`;
    windSpeed.innerHTML = `${Math.round((weatherData.wind['speed'] / 10) * 100)}%`;
    cityTitle.innerHTML = `${weatherData.name}`;
    input.value = '';

    switch (weatherData.weather[0].main) {
        case 'Clouds':
            weatherImage.src = 'assets/cloud.png';
            break;
        case 'Clear':
            weatherImage.src = 'assets/clear.png';
            break;
        case 'Mist':
            weatherImage.src = 'assets/mist.png';
            break;
        case 'Rain':
            weatherImage.src = 'assets/rain.png';
            break;
        case 'Snow':
            weatherImage.src = 'assets/snow.png';
            break;
    }
}


searchButton.addEventListener("click", () => {
    getWeather(input.value);
});