/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/print.js":
/*!**********************!*\
  !*** ./src/print.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mainDiv": () => (/* binding */ mainDiv),
/* harmony export */   "printMe": () => (/* binding */ printMe),
/* harmony export */   "searchBar": () => (/* binding */ searchBar),
/* harmony export */   "weather": () => (/* binding */ weather)
/* harmony export */ });
/* harmony import */ var _print_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./print.js */ "./src/print.js");

let data = 0;
function printMe() {
  let some = locateIt("london");
  console.log(some);
}
function creator(ele, cls, id) {
  const item = document.createElement(ele);
  item.setAttribute("class", cls);
  item.setAttribute("id", id);
  return item;
}
function mainDiv() {
  const item = creator("div", "wrap", "wrap");
  return item;
}
function searchBar() {
  const wrapSearch = creator("div", "searchwrap", "searchwrap");
  wrapSearch.innerHTML = `<input id="searchcity" minlength="2" maxlength="30" pattern="/!0-9/"class="searchcity" type="search" placeholder="Search your city's weather" required> <svg id="searchNow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Search a city</title><path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" /></svg>`;
  return wrapSearch;
}
function weather() {
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

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/print.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpbnQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEyQjtBQUMzQixJQUFJQSxJQUFJLEdBQUcsQ0FBQztBQUNMLFNBQVNDLE9BQU9BLENBQUEsRUFBRztFQUN4QixJQUFJQyxJQUFJLEdBQUdDLFFBQVEsQ0FBQyxRQUFRLENBQUM7RUFDN0JDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxJQUFJLENBQUM7QUFDbkI7QUFFQSxTQUFTSSxPQUFPQSxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRUMsRUFBRSxFQUFFO0VBQzdCLE1BQU1DLElBQUksR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUNMLEdBQUcsQ0FBQztFQUN4Q0csSUFBSSxDQUFDRyxZQUFZLENBQUMsT0FBTyxFQUFFTCxHQUFHLENBQUM7RUFDL0JFLElBQUksQ0FBQ0csWUFBWSxDQUFDLElBQUksRUFBRUosRUFBRSxDQUFDO0VBQzNCLE9BQU9DLElBQUk7QUFDYjtBQUVPLFNBQVNJLE9BQU9BLENBQUEsRUFBRztFQUN4QixNQUFNSixJQUFJLEdBQUdKLE9BQU8sQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQztFQUMzQyxPQUFPSSxJQUFJO0FBQ2I7QUFFTyxTQUFTSyxTQUFTQSxDQUFBLEVBQUc7RUFDMUIsTUFBTUMsVUFBVSxHQUFHVixPQUFPLENBQUMsS0FBSyxFQUFFLFlBQVksRUFBRSxZQUFZLENBQUM7RUFFN0RVLFVBQVUsQ0FBQ0MsU0FBUyxHQUFJLHFoQkFBb2hCO0VBRTVpQixPQUFPRCxVQUFVO0FBQ25CO0FBRU8sU0FBU0UsT0FBT0EsQ0FBQSxFQUFHO0VBQ3hCLE1BQU1DLEdBQUcsR0FBR2IsT0FBTyxDQUFDLEtBQUssRUFBRSxhQUFhLEVBQUUsYUFBYSxDQUFDO0VBQ3hELE1BQU1jLE9BQU8sR0FBR2QsT0FBTyxDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDO0VBQ3JELE1BQU1lLFdBQVcsR0FBR2YsT0FBTyxDQUFDLE1BQU0sRUFBRSxhQUFhLEVBQUUsYUFBYSxDQUFDO0VBQ2pFLE1BQU1ZLE9BQU8sR0FBR1osT0FBTyxDQUFDLE1BQU0sRUFBRSxhQUFhLEVBQUUsYUFBYSxDQUFDO0VBQzdELE1BQU1nQixRQUFRLEdBQUdoQixPQUFPLENBQUMsTUFBTSxFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUM7RUFDeEQsTUFBTWlCLEtBQUssR0FBR2pCLE9BQU8sQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQztFQUM5Q2EsR0FBRyxDQUFDSyxNQUFNLENBQUNKLE9BQU8sQ0FBQztFQUNuQkQsR0FBRyxDQUFDSyxNQUFNLENBQUNILFdBQVcsQ0FBQztFQUN2QkYsR0FBRyxDQUFDSyxNQUFNLENBQUNOLE9BQU8sQ0FBQztFQUNuQkMsR0FBRyxDQUFDSyxNQUFNLENBQUNGLFFBQVEsQ0FBQztFQUNwQkgsR0FBRyxDQUFDSyxNQUFNLENBQUNELEtBQUssQ0FBQztFQUNqQixPQUFPSixHQUFHO0FBQ1o7Ozs7OztVQ3hDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2svLi9zcmMvcHJpbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly93ZWJwYWNrL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly93ZWJwYWNrL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tIFwiLi9wcmludC5qc1wiO1xubGV0IGRhdGEgPSAwO1xuZXhwb3J0IGZ1bmN0aW9uIHByaW50TWUoKSB7XG4gIGxldCBzb21lID0gbG9jYXRlSXQoXCJsb25kb25cIik7XG4gIGNvbnNvbGUubG9nKHNvbWUpO1xufVxuXG5mdW5jdGlvbiBjcmVhdG9yKGVsZSwgY2xzLCBpZCkge1xuICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGUpO1xuICBpdGVtLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIGNscyk7XG4gIGl0ZW0uc2V0QXR0cmlidXRlKFwiaWRcIiwgaWQpO1xuICByZXR1cm4gaXRlbTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1haW5EaXYoKSB7XG4gIGNvbnN0IGl0ZW0gPSBjcmVhdG9yKFwiZGl2XCIsIFwid3JhcFwiLCBcIndyYXBcIik7XG4gIHJldHVybiBpdGVtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoQmFyKCkge1xuICBjb25zdCB3cmFwU2VhcmNoID0gY3JlYXRvcihcImRpdlwiLCBcInNlYXJjaHdyYXBcIiwgXCJzZWFyY2h3cmFwXCIpO1xuXG4gIHdyYXBTZWFyY2guaW5uZXJIVE1MID0gYDxpbnB1dCBpZD1cInNlYXJjaGNpdHlcIiBtaW5sZW5ndGg9XCIyXCIgbWF4bGVuZ3RoPVwiMzBcIiBwYXR0ZXJuPVwiLyEwLTkvXCJjbGFzcz1cInNlYXJjaGNpdHlcIiB0eXBlPVwic2VhcmNoXCIgcGxhY2Vob2xkZXI9XCJTZWFyY2ggeW91ciBjaXR5J3Mgd2VhdGhlclwiIHJlcXVpcmVkPiA8c3ZnIGlkPVwic2VhcmNoTm93XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+U2VhcmNoIGEgY2l0eTwvdGl0bGU+PHBhdGggZD1cIk05LjUsM0E2LjUsNi41IDAgMCwxIDE2LDkuNUMxNiwxMS4xMSAxNS40MSwxMi41OSAxNC40NCwxMy43M0wxNC43MSwxNEgxNS41TDIwLjUsMTlMMTksMjAuNUwxNCwxNS41VjE0LjcxTDEzLjczLDE0LjQ0QzEyLjU5LDE1LjQxIDExLjExLDE2IDkuNSwxNkE2LjUsNi41IDAgMCwxIDMsOS41QTYuNSw2LjUgMCAwLDEgOS41LDNNOS41LDVDNyw1IDUsNyA1LDkuNUM1LDEyIDcsMTQgOS41LDE0QzEyLDE0IDE0LDEyIDE0LDkuNUMxNCw3IDEyLDUgOS41LDVaXCIgLz48L3N2Zz5gO1xuXG4gIHJldHVybiB3cmFwU2VhcmNoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd2VhdGhlcigpIHtcbiAgY29uc3QgZGl2ID0gY3JlYXRvcihcImRpdlwiLCBcIndlYXRoZXJ3cmFwXCIsIFwid2VhdGhlcndyYXBcIik7XG4gIGNvbnN0IGNvdW50cnkgPSBjcmVhdG9yKFwic3BhblwiLCBcImNvdW50cnlcIiwgXCJjb3VudHJ5XCIpO1xuICBjb25zdCB0ZW1wZXJhdHVyZSA9IGNyZWF0b3IoXCJzcGFuXCIsIFwidGVtcGVyYXR1cmVcIiwgXCJ0ZW1wZXJhdHVyZVwiKTtcbiAgY29uc3Qgd2VhdGhlciA9IGNyZWF0b3IoXCJzcGFuXCIsIFwiZGVzY3JpcHRpb25cIiwgXCJkZXNjcmlwdGlvblwiKTtcbiAgY29uc3QgaHVtaWRpdHkgPSBjcmVhdG9yKFwic3BhblwiLCBcImh1bWlkaXR5XCIsIFwiaHVtaWRpdHlcIik7XG4gIGNvbnN0IGltYWdlID0gY3JlYXRvcihcImltZ1wiLCBcImltYWdlXCIsIFwiaW1hZ2VcIik7XG4gIGRpdi5hcHBlbmQoY291bnRyeSk7XG4gIGRpdi5hcHBlbmQodGVtcGVyYXR1cmUpO1xuICBkaXYuYXBwZW5kKHdlYXRoZXIpO1xuICBkaXYuYXBwZW5kKGh1bWlkaXR5KTtcbiAgZGl2LmFwcGVuZChpbWFnZSk7XG4gIHJldHVybiBkaXY7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3ByaW50LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbImRhdGEiLCJwcmludE1lIiwic29tZSIsImxvY2F0ZUl0IiwiY29uc29sZSIsImxvZyIsImNyZWF0b3IiLCJlbGUiLCJjbHMiLCJpZCIsIml0ZW0iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJtYWluRGl2Iiwic2VhcmNoQmFyIiwid3JhcFNlYXJjaCIsImlubmVySFRNTCIsIndlYXRoZXIiLCJkaXYiLCJjb3VudHJ5IiwidGVtcGVyYXR1cmUiLCJodW1pZGl0eSIsImltYWdlIiwiYXBwZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==