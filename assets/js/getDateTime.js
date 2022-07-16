// File dùng để lấy dữ liệu về ngày tháng, thời gian...

export const getDateTime = {
  // get Obj Date()
  date: new Date(),

  getCurrentDay() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + "-" + mm + "-" + dd;
    return today;
  },

  // Get day/month/year function
  getDate() {
    const currentDate = this.date;
    return currentDate.toLocaleDateString();
  },

  // Get Hour/minutes function
  getTime() {
    const getHours = this.date.getHours(); // Get current hour
    const getMinutes = this.date.getMinutes(); // Get current minutes

    return `${getHours}:${getMinutes}`;
  },

  getUnixTimestamp(unixTime) {
    const unixTimestamp = new Date(unixTime * 1000);
    const commonTime = unixTimestamp.toLocaleTimeString();

    return commonTime;
  },
};
