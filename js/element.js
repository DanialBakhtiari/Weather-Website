// ? Selector For Dark/Light Mode
const html = document.querySelector("html");
const dark_mode_toggle = document.getElementsByClassName("dark_mode_toggle");

// ? Selector For Body Background
const body = document.querySelector("body");

// ? Selector For Input, Icon And Current Location
const currentLoc = document.getElementById("currentLoc");
const searchbar = document.getElementById("default-search");
const searchIcon = document.getElementById("searchIcon");

// ? Selector For City Info Section
const cityElem = document.getElementById("cityElem");
const cityTime = document.getElementById("cityTime");
const cityDate = document.getElementById("cityDate");

// ? Selector For Weather Info Section
const temperature = document.getElementById("temperature");
const feelsLike = document.getElementById("feelsLike");
const sunRise = document.getElementById("sunRise");
const sunSet = document.getElementById("sunSet");
const weatherCodeIcon = document.getElementById("weatherCodeIcon");
const description = document.getElementById("description");
const humidityElem = document.getElementById("humidityElem");
const windSpeed = document.getElementById("windSpeed");
const pressureElem = document.getElementById("pressureElem");
const UV = document.getElementById("UV");

// ? Selector For 5Day Forecast Section
// ! Typo Problem the id selector doesn't match with id in elements
// ^ Fixed rewrite all of them
const imgDayOne = document.getElementById("imgDayOne");
const imgDayTwo = document.getElementById("imgDayTwo");
const imgDayThree = document.getElementById("imgDayThree");
const imgDayFour = document.getElementById("imgDayFour");
const imgDayFive = document.getElementById("imgDayFive");
const tempDayOne = document.getElementById("tempDayOne");
const tempDayTwo = document.getElementById("tempDayTwo");
const tempDayThree = document.getElementById("tempDayThree");
const tempDayFour = document.getElementById("tempDayFour");
const tempDayFive = document.getElementById("tempDayFive");
const dateDayOne = document.getElementById("dateDayOne");
const dateDayTwo = document.getElementById("dateDayTwo");
const dateDayThree = document.getElementById("dateDayThree");
const dateDayFour = document.getElementById("dateDayFour");
const dateDayFive = document.getElementById("dateDayFive");

// ? Selector For Hourly Forecast Section
const imgHourOne = document.getElementById("imgHourOne");
const imgHourTwo = document.getElementById("imgHourTwo");
const imgHourThree = document.getElementById("imgHourThree");
const imgHourFour = document.getElementById("imgHourFour");
const imgHourFive = document.getElementById("imgHourFive");
const swiperImgHourOne = document.getElementById("swiperImgHourOne");
const swiperImgHourTwo = document.getElementById("swiperImgHourTwo");
const swiperImgHourThree = document.getElementById("swiperImgHourThree");
const swiperImgHourFour = document.getElementById("swiperImgHourFour");
const swiperImgHourFive = document.getElementById("swiperImgHourFive");

const tempHourOne = document.getElementById("tempHourOne");
const tempHourTwo = document.getElementById("tempHourTwo");
const tempHourThree = document.getElementById("tempHourThree");
const tempHourFour = document.getElementById("tempHourFour");
const tempHourFive = document.getElementById("tempHourFive");
const swiperTempHourOne = document.getElementById("swiperTempHourOne");
const swiperTempHourTwo = document.getElementById("swiperTempHourTwo");
const swiperTempHourThree = document.getElementById("swiperTempHourThree");
const swiperTempHourFour = document.getElementById("swiperTempHourFour");
const swiperTempHourFive = document.getElementById("swiperTempHourFive");

const windSpeedHourOne = document.getElementById("windSpeedHourOne");
const windSpeedHourTwo = document.getElementById("windSpeedHourTwo");
const windSpeedHourThree = document.getElementById("windSpeedHourThree");
const windSpeedHourFour = document.getElementById("windSpeedHourFour");
const windSpeedHourFive = document.getElementById("windSpeedHourFive");
const swiperWindSpeedHourOne = document.getElementById(
  "swiperWindSpeedHourOne"
);
const swiperWindSpeedHourTwo = document.getElementById(
  "swiperWindSpeedHourTwo"
);
const swiperWindSpeedHourThree = document.getElementById(
  "swiperWindSpeedHourThree"
);
const swiperWindSpeedHourFour = document.getElementById(
  "swiperWindSpeedHourFour"
);
const swiperWindSpeedHourFive = document.getElementById(
  "swiperWindSpeedHourFive"
);



