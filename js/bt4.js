const isEquilateral = (a, b, c) => (a === b && b === c ? true : false);

const isIsosceles = (a, b, c) => {
  for (num of [a, b, c]) {
    if ([a, b, c].indexOf(num) != [a, b, c].lastIndexOf(num)) {
      return true;
    } else {
      return false;
    }
  }
};

const isRight = (a, b, c) => {
  const sides = [Math.pow(a, 2), Math.pow(b, 2), Math.pow(c, 2)].sort(
    (a, b) => a - b
  );

  //   console.log(sides);

  if (sides[2] == sides[0] + sides[1]) {
    // console.log(true);
    return true;
  } else {
    // console.log(false);
    return false;
  }
};

const checkTriangle = () => {
  const originalInput1 = document.getElementById("bt4__duLieu--canhA").value;
  const originalInput2 = document.getElementById("bt4__duLieu--canhB").value;
  const originalInput3 = document.getElementById("bt4__duLieu--canhC").value;

  if (originalInput1 != "" && originalInput2 != "" && originalInput3 != "") {
    const canhA = originalInput1 * 1;
    const canhB = originalInput2 * 1;
    const canhC = originalInput3 * 1;

    console.log(canhA, canhB, canhC);

    if (isEquilateral(canhA, canhB, canhC)) {
      document.getElementById("bt4__ketQua").innerHTML = "Tam giác đều";
    } else if (
      isIsosceles(canhA, canhB, canhC) &&
      isRight(canhA, canhB, canhC)
    ) {
      document.getElementById("bt4__ketQua").innerHTML = "Tam giác vuông cân";
    } else if (isIsosceles(canhA, canhB, canhC)) {
      document.getElementById("bt4__ketQua").innerHTML = "Tam giác cân";
    } else if (isRight(canhA, canhB, canhC)) {
      document.getElementById("bt4__ketQua").innerHTML = "Tam giác vuông";
    } else {
      document.getElementById("bt4__ketQua").innerHTML = "Tam giác thường";
    }
  } else {
    document.getElementById("bt4__ketQua").innerHTML = "";
  }
};
