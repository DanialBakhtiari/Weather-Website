import {
  html,
  dark_mode_toggle,
} from "./element.js";



try {
  for (const key in dark_mode_toggle) {
    dark_mode_toggle[key].addEventListener("click", () => {
      html.classList.toggle("dark");
    });
  }
} catch (error) {}