const weatherChanger = (weatherCode, forecastIcon, localHour) => {
  switch (weatherCode) {
    case 1000:
      if (forecastIcon == weatherCodeIcon) {
        description.innerText = `Sunny`;
      }
      if (localHour >= 20) {
        forecastIcon.src = `../src/images/conditions/1000_clear_night_large@2x.png`;
        description.innerText = `Clear`;
      } else {
        forecastIcon.src = `../src/images/conditions/1000_clear_large@2x.png`;
      }
      break;
    case 1001:
      forecastIcon.src = `../src/images/conditions/1001_cloudy_large@2x.png`;

      if (forecastIcon == weatherCodeIcon) {
        description.innerText = `Cloudy`;
      }
      break;
    case 1100:
      if (forecastIcon == weatherCodeIcon) {
        description.innerText = `Mostly Sunny`;
      }
      if (localHour >= 20) {
        forecastIcon.src = `../src/images/conditions/1100_mostly_clear_night_large@2x.png`;
      } else {
        forecastIcon.src = `../src/images/conditions/1100_mostly_clear_large@2x.png`;
      }
      break;
    case 1101:
      if (forecastIcon == weatherCodeIcon) {
        description.innerText = `Partly Cloudy`;
      }
      if (localHour >= 20) {
        forecastIcon.src = `../src/images/conditions/1101_partly_cloudy_night_large@2x.png`;
      } else {
        forecastIcon.src = `../src/images/conditions/1101_partly_cloudy_large@2x.png`;
      }
      break;
    case 1102:
      if (forecastIcon == weatherCodeIcon) {
        description.innerText = `Mostly Cloudy`;
      }
      if (localHour >= 20) {
        forecastIcon.src = `../src/images/conditions/1102_mostly_cloudy_night_large@2x.png`;
      } else {
        forecastIcon.src = `../src/images/conditions/1102_mostly_cloudy_large@2x.png`;
      }
      break;
    case 2000:
      forecastIcon.src = `../src/images/conditions/2000_fog_large@2x.png`;

      if (forecastIcon == weatherCodeIcon) {
        description.innerText = `Fogy`;
      }
      break;
    case 2100:
      forecastIcon.src = `../src/images/conditions/2100_fog_light_large@2x.png`;

      if (forecastIcon == weatherCodeIcon) {
        description.innerText = `Light Fog`;
      }
      break;
    case 4000:
      forecastIcon.src = `../src/images/conditions/4000_drizzle_large@2x.png`;

      if (forecastIcon == weatherCodeIcon) {
        description.innerText = `Drizzle`;
      }
      break;
    case 4001:
      forecastIcon.src = `../src/images/conditions/4001_rain_large@2x.png`;

      if (forecastIcon == weatherCodeIcon) {
        description.innerText = `Rain`;
      }
      break;
    case 4200:
      forecastIcon.src = `../src/images/conditions/4200_rain_light_large@2x.png`;

      if (forecastIcon == weatherCodeIcon) {
        description.innerText = `Light Rain`;
      }
      break;
    case 4201:
      forecastIcon.src = `../src/images/conditions/4201_rain_heavy_large@2x.png`;

      if (forecastIcon == weatherCodeIcon) {
        description.innerText = `Heavy Rain`;
      }
      break;
    case 5000:
      forecastIcon.src = `../src/images/conditions/5001_flurries_large@2x.png`;

      if (forecastIcon == weatherCodeIcon) {
        description.innerText = `Snow`;
      }

      break;
    case 5001:
      forecastIcon.src = `../src/images/conditions/5001_flurries_large@2x.png`;

      if (forecastIcon == weatherCodeIcon) {
        description.innerText = `Flurries`;
      }
      break;
    case 5100:
      forecastIcon.src = `../src/images/conditions/5100_snow_light_large@2x.png`;

      if (forecastIcon == weatherCodeIcon) {
        description.innerText = `Light Snow`;
      }
      break;
    case 5101:
      forecastIcon.src = `../src/images/conditions/5101_snow_heavy_large@2x.png`;

      if (forecastIcon == weatherCodeIcon) {
        description.innerText = `Heavy Snow`;
      }
      break;
    case 6000:
      forecastIcon.src = `../src/images/conditions/6000_freezing_rain_drizzle_large@2x.png`;

      if (forecastIcon == weatherCodeIcon) {
        description.innerText = `Freezing Rain Drizzle`;
      }
      break;
    case 6001:
      forecastIcon.src = `../src/images/conditions/6001_freezing_rain_large@2x.png`;

      if (forecastIcon == weatherCodeIcon) {
        description.innerText = `Freezing Rain`;
      }
      break;
    case 6200:
      forecastIcon.src = `../src/images/conditions/6200_freezing_rain_light_large@2x.png`;

      if (forecastIcon == weatherCodeIcon) {
        description.innerText = `Freezing Light Rain`;
      }
      break;
    case 6201:
      forecastIcon.src = `../src/images/conditions/6201_freezing_rain_heavy_large@2x.png`;

      if (forecastIcon == weatherCodeIcon) {
        description.innerText = `Freezing Heavy Rain`;
      }
      break;
    case 7000:
      forecastIcon.src = `../src/images/conditions/7000_ice_pellets_large@2x.png`;

      if (forecastIcon == weatherCodeIcon) {
        description.innerText = `Ice Pellets`;
      }
      break;
    case 7101:
      forecastIcon.src = `../src/images/conditions/7101_ice_pellets_heavy_large@2x.png`;

      if (forecastIcon == weatherCodeIcon) {
        description.innerText = `Heavy Ice Pellets`;
      }
      break;
    case 7102:
      forecastIcon.src = `../src/images/conditions/7102_ice_pellets_light_large@2x.png`;

      if (forecastIcon == weatherCodeIcon) {
        description.innerText = `Light Ice Pellets`;
      }
      break;
    case 8000:
      forecastIcon.src = `../src/images/conditions/8000_tstorm_large@2x.png`;

      if (forecastIcon == weatherCodeIcon) {
        description.innerText = `Thunderstorm`;
      }
      break;

    default:
      break;
  }
};

