const tog = document.querySelector(".card_btn-hume");
const hidden = document.querySelector(".card_btn-hidden-box");

// const hidden1 = document.querySelectorAll("card_btn-hume-hidden").forEach();

let check = false;

tog.addEventListener("click", () => {
  if (!check) {
    hidden.style.display = "block";
    check = true;
  } else {
    hidden.style.display = "none";
    check = false;
  }
});
