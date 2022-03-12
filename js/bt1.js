const sortNum = () => {
  const originalInput = document.getElementById("bt1__duLieu").value;

  if (originalInput != "") {
    const numArr = originalInput.split(",").map(Number);
    // console.log(numArr);

    const sortedArr = numArr.sort((a, b) => a - b);

    document.getElementById("bt1__ketQua").innerHTML = sortedArr.join(", ");
  } else {
    document.getElementById("bt1__ketQua").innerHTML = "";
  }
};
