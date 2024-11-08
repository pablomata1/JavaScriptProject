function showWeatherDetails(event) {
    // prevents the default behavior of an event, such as form submission
    event.preventDefault();

    const city = document.getElementById('city').value;
    //A URL for the OpenWeatherMap API has been constructed by combining the user-entered city name with a personal API key, essential for accessing weather data. 
    //Key has already been created for you. You can directly use this key.
    const apiKey = '010cdf745a15b32bed09225dc5fffce3';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;


    // function fetch initiates an asynchronous HTTP request to the specified apiUrl (OpenWeatherMap API) to retrieve weather data.
    fetch(apiUrl)
    //Processes the response by first converting it to JSON format response.json()
        .then(response => response.json())
        //Accessing the data and inserting info into weatherInfo element
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                    <p>Temperature: ${data.main.temp} &#8451;</p>
                                    <p>Weather: ${data.weather[0].description}</p>`;
        }).catch(error =>{
            console.error('Error fetching weather', error);
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
        });
}


document.getElementById('weatherForm').addEventListener('submit', showWeatherDetails );
