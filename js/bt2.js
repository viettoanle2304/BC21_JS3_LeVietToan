document.addEventListener("click", (e) => {
  const element = e.target;

  if (element.tagName == "BUTTON" && element.parentNode.id == "chooseMember") {
    const member = element.value;
    // console.log(member);

    switch (member) {
      case "B":
        document.getElementById("bt2__ketQua").innerHTML =
          "Bố đang sử dụng máy tính. Chào Bố!";
        break;
      case "M":
        document.getElementById("bt2__ketQua").innerHTML =
          "Mẹ đang sử dụng máy tính. Chào Mẹ!";
        break;
      case "A":
        document.getElementById("bt2__ketQua").innerHTML =
          "Anh trai đang sử dụng máy tính. Chào Anh trai!";
        break;
      case "E":
        document.getElementById("bt2__ketQua").innerHTML =
          "Em gái đang sử dụng máy tính. Chào Em gái!";
        break;
    }
  }
});
