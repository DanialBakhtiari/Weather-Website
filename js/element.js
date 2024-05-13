// ? Selector For Dark/Light Mode
const html = document.querySelector("html");
const dark_mode_toggle = document.getElementsByClassName("dark_mode_toggle");

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
const swiperWindSpeedHourOne = document.getElementById("swiperWindSpeedHourOne");
const swiperWindSpeedHourTwo = document.getElementById("swiperWindSpeedHourTwo");
const swiperWindSpeedHourThree = document.getElementById("swiperWindSpeedHourThree");
const swiperWindSpeedHourFour = document.getElementById("swiperWindSpeedHourFour");
const swiperWindSpeedHourFive = document.getElementById("swiperWindSpeedHourFive");

export {
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
};
