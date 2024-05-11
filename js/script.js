import {currentLoc,cityelem,cityTime,cityDate,temperature,feelsLike,sunrise,sunrset,description,humidity,windSpeed,pressureElem,UV} from "elemnt.js"
const html = document.querySelector("html");
const searchbar = document.getElementById("default-search");
const searchIcon = document.getElementById("searchIcon");

searchIcon.addEventListener("click", () => {
  let APIendPoint = `https://api.tomorrow.io/v4/weather/realtime?location=${searchbar.value}&apikey=18IdHwHitUX1eZm3w4PwFq9nG9Vy2gJ0`;

  const options = { method: "GET", headers: { accept: "application/json" } };

  fetch(APIendPoint, options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));

  searchbar.value = "";
});

searchbar.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    let APIendPoint = `https://api.tomorrow.io/v4/weather/realtime?location=${searchbar.value}&apikey=18IdHwHitUX1eZm3w4PwFq9nG9Vy2gJ0`;

    const options = { method: "GET", headers: { accept: "application/json" } };

    fetch(APIendPoint, options)
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));

    searchbar.value = "";
  }
});

function ToggleDarkLight() {
  html.classList.toggle("dark");
}
