// 요소 선택
const searchLayoutBox = document.querySelector("#searchLayout__box");
const searchLayout = document.querySelector("#searchLayout");
const searchbar = document.querySelector("#searchbar");
const headerLine = document.querySelector("#header__line");
const nav = document.querySelector("#nav");
const nav__layout = document.querySelector("#nav__layout");
const searchLayout__room = document.querySelector("#searchLayout__room");
const searchLayout__play = document.querySelector("#searchLayout__play");
const searchbar__travel = document.querySelector("#searchbar__travel");
const searchbar__checkin = document.querySelector("#searchbar__checkin");
const searchbar__checkout = document.querySelector("#searchbar__checkout");
const searchbar__traveler = document.querySelector("#searchbar__traveler");
const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");
const line3 = document.querySelector(".line3");
//생성

const bigBox = document.createElement("div");
bigBox.style.display = "flex";
bigBox.style.cursor = "pointer";
bigBox.style.gap = "13px";
bigBox.style.paddingLeft = "30px";
bigBox.style.alignItems = "center";

const searchAnywhere = document.createElement("div");
const searchWeek = document.createElement("div");
const searchGuest = document.createElement("div");
const searchGlass = document.createElement("div");
const searchline = document.createElement("div");
const searchline2 = document.createElement("div");

searchAnywhere.innerHTML = "어디든지";
searchWeek.innerHTML = "언제든 일주일";
searchGuest.innerHTML = "게스트 추가";
searchGlass.innerHTML = '<i class="fas fa-search"></i>';

searchAnywhere.style.display = "none";
searchWeek.style.display = "none";
searchGuest.style.display = "none";
searchline.style.display = "none";
searchline2.style.display = "none";
searchGlass.style.display = "none";

searchGlass.style.fontSize = "13px";
searchGlass.style.color = "white";
searchGlass.style.padding = "12px";
searchGlass.style.backgroundColor = "#ff385c";
searchGlass.style.borderRadius = "100%";

searchGuest.style.color = "#6a6a6a";
searchline.style.width = "1px";
searchline.style.height = "23px";
searchline.style.backgroundColor = "#6a6a6a";
searchline2.style.width = "1px";
searchline2.style.height = "23px";
searchline2.style.backgroundColor = "#6a6a6a";

bigBox.appendChild(searchAnywhere);
bigBox.appendChild(searchline);
bigBox.appendChild(searchWeek);
bigBox.appendChild(searchline2);
bigBox.appendChild(searchGuest);
bigBox.appendChild(searchGlass);
searchbar.appendChild(bigBox);

// 스크롤 이벤트 리스너 추가
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    searchLayout.classList.add("slideup");
    headerLine.classList.add("slideup");
    nav.classList.add("navcut");
    nav__layout.classList.add("navcut");
    searchbar.classList.add("searchbar__small");
    searchbar__travel.style.display = "none";
    searchbar__checkin.style.display = "none";
    searchbar__checkout.style.display = "none";
    searchbar__traveler.style.display = "none";

    line1.style.display = "none";
    line2.style.display = "none";
    line3.style.display = "none";

    searchAnywhere.style.display = "flex";
    searchWeek.style.display = "flex";
    searchGuest.style.display = "flex";
    searchline.style.display = "flex";
    searchline2.style.display = "flex";
    searchGlass.style.display = "flex";
  } else {
    searchLayout.classList.remove("slideup");
    headerLine.classList.remove("slideup");
    nav.classList.remove("navcut");
    nav__layout.classList.remove("navcut");
    searchbar.classList.remove("searchbar__small");
    searchbar__travel.style.display = "flex";
    searchbar__checkin.style.display = "flex";
    searchbar__checkout.style.display = "flex";
    searchbar__traveler.style.display = "flex";
    line1.style.display = "block";
    line2.style.display = "block";
    line3.style.display = "block";

    searchAnywhere.style.display = "none";
    searchWeek.style.display = "none";
    searchGuest.style.display = "none";
    searchline.style.display = "none";
    searchline2.style.display = "none";
    searchGlass.style.display = "none";
  }
});
searchbar__travel.addEventListener("mouseover", () => {
  line1.classList.add("opacityLine");
});
searchbar__travel.addEventListener("mouseout", () => {
  line1.classList.remove("opacityLine");
});

searchbar__checkin.addEventListener("mouseover", () => {
  line2.classList.add("opacityLine");
  line1.classList.add("opacityLine");
});

searchbar__checkin.addEventListener("mouseout", () => {
  line2.classList.remove("opacityLine");
  line1.classList.remove("opacityLine");
});

searchbar__checkout.addEventListener("mouseover", () => {
  line3.classList.add("opacityLine");
  line2.classList.add("opacityLine");
});
searchbar__checkout.addEventListener("mouseout", () => {
  line3.classList.remove("opacityLine");
  line2.classList.remove("opacityLine");
});
searchbar__traveler.addEventListener("mouseover", () => {
  line3.classList.add("opacityLine");
});
searchbar__traveler.addEventListener("mouseout", () => {
  line3.classList.remove("opacityLine");
});
