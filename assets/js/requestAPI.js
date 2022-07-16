// Module được dùng cho các request để lấy data
// Dùng cả Ajax và Fetch

import { renderUI } from "./renderUI.js";
import { getDateTime } from "./getDateTime.js";

export const requestAPI = {
  apiKey: `cc61fa1088244ea453b2f34716b81981`,

  getCoordinatesProvince(defaultProvinces = false, indexProvince) {
    const provinceNum = $("#selectProvince")[0].value;

    $.ajax({
      type: "GET",
      url: "../assets/database/provinces.json",
      dataType: "json",

      success: (datas) => {
        datas.map((data) => {
          if (
            (defaultProvinces && data.index == provinceNum) ||
            data.index == indexProvince
          ) {
            const lag = data.lat;
            const lng = data.lng;
            const name = data.name;
            this.getWeather(name, lag, lng);
          }
        });
      },
    });
  },

  getWeather(name, lat, lon) {
    const getCurrentWeatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.apiKey}&units=metric`;
    const getForeCastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&&lon=${lon}&appid=${this.apiKey}&units=metric`;

    // Render box weather chính
    fetch(getCurrentWeatherURL)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        renderUI.renderWeatherBox(name, res);
      });

    // Render ra forecast 5 ngày tới
    fetch(getForeCastURL)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        renderUI.renderForeCast(name, res);
        renderUI.renderForeCastHours(name, res);
      });
  },

  getLocaltionFromIpAddress(ipAddress) {
    fetch(`http://ip-api.com/json/${ipAddress}`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        const cityName = res.city;
        const latLocaltion = res.lat;
        const lonLocaltion = res.lon;

        this.getWeather(cityName, latLocaltion, lonLocaltion);
      });
  },

  getIpAddress() {
    // Lấy địa chỉ Ip của người dùng
    fetch("https://api.ipify.org?format=json")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        this.getLocaltionFromIpAddress(res.ip);
      });
  },
};
