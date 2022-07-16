// Dùng để chuyển đổi Kelvin sang độ C

export const convertTemp = {
  convertKelvinToC(tempK) {
    const tempC = Math.floor(tempK) - 273.15;
    return Math.round(tempC);
  },
};
