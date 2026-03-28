const apiKey = "bc9876f99389056a629995155cee5911";
const lat = 10.6765; // Bacolod 
const lon = 122.9511;

const currentTemp = document.querySelector("#current-temp");
const weatherDesc = document.querySelector("#weather-desc");
const forecastContainer = document.querySelector("#forecast");

const currentUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

async function getWeather() {
    try {
        const response = await fetch(currentUrl);
        const data = await response.json();

        currentTemp.textContent = `Temperature: ${data.main.temp}°C`;
        weatherDesc.textContent = `Description: ${data.weather[0].description}`;

        const forecastResponse = await fetch(forecastUrl);
        const forecastData = await forecastResponse.json();

        displayForecast(forecastData);

    } catch (error) {
        console.error("Error fetching weather:", error);
    }
}

function displayForecast(data) {
    forecastContainer.innerHTML = "";

    for (let i = 0; i < data.list.length; i += 8) {
        const item = data.list[i];

        const date = new Date(item.dt_txt);
        const day = date.toLocaleDateString("en-US", { weekday: "long" });

        const temp = item.main.temp;

        const div = document.createElement("div");
        div.innerHTML = `<p>${day}: ${temp}°C</p>`;

        forecastContainer.appendChild(div);
    }
}

getWeather();