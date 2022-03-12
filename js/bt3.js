const countOddEven = () => {
  const originalInput = document.getElementById("bt3__duLieu").value;

  if (originalInput != "") {
    const numArr = originalInput.split(",").map(Number);
    // console.log(numArr);

    const countOdd = numArr.filter((val) => val % 2 == 1).length;
    const countEven = numArr.filter((val) => val % 2 == 0).length;

    // console.log(`Lẻ: ${countOdd} \n Chẵn: ${countEven}`);

    document.getElementById(
      "bt3__ketQua--odd"
    ).innerHTML = `${countOdd} số lẻ và `;
    document.getElementById(
      "bt3__ketQua--even"
    ).innerHTML = `${countEven} số chẵn`;
  } else {
    document.getElementById("bt3__ketQua--odd").innerHTML = "";
    document.getElementById("bt3__ketQua--even").innerHTML = "";
  }
};
