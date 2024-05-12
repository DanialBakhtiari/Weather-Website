import {
  UV,
  cityDate,
  cityElem,
  cityTime,
  feelsLike,
  humidityElem,
  pressureElem,
  searchIcon,
  searchbar,
  sunRise,
  sunSet,
  temperature,
  weatherCodeIcon,
  windSpeed,
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
        })
        // todo Complete ERROR Handler
        .catch((err) => {
          console.log(err);
        });
      //* sunSetRise API
      const sunSetRiseAPI = `https://api.sunrisesunset.io/json?lat=${lat}&lng=${lon}`;
      fetch(sunSetRiseAPI, options)
        .then((response) => response.json())
        .then((sunTime) => {
          const sunRiseTime = sunTime.results.sunrise.substring("0", "4");
          const [hourSunSetTime, minSunSetTime] = sunTime.results.sunset
            .substring("0", "4")
            .split(":");
          sunRise.innerText = `0${sunRiseTime}`;
          sunSet.innerText = `${(hourSunSetTime += 12)}:${minSunSetTime}`;
        })
        // todo Complete ERROR Handler
        .catch((err) => {
          console.log(err);
        });

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
      switch (weatherCode) {
        case 1000:
          weatherCodeIcon.src =
            "../src/images/conditions/1000_clear_large@2x.png";
          break;
        case 1100:
          weatherCodeIcon.src = "";

        default:
          break;
      }
    })
    // todo Complete ERROR Handler
    .catch((err) => {
      console.log(err);
    });
  //* Forecast Weather API
  fetch(APIendPointForecast, options)
    .then((response) => response.json())
    .then((forecast) => {})
    .catch((err) => console.error(err));

  searchbar.value = "";
});

searchbar.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
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
        })
        // todo Complete ERROR Handler
        .catch((err) => {
          console.log(err);
        });
      //* sunSetRise API
      const sunSetRiseAPI = `https://api.sunrisesunset.io/json?lat=${lat}&lng=${lon}`;
      fetch(sunSetRiseAPI, options)
        .then((response) => response.json())
        .then((sunTime) => {
          const sunRiseTime = sunTime.results.sunrise.substring("0", "4");
          const [hourSunSetTime, minSunSetTime] = sunTime.results.sunset
            .substring("0", "4")
            .split(":");
          sunRise.innerText = `0${sunRiseTime}`;
          sunSet.innerText = `${(hourSunSetTime += 12)}:${minSunSetTime}`;
        })
        // todo Complete ERROR Handler
        .catch((err) => {
          console.log(err);
        });

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
      switch (weatherCode) {
        case 1000:
          weatherCodeIcon.src =
            "../src/images/conditions/1000_clear_large@2x.png";
          break;
        case 1100:
          weatherCodeIcon.src = "";

        default:
          break;
      }
    })
    // todo Complete ERROR Handler
    .catch((err) => {
      console.log(err);
    });
  //* Forecast Weather API
  fetch(APIendPointForecast, options)
    .then((response) => response.json())
    .then((forecast) => {})
    .catch((err) => console.error(err));

  searchbar.value = "";
  }
});
