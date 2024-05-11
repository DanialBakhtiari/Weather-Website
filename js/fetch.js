import {searchIcon,searchbar} from "./element.js"



searchIcon.addEventListener("click", () => {
    const APIendPoint = `https://api.tomorrow.io/v4/weather/realtime?location=${searchbar.value}&apikey=18IdHwHitUX1eZm3w4PwFq9nG9Vy2gJ0`;
    const APIendPointForecast = `https://api.tomorrow.io/v4/weather/forecast?location=${searchbar.value}&apikey=18IdHwHitUX1eZm3w4PwFq9nG9Vy2gJ0`;
  
    const options = { method: "GET", headers: { accept: "application/json" } };
  
    fetch(APIendPoint, options)
      .then((response) => response.json())
      .then((realTime) => console.log(realTime))
      .catch((err) => console.error(err));
  
    fetch(APIendPointForecast, options)
      .then((response) => response.json())
      .then((forecast) => console.log(forecast))
      .catch((err) => console.error(err));
  
    searchbar.value = "";
  });
  
  searchbar.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const APIendPoint = `https://api.tomorrow.io/v4/weather/realtime?location=${searchbar.value}&apikey=18IdHwHitUX1eZm3w4PwFq9nG9Vy2gJ0`;
      const APIendPointForecast = `https://api.tomorrow.io/v4/weather/forecast?location=${searchbar.value}&apikey=18IdHwHitUX1eZm3w4PwFq9nG9Vy2gJ0`;
  
      const options = { method: "GET", headers: { accept: "application/json" } };
  
      fetch(APIendPoint, options)
        .then((response) => response.json())
        .then((realTime) => console.log(realTime))
        .catch((err) => console.error(err));
  
      fetch(APIendPointForecast, options)
        .then((response) => response.json())
        .then((forecast) => console.log(forecast))
        .catch((err) => console.error(err));
  
      searchbar.value = "";
    }
  });