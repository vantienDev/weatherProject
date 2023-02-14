// Module chỉ dùng để render các data ra UI
// import { convertTemp } from "./convertTemp.js";
import { getDateTime } from "./getDateTime.js";
import { weatherConditions } from "./weatherConditions.js";

// Render weather box
export const renderUI = {
  renderWeatherBox(name, res) {
    const currentDate = getDateTime.getDate();
    const currentTime = getDateTime.getTime();

    const renderData = `
    <div class="row">
    <div class="col-lg-8">
      <h1 class="fs-1 fw-bolder mb-2">${name}</h1>
      <i class="fa fa-calendar"></i>
      <span>${currentDate}</span>
      <i class="fa-regular fa-clock"></i>
      <span>${currentTime}</span>
      <h2 class="display-small mt-2 mb-2">
        Dự báo thời tiết hôm nay
      </h2>
      <h1 class="display-1 fw-bolder mb-3">${Math.round(res.main.temp)}°C</h1>
      <p class="fs-5 mb-2">Cảm giác: ${Math.round(res.main.feels_like)}°C</p>
      <span class="fs-4 ">
        <strong class="fw-bolder">Hiện nay:</strong>${
          weatherConditions[res.weather[0].description.replace(/\s+/g, "")]
            .description
        }
      </span>
      <div class="mt-2">
        <span class="me-2"><strong class="fw-bolder">Độ ẩm:</strong> ${
          res.main.humidity
        }%</span>
        <span class="me-2"><strong class="fw-bolder">Gió:</strong> ${
          res.wind.speed
        }m/s</span> 
      </div>
    </div>
    

    <div id="img-box" class="col-lg-4 px-4 py-4 text-start">
      <img class="rounded" src="https://openweathermap.org/img/wn/${
        res.weather[0].icon
      }@4x.png" alt="" srcset="">
    </div>
  </div>
  

  
  <div class="sun-container mt-3">
    <div class="sun-box me-2 px-1">
      <img class="the-sun px-5" src="./assets/imgs/sunrise.png" alt="">
      <span>
        <p class="text-start py-2 fs-5"><strong class="fw-bolder">Giờ mặt trời mọc:</strong> ${getDateTime.getUnixTimestamp(
          res.sys.sunrise
        )}</p>
      </span>
    </div>

    <div class="sun-box ms-2 px-1">
      <img class="the-sun px-5" src="./assets/imgs/sunset.webp" alt="">
      <span>
        <p class="text-start py-2 fs-5"><strong class="fw-bolder">Giờ mặt trời lặn:</strong> ${getDateTime.getUnixTimestamp(
          res.sys.sunset
        )}</p>
      </span>
    </div>
  </div>`;

    $("#weather-box")[0].innerHTML = renderData;
  },

  renderForeCast(name, res) {
    const getWeatherItems = res.list.filter((weatherItem) => {
      return weatherItem.dt_txt.split(" ")[1] == "06:00:00";
    });

    $("#forecast-days")[0].innerHTML = name;

    const resultWeatherItems = getWeatherItems.map((getWeatherItem) => {
      return `
        <tr>
          <td class="align-middle"><i class="me-2 fa-solid fa-calendar-days"></i>${
            getWeatherItem.dt_txt.split(" ")[0]
          }</td>
          <td class="align-middle">${Math.round(
            getWeatherItem.main.temp
          )}°C</td>
          <td class="align-middle">${Math.round(
            getWeatherItem.main.feels_like
          )}°C</td>
          <td class="align-middle">${
            weatherConditions[
              getWeatherItem.weather[0].description.replace(/\s+/g, "")
            ].description
          }</td>
          <td>
            <img
              id="ContentPlaceHolder1_rptDays_Image1_0"
              class="img-roud"
              src="https://openweathermap.org/img/wn/${
                getWeatherItem.weather[0].icon
              }.png"
            />
          </td>
        </tr>
      `;
    });

    $("#table-body")[0].innerHTML = resultWeatherItems.join(" ");
  },

  renderForeCastHours(name, res) {
    const currentDay = getDateTime.getCurrentDay();

    $("#forecast-times")[0].innerHTML = name;

    const getWeatherHours = res.list.filter((getWeatherHour) => {
      return getWeatherHour.dt_txt.split(" ")[0] == `${currentDay}`;
    });

    const forecastWeatherHours = getWeatherHours.map((getWeatherHour) => {
      return `
        <tr>
        <td class="align-middle">
          <div class="mb-2">
          <i class="me-2 fa-solid fa-clock"></i>${getWeatherHour.dt_txt
            .split(" ")[1]
            .slice(0, 5)}
          </div>
          <div>
          <i class="me-2 fa-solid fa-calendar-days"></i>
          ${getWeatherHour.dt_txt.split(" ")[0]}
          </div>
        </td>
        <td class="align-middle">${Math.round(getWeatherHour.main.temp)}°C</td>
        <td class="align-middle">${Math.round(
          getWeatherHour.main.feels_like
        )}°C</td>
        <td class="align-middle">${
          weatherConditions[
            getWeatherHour.weather[0].description.replace(/\s+/g, "")
          ].description
        }</td>
        <td>
          <img
            id="ContentPlaceHolder1_rptDays_Image1_0"
            class="img-roud"
            src="https://openweathermap.org/img/wn/${
              getWeatherHour.weather[0].icon
            }.png"
          />
        </td>
      </tr>
        `;
    });

    $("#forecast-hours")[0].innerHTML = forecastWeatherHours.join(" ");
  },
};
