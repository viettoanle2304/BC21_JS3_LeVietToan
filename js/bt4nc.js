const tinhKhoangCach = (toaDo1, toaDo2) =>
  Math.sqrt(
    Math.pow(toaDo1[0] - toaDo2[0], 2) + Math.pow(toaDo1[1] - toaDo2[1], 2)
  );

const findMaxDistance = () => {
  // Xử lí dữ liệu nhận được
  const toaDoArr = [];
  const originalCoorUni = document.getElementById(
    "bt4nc__duLieu--toaDoTruong"
  ).value;

  for (let i = 0; i < 3; ++i) {
    const toaDo = document.getElementById(`bt4nc__duLieu--toaDo${i + 1}`).value;
    toaDoArr.push(
      toaDo == ""
        ? null
        : toaDo
            .replaceAll(/[^0-9,]/g, "")
            .split(",")
            .map(Number)
    );
  }

  if (
    toaDoArr.filter((val) => val == null).length != 3 &&
    originalCoorUni != ""
  ) {
    //   Xử lí dữ liệu nhận được
    const toaDoTruong = originalCoorUni
      .replaceAll(/[^0-9,]/g, "")
      .split(",")
      .map(Number);

    const list = [];
    for (let i = 0; i < 3; ++i) {
      const tenSinhVien = document.getElementById(
        `bt4nc__duLieu--hoTen${i + 1}`
      ).value;
      //   console.log(tenSinhVien);
      list.push({
        index: i,
        name: tenSinhVien == "" ? `Sinh viên ${i + 1}` : tenSinhVien,
        distance:
          toaDoArr[i] != null ? tinhKhoangCach(toaDoArr[i], toaDoTruong) : 0,
      });
    }

    console.log(list);
    // End

    // Tìm sinh viên xa trường nhất
    const sinhVienXaNhat = [...list].sort((a, b) => a.distance - b.distance)[2];
    console.log(sinhVienXaNhat);
    // End

    // In kết quả
    document.getElementById("bt4nc__ketQua").innerHTML = `${
      sinhVienXaNhat.name
    } xa trường nhất - khoảng cách đến trường: ${sinhVienXaNhat.distance.toFixed(
      2
    )} (units)`;
    // End
  } else {
    document.getElementById("bt4nc__ketQua").innerHTML = "";
  }
};
