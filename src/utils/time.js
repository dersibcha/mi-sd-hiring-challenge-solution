/**
 *
 * @param {number} time - Unix time return in format month/day/year
 */
export const formatDate = date => {
    const month = String(date.getMonth() + 1).padStart(2, '0');
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