const backgroundChanger = (weatherCode, localHour) => {
  switch (weatherCode) {
    case 1000:
      body.className = "sunny";
      if (localHour >= 20) {
        body.className = "clear_night";
      }
      break;
    case 1001:
      body.className = "cloudy";
      if (localHour >= 20) {
        body.className = "cloudy_night";
      }

      break;
    case 1100:
      body.className = "mostly_sunny";
      if (localHour >= 20) {
        body.className = "clear_night";
      }

      break;
    case 1101:
      body.className = "cloudy";
      if (localHour >= 20) {
        body.className = "cloudy_night";
      }

      break;
    case 1102:
      body.className = "cloudy";
      if (localHour >= 20) {
        body.className = "cloudy_night";
      }

      break;
    case 2000:
      body.className = "fogy";

      break;
    case 2100:
      body.className = "fogy";

      break;
    case 4000:
      body.className = "rainy";

      break;
    case 4001:
      body.className = "rainy";

      break;
    case 4200:
      body.className = "rainy";

      break;
    case 4201:
      body.className = "lightning";

      break;
    case 5000:
      body.className = "snowy";
      break;
    case 5001:
      body.className = "flurries";

      break;
    case 5100:
      body.className = "snowy";

      break;
    case 5101:
      body.className = "snowy";

      break;
    case 6000:
      body.className = "freezing_rain";

      break;
    case 6001:
      body.className = "freezing_rain";

      break;
    case 6200:
      body.className = "freezing_rain";

      break;
    case 6201:
      body.className = "freezing_rain";

      break;
    case 7000:
      body.className = "ice_pellets";

      break;
    case 7101:
      body.className = "ice_pellets";

      break;
    case 7102:
      body.className = "ice_pellets";

      break;
    case 8000:
      body.className = "storm";

      break;

    default:
      break;
  }
};
export {

  body,
  currentLoc,
  cityElem,
  cityTime,
  cityDate,
  temperature,
  feelsLike,
  sunRise,
  sunSet,
  description,
  humidityElem,
  windSpeed,
  pressureElem,
  UV,
  html,
  searchbar,
  searchIcon,
  dark_mode_toggle,
  weatherCodeIcon,
  imgDayOne,
  imgDayTwo,
  imgDayThree,
  imgDayFour,
  imgDayFive,
  tempDayOne,
  tempDayTwo,
  tempDayThree,
  tempDayFour,
  tempDayFive,
  dateDayOne,
  dateDayTwo,
  dateDayThree,
  dateDayFour,
  dateDayFive,
  imgHourOne,
  imgHourTwo,
  imgHourThree,
  imgHourFour,
  imgHourFive,
  swiperImgHourOne,
  swiperImgHourTwo,
  swiperImgHourThree,
  swiperImgHourFour,
  swiperImgHourFive,
  tempHourOne,
  tempHourTwo,
  tempHourThree,
  tempHourFour,
  tempHourFive,
  swiperTempHourOne,
  swiperTempHourTwo,
  swiperTempHourThree,
  swiperTempHourFour,
  swiperTempHourFive,
  windSpeedHourOne,
  windSpeedHourTwo,
  windSpeedHourThree,
  windSpeedHourFour,
  windSpeedHourFive,
  swiperWindSpeedHourOne,
  swiperWindSpeedHourTwo,
  swiperWindSpeedHourThree,
  swiperWindSpeedHourFour,
  swiperWindSpeedHourFive,
  weatherChanger,
  backgroundChanger,
};
