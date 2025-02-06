const filter = document.getElementById("filter__popup");
const popup = document.querySelector("popup");
filter.addEventListener("click", () => {
  popup.classList.add("display__block");
});
