const apiKey = "1ddd43660f6a24de77f1c9c431226b29"

function searchWeather() {
    const cityName = document.getElementById('searchInput').value.trim();
    if (cityName === '') {
        alert('Please enter a city name');
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const weatherInfo = `
                <h3>${data.name}</h3>
                <p>Temperature: ${data.main.temp} °C</p>
                <p>Weather: ${data.weather[0].description}</p>
            `;
            document.getElementById('weatherInfo').innerHTML = weatherInfo;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            alert('Could not fetch weather data. Please try again.');
        });
}
