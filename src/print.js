export * from "./print.js";
let data = 0;
export function printMe() {
  let some = locateIt("london");
  console.log(some);
}

function creator(ele, cls, id) {
  const item = document.createElement(ele);
  item.setAttribute("class", cls);
  item.setAttribute("id", id);
  return item;
}

export function mainDiv() {
  const item = creator("div", "wrap", "wrap");
  return item;
}

export function searchBar() {
  const wrapSearch = creator("div", "searchwrap", "searchwrap");

  wrapSearch.innerHTML = `<input id="searchcity" minlength="2" maxlength="30" pattern="/!0-9/"class="searchcity" type="search" placeholder="Search your city's weather" required> <svg id="searchNow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Search a city</title><path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" /></svg>`;

  return wrapSearch;
}

export function weather() {
  const div = creator("div", "weatherwrap", "weatherwrap");
  const country = creator("span", "country", "country");
  const temperature = creator("span", "temperature", "temperature");
  const weather = creator("span", "description", "description");
  const humidity = creator("span", "humidity", "humidity");
  const image = creator("img", "image", "image");
  div.append(country);
  div.append(temperature);
  div.append(weather);
  div.append(humidity);
  div.append(image);
  return div;
}
