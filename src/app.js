import { getGeoData, getWeatherData } from "./utils/weather";
import { convertDateToDay, geTemperatureFormat } from "./utils/time";
import { getIconPath } from "./utils/icons";

document.getElementById("getWeather").addEventListener("click", async () => {
    const zipCode = document.getElementById("zipCode").value;
    if (!zipCode) {
      alert("Please enter a zip code.");
      return;
    }
  
    const geoData = await getGeoData(zipCode);
    if (geoData) {
      const { latitude, longitude, region, city  } = geoData;
      const weatherData = await getWeatherData(latitude, longitude);
      if (weatherData && weatherData.daily?.data) {
        displayTitle(`${region}, ${city}`)
        displayWeather(weatherData.daily?.data);
      } else {
        alert("Unable to fetch weather data.");
      }
    } else {
      alert("Unable to fetch geo data. valid zips include 90210, 10018, 60601, 77001");
    }
  });
  
  const displayTitle = city => {
    const weatherTitleContainer = document.getElementById("weatherTitleContainer");
    weatherTitleContainer.innerHTML = "";
    const titleDiv = document.createElement("div");
    titleDiv.className = "weather-title";
    titleDiv.innerHTML = `<h2>WEATHER FORECAST FOR ${city.toUpperCase()}.</h2>`;
    weatherTitleContainer.appendChild(titleDiv);
  }

  const displayWeather = data => {
    const weatherContainer = document.getElementById("weatherContainer");
    weatherContainer.innerHTML = "";
  
    data?.forEach(date => {
      const dayDiv = document.createElement("div");
      dayDiv.className = "weather-box";
      const iconPath = `${getIconPath(date?.icon)}`;
      dayDiv.innerHTML = `
        <h4>${convertDateToDay(date?.time)}:</h4>
        <div>
            <img src="${iconPath}" alt="${date?.summary}" />
            <div>
                <p>${date?.summary}</p>
                <p>${geTemperatureFormat(date?.temperatureMin,date?.temperatureMax)}</p>
            </div>
        </div>

      `;
      weatherContainer.appendChild(dayDiv);
    });
  }
