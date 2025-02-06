const filterButton = document.getElementById("category__filter");
const popup = document.querySelector(".popup");
const overlay = document.createElement("div");

overlay.classList.add("overlay");
document.body.appendChild(overlay);

// 팝업 열기 (화살표 함수 사용)
filterButton.onclick = () => {
  popup.style.display = "block";
  overlay.style.display = "block";
};

// 팝업 바깥 클릭 시 닫기 (화살표 함수 사용)
overlay.onclick = (event) => {
  if (!popup.contains(event.target)) {
    popup.style.display = "none";
    overlay.style.display = "none";
  }
};

// 팝업 내부 클릭 시 닫히지 않도록 방지 (화살표 함수 사용)
popup.onclick = (event) => event.stopPropagation();
