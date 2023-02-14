// File này chứa toàn bộ functions trên web

import { requestAPI } from "./requestAPI.js";
import { renderUI } from "./renderUI.js";

const checkMyPlace = $("#check-my-place"); // Nút để xem dự bảo thời tiết ở vị trí của user
const checkWeatherInProvince = $("#btn-check")[0]; // Nút check thời tiết
const listProvinces = $("#list-provinces")[0]; // Danh sách các tỉnh

const selectProvince = $("#selectProvince")[0]; // Get select
const initialProvince = $(`option[value=${selectProvince.value}]`)[0]; // Tỉnh thành ban đầu

// Các nút di chuyển tới các phần trên page
const btnWeatherToday = $(".weather__today-btn")[0];
const btnWeatherHours = $(".weather__hours-btn")[0];
const btnWeatherDays = $(".weather__forecast-btn")[0];
const btnWeatherMap = $(".weather__map")[0];

function main() {
  // Thời tiết của tỉnh thành mặc định khi web load
  requestAPI.getCoordinatesProvince(true);

  // Kiểm tra thời tiết tại tỉnh thành đc selected
  // Khi nút "Xem" có id="btn-check" đc lick
  // Sẽ lấy value từ options của select

  $(checkWeatherInProvince).click(() => {
    const newProvince = selectProvince.value; // Lấy tên tỉnh thành mới đc chọn
    const getOption = $(`option[value=${newProvince}]`)[0]; // Get option với tên tỉnh thành
    $(initialProvince).removeAttr("selected"); // Xóa attr "selected" của tỉnh thành ban đầu
    $(getOption).attr("selected", "selected"); // Thêm attr "selected" vào tỉnh thành mới

    requestAPI.getCoordinatesProvince(false, newProvince);
  });

  $(checkMyPlace).click(() => {
    requestAPI.getIpAddress();
  });

  $(listProvinces).click((e) => {
    const indexProvince = e.target.value;
    requestAPI.getCoordinatesProvince(false, indexProvince);
  });

  // Xử lý di chuyển tói các phần trên page
  $(btnWeatherToday).click(() => {
    $(document).scrollTop(200);
  });

  $(btnWeatherHours).click(() => {
    $(document).scrollTop(800);
  });

  $(btnWeatherDays).click(() => {
    $(document).scrollTop(1200);
  });

  $(btnWeatherMap).click(() => {
    $(document).scrollTop(1750);
  });
}

main();
