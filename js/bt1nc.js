const isLeap = (year) =>
  year % 4 == 0 && (year % 100 != 0 || year % 400 == 0) ? true : false;

const maxDay = (month, year) => {
  if (month == 2) {
    if (isLeap(year)) {
      return 29;
    } else {
      return 28;
    }
  } else if ((month % 2 == 1 && month <= 7) || (month % 2 == 0 && month >= 8)) {
    return 31;
  } else {
    return 30;
  }
};

const nextDate = (timeArr) => {
  const nextDateArr = [];
  const [day, month, year] = timeArr;

  if (day == maxDay(month, year)) {
    nextDateArr.push(1);
    if (month == 12) {
      nextDateArr.push(1);
      nextDateArr.push(year + 1);
    } else {
      nextDateArr.push(month + 1);
      nextDateArr.push(year);
    }
  } else {
    nextDateArr.push(day + 1);
    nextDateArr.push(month);
    nextDateArr.push(year);
  }

  return nextDateArr.map((num) => num.toString().padStart(2, 0)).join("/");
};

const preDate = (timeArr) => {
  const preDateArr = [];
  const [day, month, year] = timeArr;

  if (day == 1) {
    if (month == 1) {
      preDateArr.push(maxDay(12, year - 1));
      preDateArr.push(12);
      preDateArr.push(year - 1);
    } else {
      preDateArr.push(maxDay(month - 1, year));
      preDateArr.push(month - 1);
      preDateArr.push(year);
    }
  } else {
    preDateArr.push(day - 1);
    preDateArr.push(month);
    preDateArr.push(year);
  }

  return preDateArr.map((num) => num.toString().padStart(2, 0)).join("/");
};

const nextAndPreDate = () => {
  const originalInput = document.getElementById("bt1nc__duLieu").value;
  //   console.log(originalInput);

  if (originalInput != "") {
    const timeArray = originalInput.split("/").map(Number);

    const nextDay = nextDate(timeArray);
    const preDay = preDate(timeArray);

    document.getElementById("bt1nc__ketQua--nextDate").innerHTML = nextDay;
    document.getElementById("bt1nc__ketQua--preDate").innerHTML = preDay;
  } else {
    document.getElementById("bt1nc__ketQua--nextDate").innerHTML = "";
    document.getElementById("bt1nc__ketQua--preDate").innerHTML = "";
  }
};
