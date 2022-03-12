const suffix = ["trăm", "mươi", "lẻ"];

const readEachNum = (previousNum, currentNum, currentIt) => {
  let numRead = null;
  switch (currentNum) {
    case 1:
      if (currentIt == 1) {
        numRead = "mười";
      } else if (currentIt == 0 || previousNum == 1 || previousNum == 0) {
        numRead = "một";
      } else {
        numRead = "mốt";
      }
      break;
    case 2:
      numRead = "hai";
      break;
    case 3:
      numRead = "ba";
      break;
    case 4:
      numRead = "bốn";
      break;
    case 5:
      numRead = currentIt == 2 && previousNum != 0 ? "lăm" : "năm";
      break;
    case 6:
      numRead = "sáu";
      break;
    case 7:
      numRead = "bảy";
      break;
    case 8:
      numRead = "tám";
      break;
    case 9:
      numRead = "chín";
      break;
    default:
      if (currentIt == 1) {
        numRead = suffix[2];
      }
  }
  return numRead;
};

const readNum = () => {
  const originalInput = document.getElementById("bt3nc__duLieu").value;

  if (originalInput != "" && originalInput.length == 3) {
    const numArr = originalInput.toString().split("").map(Number);

    let readNum = [];
    numArr.forEach((num, i, arr) => {
      const word = readEachNum(arr[i - 1], num, i);
      if (word != null) {
        readNum.push(word);
      }
      if (
        i != 2 &&
        readNum[readNum.length - 1] != "lẻ" &&
        readNum[readNum.length - 1] != "mười"
      ) {
        readNum.push(suffix[i]);
      }
    });

    if (readNum[readNum.length - 1] == "lẻ") {
      readNum.pop();
    }

    document.getElementById("bt3nc__ketQua").innerHTML =
      readNum.join(" ").charAt(0).toUpperCase() + readNum.join(" ").slice(1);
  } else {
    document.getElementById("bt3nc__ketQua").innerHTML = "";
  }
};
