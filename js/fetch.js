import {
  UV,
  cityDate,
  cityElem,
  cityTime,
  dateDayFive,
  dateDayFour,
  dateDayOne,
  dateDayThree,
  dateDayTwo,
  feelsLike,
  humidityElem,
  imgHourFive,
  imgHourFour,
  imgHourOne,
  imgHourThree,
  imgHourTwo,
  pressureElem,
  searchIcon,
  searchbar,
  sunRise,
  sunSet,
  swiperTempHourFive,
  swiperTempHourFour,
  swiperTempHourOne,
  swiperTempHourThree,
  swiperTempHourTwo,
  swiperWindSpeedHourFive,
  swiperWindSpeedHourFour,
  swiperWindSpeedHourOne,
  swiperWindSpeedHourThree,
  swiperWindSpeedHourTwo,
  tempDayFive,
  tempDayFour,
  tempDayOne,
  tempDayThree,
  tempDayTwo,
  tempHourFive,
  tempHourFour,
  tempHourOne,
  tempHourThree,
  tempHourTwo,
  temperature,
  weatherCodeIcon,
  windSpeed,
  windSpeedHourFive,
  windSpeedHourFour,
  windSpeedHourOne,
  windSpeedHourThree,
  windSpeedHourTwo,
} from "./element.js";

