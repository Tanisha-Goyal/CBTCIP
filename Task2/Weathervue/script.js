function searchWeather() {
    const location = document.getElementById('locationInput').value;
    const apiKey = 'bd5e378503939ddaee76f12ad7a97608'; // Replace with your API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

function displayWeather(data) {
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = '';

    const weatherCard = document.createElement('div');
    weatherCard.classList.add('weather-card');

    const cityName = document.createElement('h2');
    cityName.textContent = data.name;

    const temperature = document.createElement('p');
    temperature.textContent = `Temperature: ${data.main.temp} °C`;

    const weatherDescription = document.createElement('p');
    weatherDescription.textContent = `Weather: ${data.weather[0].description}`;

    weatherCard.appendChild(cityName);
    weatherCard.appendChild(temperature);
    weatherCard.appendChild(weatherDescription);

    weatherInfo.appendChild(weatherCard);
}
