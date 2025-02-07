const peopleToggle = document.querySelector(".stickybox__people");
const peopleDropdown = document.querySelector(".stickybox__people--dropdown");
const chevronIcon = document.querySelector(".stickybox__people i");
const guestText = document.querySelector(".guest__count");
const adultCount = document.querySelector(".adult__count");
const btnPlus = document.querySelector(".btn-plus");
const btnMinus = document.querySelector(".btn-minus");
let guestNumber = 0;
let adultNumber = 0;

peopleToggle.addEventListener("click", (event) => {
  event.stopPropagation();

  const open = peopleDropdown.classList.contains("active");

  peopleDropdown.classList.toggle("active", !open);
  chevronIcon.classList.toggle("fa-chevron-up", !open);
  chevronIcon.classList.toggle("fa-chevron-down", open);
});

btnPlus.addEventListener("click", () => {
  adultNumber++;
  guestNumber = adultNumber;
  guestText.innerText = guestNumber;
  adultCount.innerText = adultNumber;
});

btnMinus.addEventListener("click", () => {
  if (adultNumber > 0) {
    adultNumber--;
    guestNumber = adultNumber;
    guestText.innerText = guestNumber;
    adultCount.innerText = adultNumber;
  }
});
