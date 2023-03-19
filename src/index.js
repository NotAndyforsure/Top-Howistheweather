import _ from "lodash";
import "./style.css";
import * as p from "./print.js";

const searchComp = p.searchBar();
const weather = p.weather();
const mainWrap = p.mainDiv();
mainWrap.append(searchComp);
mainWrap.append(weather);
document.body.append(mainWrap);

const find = document.querySelector("#searchNow");
const input = document.querySelector("#searchcity");
const country = document.querySelector("#country");
const temperature = document.querySelector("#temperature");
const description = document.querySelector("#description");
const humidity = document.querySelector("#humidity");
const image = document.querySelector("#image");

find.addEventListener("click", () => {
  locateIt(input.value);
  input.value = "";
});

addEventListener("keydown", (e) => {
  if (e.key === "Enter" && input.value.length > 1) {
    locateIt(input.value);
    input.value = "";
  }
});

async function locateIt(nameOf) {
  try {
    country.textContent = "Please, wait...";
    const location = await fetch(
      `  https://api.openweathermap.org/data/2.5/weather?q=${nameOf}&appid=63417d191a0cc3123a165dd0d4306442
    `,
      { mode: "cors" }
    );
    const result = await location.json();
    const latitude = await result["coord"]["lat"];
    const longitude = await result["coord"]["lon"];

    const weatherfind = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=63417d191a0cc3123a165dd0d4306442&units=metric`,
      { mode: "cors" }
    );

    const result2 = await weatherfind.json();

    country.textContent = `${result2.name}, ${result2.sys.country}`;
    temperature.innerHTML = `${result2["main"].temp} <svg id="celsius" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>temperature-celsius</title><path d="M16.5,5C18.05,5 19.5,5.47 20.69,6.28L19.53,9.17C18.73,8.44 17.67,8 16.5,8C14,8 12,10 12,12.5C12,15 14,17 16.5,17C17.53,17 18.47,16.66 19.23,16.08L20.37,18.93C19.24,19.61 17.92,20 16.5,20A7.5,7.5 0 0,1 9,12.5A7.5,7.5 0 0,1 16.5,5M6,3A3,3 0 0,1 9,6A3,3 0 0,1 6,9A3,3 0 0,1 3,6A3,3 0 0,1 6,3M6,5A1,1 0 0,0 5,6A1,1 0 0,0 6,7A1,1 0 0,0 7,6A1,1 0 0,0 6,5Z" /></svg>`;
    description.innerHTML = `${result2.weather[0].description}`;
    humidity.textContent = `Humidity: ${result2["main"].humidity}%`;
    image.src = `https://openweathermap.org/img/wn/${result2.weather[0].icon}@2x.png`;
  } catch (e) {
    country.textContent = "Try another city";
    temperature.innerHTML = ``;
    description.innerHTML = ``;
    humidity.textContent = "";
  }
}

locateIt("luanda");
