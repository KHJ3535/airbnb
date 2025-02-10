const countries = [
  { name: "대한민국", code: "KR", phoneCode: "+82" },
  { name: "미국", code: "US", phoneCode: "+1" },
  { name: "일본", code: "JP", phoneCode: "+81" },
  { name: "중국", code: "CN", phoneCode: "+86" },
  { name: "독일", code: "DE", phoneCode: "+49" },
];

const countryInput = document.querySelector(".country-input");
const countryList = document.querySelector(".country-list");
const phoneNumberInput = document.querySelector(".phone-number-input");

function updateCountryList(filteredCountries) {
  countryList.innerHTML = "";
  filteredCountries.forEach((country) => {
    const countryItem = document.createElement("div");
    countryItem.classList.add("country-item");
    countryItem.textContent = `${country.name} (${country.code})`;
    countryItem.addEventListener("click", () => {
      countryInput.value = country.name;
      phoneNumberInput.value = country.phoneCode;
      countryList.classList.remove("show");
    });
    countryList.appendChild(countryItem);
  });

  if (filteredCountries.length > 0) {
    countryList.classList.add("show");
  } else {
    countryList.classList.remove("show");
  }
}

countryInput.addEventListener("input", () => {
  const inputValue = countryInput.value.toLowerCase();
  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(inputValue)
  );
  updateCountryList(filteredCountries);
});

countryInput.addEventListener("focus", () => {
  updateCountryList(countries);
});

countryInput.addEventListener("click", () => {
  updateCountryList(countries);
});

countryInput.addEventListener("blur", () => {
  setTimeout(() => {
    countryList.classList.remove("show");
  }, 200);
});