searchIcon.addEventListener("click", () => {
  const APIendPoint = `https://api.tomorrow.io/v4/weather/realtime?location=${searchbar.value}&apikey=P0PV92Jsk0hqTbIQlcOEjfBbKxXZxtQr`;
  const APIendPointForecast = `https://api.tomorrow.io/v4/weather/forecast?location=${searchbar.value}&apikey=P0PV92Jsk0hqTbIQlcOEjfBbKxXZxtQr`;

  const options = { method: "GET", headers: { accept: "application/json" } };
  //* RealTime Weather API
  fetch(APIendPoint, options)
    .then((response) => response.json())
    .then((realTime) => {
      const lat = realTime.location.lat;
      const lon = realTime.location.lon;
      //* TimeZone API
      const timeZoneAPI = `http://api.timezonedb.com/v2.1/get-time-zone?key=DF88QACEHRK5&format=json&by=position&lat=${lat}&lng=${lon}`;
      fetch(timeZoneAPI, options)
        .then((response) => response.json())
        .then((localTime) => {
          const [date, time] = localTime.formatted.split(" ");
          cityTime.innerText = time.substring(0, 5);
          cityDate.innerText = date.replaceAll("-", "/");
          cityElem.innerText = localTime.cityName;
        });
      // todo Complete ERROR Handler
      //* sunSetRise API
      const sunSetRiseAPI = `https://api.sunrisesunset.io/json?lat=${lat}&lng=${lon}`;
      fetch(sunSetRiseAPI, options)
        .then((response) => response.json())
        .then((sunTime) => {
          const sunRiseTime = sunTime.results.sunrise.substring(0, 4);
          const [hourSunSetTime, minSunSetTime] = sunTime.results.sunset
            .substring(0, 4)
            .split(":");
          const formattedHourSunSetTime =
            hourSunSetTime < 10 ? `0${hourSunSetTime}` : hourSunSetTime;
          sunRise.innerText = `0${sunRiseTime}`;
          sunSet.innerText = `${formattedHourSunSetTime}:${minSunSetTime}`;
        });
      // todo Complete ERROR Handler

      const humidityLevel = realTime.data.values.humidity;
      const pressureLevel = realTime.data.values.pressureSurfaceLevel;
      const temperatureDeg = realTime.data.values.temperature;
      const feelsLikeDeg = realTime.data.values.temperatureApparent;
      const uvIndex = realTime.data.values.uvIndex;
      const windSpeedLevel = realTime.data.values.windSpeed;
      const weatherCode = realTime.data.values.weatherCode;

      humidityElem.innerText = `${humidityLevel}%`;
      pressureElem.innerText = `${Math.round(pressureLevel)}hPa`;
      feelsLike.innerText = `${Math.round(feelsLikeDeg)}°C`;
      temperature.innerText = `${Math.round(temperatureDeg)}°C`;
      UV.innerText = `${uvIndex}`;
      windSpeed.innerText = `${windSpeedLevel}km/h`;

      // todo Complete WeatherCodes And The Description For PNG
      //   switch (weatherCode) {
      //     case 1000:
      //       weatherCodeIcon.src =
      //         "../src/images/conditions/1000_clear_large@2x.png";
      //       break;
      //     case 1100:
      //       weatherCodeIcon.src = "";

      //     default:
      //       break;
      //   }
    });
  // todo Complete ERROR Handler
  //* Forecast Weather API
  fetch(APIendPointForecast, options)
    .then((response) => response.json())
    .then((forecast) => {
      // * Forecast TimeZone
      const lat = forecast.location.lat;
      const lon = forecast.location.lon;
      const forecastTimeZoneAPI = `http://api.timezonedb.com/v2.1/get-time-zone?key=CTJ3TW7HGQ9Z&format=json&by=position&lat=${lat}&lng=${lon}`;
      fetch(forecastTimeZoneAPI, options)
        .then((response) => response.json())
        .then((forecastTimeZoneAPI) => {
          const [date, time] = forecastTimeZoneAPI.formatted.split(" ");

          // ? Tested output is ok
          for (let i = 1; i < 6; i++) {
            let forecastHour = +time.substring(0, 2) + i;
            if (forecastHour >= 24) {
              forecastHour -= 24;
            }
            const formattedHour =
              forecastHour < 10 ? `0${forecastHour}` : forecastHour;

            const hourElement = document.getElementById(`hour${i}`);
            const swiperHourElement = document.getElementById(`swiperHour${i}`);
            if (hourElement && swiperHourElement) {
              hourElement.innerText = `${formattedHour}:00`;
              swiperHourElement.innerText = `${formattedHour}:00`;
            }
          }
        });

      //* Five Days Forecast
      // ? Tested output is ok the type is Number
      // const weatherCodeDayOne = forecast.timelines.daily[1].values.weatherCodeMin;
      // const weatherCodeDayTwo = forecast.timelines.daily[2].values.weatherCodeMin;
      // const weatherCodeDayThree = forecast.timelines.daily[3].values.weatherCodeMin;
      // const weatherCodeDayFour = forecast.timelines.daily[4].values.weatherCodeMin;
      // const weatherCodeDayFive = forecast.timelines.daily[5].values.weatherCodeMin;
      // console.log(`weatherCodeDayOne:${weatherCodeDayOne} type of weatherCodeDayOne: ${typeof weatherCodeDayOne}`);
      // console.log(`weatherCodeDayTwo:${weatherCodeDayTwo} type of weatherCodeDayTwo: ${typeof weatherCodeDayTwo}`);
      // console.log(`weatherCodeDayThree:${weatherCodeDayThree} type of weatherCodeDayThree: ${typeof weatherCodeDayThree}`);
      // console.log(`weatherCodeDayFour:${weatherCodeDayFour} type of weatherCodeDayFour: ${typeof weatherCodeDayFour}`);
      // console.log(`weatherCodeDayFive:${weatherCodeDayFive} type of weatherCodeDayFive: ${typeof weatherCodeDayFive}`);

      // ! Problem was tempDays**Levels was number and it cant concat with string "°C"
      // ^ Fixed rewrite in template literals
      // ! Problem was the id selector wrote in camelCase but id of the elements wrote in PascalCase
      // ^ Fixed rewrite all ids with camelCase
      const tempDaysOneLevel = Math.round(
        forecast.timelines.daily[1].values.temperatureAvg
      );
      const tempDaysTwoLevel = Math.round(
        forecast.timelines.daily[2].values.temperatureAvg
      );
      const tempDaysThreeLevel = Math.round(
        forecast.timelines.daily[3].values.temperatureAvg
      );
      const tempDaysFourLevel = Math.round(
        forecast.timelines.daily[4].values.temperatureAvg
      );
      const tempDaysFiveLevel = Math.round(
        forecast.timelines.daily[5].values.temperatureAvg
      );

      tempDayOne.innerText = `${tempDaysOneLevel}°C`;
      tempDayTwo.innerText = `${tempDaysTwoLevel}°C`;
      tempDayThree.innerText = `${tempDaysThreeLevel}°C`;
      tempDayFour.innerText = `${tempDaysFourLevel}°C`;
      tempDayFive.innerText = `${tempDaysFiveLevel}°C`;

      // ? Tested output is ok
      // ! Problem was each part of Object doesn't separate with ()
      // ^ Fixed with added () to Each part and apply the right method to that part
      const dateDayOneLevel = forecast.timelines.daily[1].time
        .replaceAll("-", "/")
        .split("T");
      const dateDayTwoLevel = forecast.timelines.daily[2].time
        .replaceAll("-", "/")
        .split("T");
      const dateDayThreeLevel = forecast.timelines.daily[3].time
        .replaceAll("-", "/")
        .split("T");
      const dateDayFourLevel = forecast.timelines.daily[4].time
        .replaceAll("-", "/")
        .split("T");
      const dateDayFiveLevel = forecast.timelines.daily[5].time
        .replaceAll("-", "/")
        .split("T");

      // ! Problem was in Selector in element.js
      // ^ Fixed Change Id and Name And Reselect
      dateDayOne.innerText = `${dateDayOneLevel[0]}`;
      dateDayTwo.innerText = `${dateDayTwoLevel[0]}`;
      dateDayThree.innerText = `${dateDayThreeLevel[0]}`;
      dateDayFour.innerText = `${dateDayFourLevel[0]}`;
      dateDayFive.innerText = `${dateDayFiveLevel[0]}`;

      //* Hourly Forecast Goes Here
      // ? Tested output is ok the type is Number
      // const weatherCodeHourOne = forecast.timelines.hourly[1].values.weatherCode;
      // const weatherCodeHourTwo = forecast.timelines.hourly[2].values.weatherCode;
      // const weatherCodeHourThree = forecast.timelines.hourly[3].values.weatherCode;
      // const weatherCodeHourFour = forecast.timelines.hourly[4].values.weatherCode;
      // const weatherCodeHourFive = forecast.timelines.hourly[5].values.weatherCode;
      // console.log(weatherCodeHourOne);
      // console.log(typeof weatherCodeHourOne);

      const tempHourOneLevel = Math.round(
        forecast.timelines.hourly[1].values.temperature
      );
      const tempHourTwoLevel = Math.round(
        forecast.timelines.hourly[2].values.temperature
      );
      const tempHourThreeLevel = Math.round(
        forecast.timelines.hourly[3].values.temperature
      );
      const tempHourFourLevel = Math.round(
        forecast.timelines.hourly[4].values.temperature
      );
      const tempHourFiveLevel = Math.round(
        forecast.timelines.hourly[5].values.temperature
      );

      tempHourOne.innerText = `${tempHourOneLevel}°C`;
      tempHourTwo.innerText = `${tempHourTwoLevel}°C`;
      tempHourThree.innerText = `${tempHourThreeLevel}°C`;
      tempHourFour.innerText = `${tempHourFourLevel}°C`;
      tempHourFive.innerText = `${tempHourFiveLevel}°C`;
      swiperTempHourOne.innerText = `${tempHourOneLevel}°C`;
      swiperTempHourTwo.innerText = `${tempHourTwoLevel}°C`;
      swiperTempHourThree.innerText = `${tempHourThreeLevel}°C`;
      swiperTempHourFour.innerText = `${tempHourFourLevel}°C`;
      swiperTempHourFive.innerText = `${tempHourFiveLevel}°C`;

      const windSpeedOneLevel = forecast.timelines.hourly[1].values.windSpeed;
      const windSpeedTwoLevel = forecast.timelines.hourly[2].values.windSpeed;
      const windSpeedThreeLevel = forecast.timelines.hourly[3].values.windSpeed;
      const windSpeedFourLevel = forecast.timelines.hourly[4].values.windSpeed;
      const windSpeedFiveLevel = forecast.timelines.hourly[5].values.windSpeed;

      

      windSpeedHourOne.innerText = `${windSpeedOneLevel}km/h`;
      windSpeedHourTwo.innerText = `${windSpeedTwoLevel}km/h`;
      windSpeedHourThree.innerText = `${windSpeedThreeLevel}km/h`;
      windSpeedHourFour.innerText = `${windSpeedFourLevel}km/h`;
      windSpeedHourFive.innerText = `${windSpeedFiveLevel}km/h`;
      swiperWindSpeedHourOne.innerText = `${windSpeedOneLevel}km/h`;
      swiperWindSpeedHourTwo.innerText = `${windSpeedTwoLevel}km/h`;
      swiperWindSpeedHourThree.innerText = `${windSpeedThreeLevel}km/h`;
      swiperWindSpeedHourFour.innerText = `${windSpeedFourLevel}km/h`;
      swiperWindSpeedHourFive.innerText = `${windSpeedFiveLevel}km/h`;
    });

  searchbar.value = "";
});

