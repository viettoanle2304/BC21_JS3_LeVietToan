const sortNum = () => {
  const numArr = document
    .getElementById("bt1__duLieu")
    .value.split(",")
    .map(Number);

  // console.log(numArr);

  const sortedArr = numArr.sort((a, b) => a - b);

  document.getElementById("bt1__ketQua").innerHTML = sortedArr.join(", ");
};
