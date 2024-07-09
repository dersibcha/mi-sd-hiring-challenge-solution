import rainIcon from '../../img/rain.png';
import cloudyIcon from '../../img/cloudy.png';
import snowIcon from '../../img/snow.png';
import sunnyIcon from '../../img/sunny.png';

/**
 *
 * @param {string} icon - icon name to get its import file
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