document.getElementById('weather-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const city = document.getElementById('city').value;
    const apiKey =  '274ebdd240287a4695f0d39f0e8b2569'; // Replace with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    // const apiCALL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === '404') {
                alert('City not found!');
                return;
            }

            document.getElementById('location').textContent = data.name;
            document.getElementById('description').textContent = data.weather[0].description;
            document.getElementById('temperature').textContent = data.main.temp;
            document.getElementById('humidity').textContent = data.main.humidity;
            document.getElementById('wind-speed').textContent = data.wind.speed;
            document.getElementById('weather-result').style.display = 'block';
        })
        .catch(error => {
            console.error('Error fetching the weather data:', error);
            alert('Error fetching the weather data!');
        });
});