// searchbar.addEventListener("keypress", (event) => {
//   if (event.key === "Enter") {
//     event.preventDefault();
//     const APIendPoint = `https://api.tomorrow.io/v4/weather/realtime?location=${searchbar.value}&apikey=P0PV92Jsk0hqTbIQlcOEjfBbKxXZxtQr`;
//     const APIendPointForecast = `https://api.tomorrow.io/v4/weather/forecast?location=${searchbar.value}&apikey=P0PV92Jsk0hqTbIQlcOEjfBbKxXZxtQr`;

//     const options = { method: "GET", headers: { accept: "application/json" } };
//     //* RealTime Weather API
//     fetch(APIendPoint, options)
//       .then((response) => response.json())
//       .then((realTime) => {
//         const lat = realTime.location.lat;
//         const lon = realTime.location.lon;
//         //* TimeZone API
//         const timeZoneAPI = `http://api.timezonedb.com/v2.1/get-time-zone?key=DF88QACEHRK5&format=json&by=position&lat=${lat}&lng=${lon}`;
//         fetch(timeZoneAPI, options)
//           .then((response) => response.json())
//           .then((localTime) => {
//             const [date, time] = localTime.formatted.split(" ");
//             cityTime.innerText = time.substring(0, 5);
//             cityDate.innerText = date.replaceAll("-", "/");
//             cityElem.innerText = localTime.cityName;
//           })
//           // todo Complete ERROR Handler
//           .catch((err) => {
//             console.log(err);
//           });
//         //* sunSetRise API
//         const sunSetRiseAPI = `https://api.sunrisesunset.io/json?lat=${lat}&lng=${lon}`;
//         fetch(sunSetRiseAPI, options)
//           .then((response) => response.json())
//           .then((sunTime) => {
//             const sunRiseTime = sunTime.results.sunrise.substring("0", "4");
//             const [hourSunSetTime, minSunSetTime] = sunTime.results.sunset
//               .substring("0", "4")
//               .split(":");
//             sunRise.innerText = `0${sunRiseTime}`;
//             sunSet.innerText = `${(hourSunSetTime += 12)}:${minSunSetTime}`;
//           });
//         // todo Complete ERROR Handler

