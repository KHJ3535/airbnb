const categoryContainer = document.getElementById("main__category");
const leftButton = document.getElementById("slideLeft");
const rightButton = document.getElementById("slideRight");

const amount = 1200;

const updateScrollButtons = () => {
  const scrollLeft = categoryContainer.scrollLeft;
  const scrollWidth = categoryContainer.scrollWidth;
  const clientWidth = categoryContainer.clientWidth;

  if (scrollLeft <= 0) {
    leftButton.style.opacity = "0";
    leftButton.style.visibility = "hidden";
  } else {
    leftButton.style.opacity = "1";
    leftButton.style.visibility = "visible";
  }

  if (scrollLeft + clientWidth >= scrollWidth) {
    rightButton.style.opacity = "0";
    rightButton.style.visibility = "hidden";
  } else {
    rightButton.style.opacity = "1";
    rightButton.style.visibility = "visible";
  }
};

leftButton.addEventListener("click", () => {
  categoryContainer.scrollBy({ left: -amount, behavior: "smooth" });
});

rightButton.addEventListener("click", () => {
  categoryContainer.scrollBy({ left: amount, behavior: "smooth" });
});

categoryContainer.addEventListener("scroll", updateScrollButtons);
updateScrollButtons();
