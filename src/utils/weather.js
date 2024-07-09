const GEO_API_URL = "https://se-weather-api.herokuapp.com/api/v1/geo";
const FORECAST_API_URL = "https://se-weather-api.herokuapp.com/api/v1/forecast";
import { formatDate } from "./time.js"
/**
 * Fetch geo data based on zip code
 * @param {string} zipCode - Zip code
 * @returns {Promise<Object>} - Geo data
 */
export  const getGeoData = async zipCode => {
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
  export const getWeatherData = async (latitude, longitude) => {
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