//         const humidityLevel = realTime.data.values.humidity;
//         const pressureLevel = realTime.data.values.pressureSurfaceLevel;
//         const temperatureDeg = realTime.data.values.temperature;
//         const feelsLikeDeg = realTime.data.values.temperatureApparent;
//         const uvIndex = realTime.data.values.uvIndex;
//         const windSpeedLevel = realTime.data.values.windSpeed;
//         const weatherCode = realTime.data.values.weatherCode;

//         humidityElem.innerText = `${humidityLevel}%`;
//         pressureElem.innerText = `${Math.round(pressureLevel)}hPa`;
//         feelsLike.innerText = `${Math.round(feelsLikeDeg)}°C`;
//         temperature.innerText = `${Math.round(temperatureDeg)}°C`;
//         UV.innerText = `${uvIndex}`;
//         windSpeed.innerText = `${windSpeedLevel}km/h`;
//         // todo Complete WeatherCodes And The Description For PNG
//         switch (weatherCode) {
//           case 1000:
//             weatherCodeIcon.src =
//               "../src/images/conditions/1000_clear_large@2x.png";
//             break;
//           case 1100:
//             weatherCodeIcon.src = "";

//           default:
//             break;
//         }
//       });
//     // todo Complete ERROR Handler
//     //* Forecast Weather API
//     fetch(APIendPointForecast, options)
//       .then((response) => response.json())
//       .then((forecast) => {})
//       .catch((err) => console.error(err));

//     searchbar.value = "";
//   }
// });
