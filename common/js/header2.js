import data from "../data/data.js";
const searchLayoutBox = document.querySelector("#searchLayout__box");
const searchLayout = document.querySelector("#searchLayout");
const searchbar = document.querySelector("#searchbar");
const headerLine = document.querySelector("#header__line");
const nav = document.querySelector("#nav");
const nav__layout = document.querySelector("#nav__layout2");
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
searchline.style.display = "flex";
searchline2.style.display = "flex";
searchGlass.style.display = "flex";
bigBox.appendChild(searchAnywhere);
bigBox.appendChild(searchline);
bigBox.appendChild(searchWeek);
bigBox.appendChild(searchline2);
bigBox.appendChild(searchGuest);
bigBox.appendChild(searchGlass);
searchbar.appendChild(bigBox);

///////
const user__icon = document.getElementById("user__icon");
const user__menu = document.querySelector(".user__menu");
user__icon.addEventListener("click", () => {
  user__menu.classList.toggle("block");
});
