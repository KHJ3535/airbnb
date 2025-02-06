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
bigBox.style.gap = "40px";
bigBox.style.paddingLeft = "30px";
const searchAnywhere = document.createElement("div");
const searchline = document.createElement("div");
const searchWeek = document.createElement("div");
const searchline2 = document.createElement("div");
const searchGuest = document.createElement("div");
searchAnywhere.innerHTML = "어디든지";
searchWeek.innerHTML = "언제든 ";
searchGuest.innerHTML = "게스트 추가";

bigBox.appendChild(searchAnywhere);
bigBox.appendChild(searchWeek);
bigBox.appendChild(searchGuest);
searchbar.appendChild(bigBox);

// 스크롤 이벤트 리스너 추가
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    searchLayout.classList.add("slideup");
    headerLine.classList.add("slideup2");
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
  } else {
    searchLayout.classList.remove("slideup");
    headerLine.classList.remove("slideup2");
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
  }
});
