const isLeapYear = (year) =>
  year % 4 == 0 && (year % 100 != 0 || year % 400 == 0) ? true : false;

const countMaxDay = () => {
  const originalInput = document.getElementById("bt2nc__duLieu").value;
  //   console.log(originalInput);

  if (originalInput != "") {
    const timeArray = originalInput.split("/").map(Number);
    const [month, year] = timeArray;

    if (month == 2) {
      if (isLeapYear(year)) {
        document.getElementById(
          "bt2nc__ketQua"
        ).innerHTML = `Tháng ${month} năm ${year} có 29 ngày.`;
      } else {
        document.getElementById(
          "bt2nc__ketQua"
        ).innerHTML = `Tháng ${month} năm ${year} có 28 ngày.`;
      }
    } else if (
      (month % 2 == 1 && month <= 7) ||
      (month % 2 == 0 && month >= 8)
    ) {
      document.getElementById(
        "bt2nc__ketQua"
      ).innerHTML = `Tháng ${month} năm ${year} có 31 ngày.`;
    } else {
      document.getElementById(
        "bt2nc__ketQua"
      ).innerHTML = `Tháng ${month} năm ${year} có 30 ngày.`;
    }
  } else {
    document.getElementById("bt2nc__ketQua").innerHTML = "";
  }
};
