const GEO_API_URL = "https://se-weather-api.herokuapp.com/api/v1/geo";
const FORECAST_API_URL = "https://se-weather-api.herokuapp.com/api/v1/forecast";
import rainIcon from '../img/rain.png';
import cloudyIcon from '../img/cloudy.png';
import snowIcon from '../img/snow.png';
import sunnyIcon from '../img/sunny.png';

/**
 *
 * @param {number} time - Unix time return in format month/day/year
 */
export const formatDate = date => {
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const day = String(date.getDate()).padStart(2, '0');
  const year = date.getFullYear();

  return `${month}/${day}/${year}`;
}

/**
 *
 * @param {number} timestamp - Unix time in seconds returns it Day format
 */
export const convertDateToDay = timestamp => {
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const date = new Date(timestamp * 1000);
  const now = new Date();
  if(now.getDay() == date.getDay()) return "Today";
  return daysOfWeek[date.getDay()];
}

/**
 *
 * @param {number} temperatureMin - Unix time return in format month/day/year
 * @param {number} temperatureMax - Unix time return in format month/day/year
 */
export const geTemperatureFormat = (temperatureMin, temperatureMax) => {
  const formattedMax = `<b>${Math.round(temperatureMax)}</b>°`;
  const formattedMin = `${Math.round(temperatureMin)}°`;
  return `${formattedMax} / ${formattedMin} F`;
}

/**
 *
 * @param {string} icon - Unix time return in format month/day/year
 */
export const getIconPath = icon => {
  switch (icon) {
    case 'rain':
      return rainIcon;
    case 'cloudy':
      return cloudyIcon;
    case 'snow':
      return snowIcon;
    case 'sunny':
      return sunnyIcon;
    default:
      return '';
  }
}

/**
 * Fetch geo data based on zip code
 * @param {string} zipCode - Zip code
 * @returns {Promise<Object>} - Geo data
 */
export async function getGeoData(zipCode) {
  try {
    const response = await fetch(`${GEO_API_URL}?zip_code=${zipCode}`);
    if (response.ok) {
      const data = await response.json();
      return data;
    }
    return null;
  } catch (error) {
    console.error("Error fetching geo data:", error);
    return null;
  }
}

/**
 * Fetch weather data based on latitude and longitude
 * @param {number} latitude - Latitude
 * @param {number} longitude - Longitude
 * @returns {Promise<Object>} - Weather data
 */
export async function getWeatherData(latitude, longitude) {
  try {
    const date = formatDate(new Date());
    const response = await fetch(`${FORECAST_API_URL}?latitude=${latitude}&longitude=${longitude}&date=${date}`);
    if (response.ok) {
      const data = await response.json();
      return data;
    }
    return null;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
}