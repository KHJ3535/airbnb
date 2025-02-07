import data from "../data/data.js";
const gridCardList = document.getElementById("grid__card--list");
const camp = document.getElementById("camping");
const view = document.getElementById("bestview");
const hanok = document.getElementById("hanok");
const category = document.querySelectorAll(".main__category li");

category.forEach((x) => {
  x.addEventListener("click", () => {
    const selectCategory = document.querySelector(".category__select");
    if (selectCategory) {
      selectCategory.classList.remove("category__select");
    }
    x.classList.add("category__select");
  });
});

/////////////////////////////////////////////// 그리드

data.forEach((x) => {
  const card = document.createElement("a");
  const id = x.listing.id;
  const tag = Number(x.listingParamOverrides.categoryTag.split(":")[1]);
  const title = x.listing.title;
  const primaryLine = x.listing.structuredContent.primaryLine[0].body;
  const mapSecondaryLine = x.listing.structuredContent.mapSecondaryLine[0].body;
  const price = x.structuredDisplayPrice.primaryLine.price;
  const qualifier = x.structuredDisplayPrice.primaryLine.qualifier;
  const reviewSnippet = x.listing.structuredContent.reviewSnippet?.[0]
    ? `<span>게스트 한마디 </span>"<span class="black">${x.listing.structuredContent.reviewSnippet[0].body}</span>"`
    : "";
  const contextualPictures = x.contextualPictures[0].picture;
  const avgRatingLocalized =
    String(x.avgRatingLocalized) != "null"
      ? `<i class="fa-solid fa-star"></i> ` + x.avgRatingLocalized
      : "";
  const badges =
    x.badges.length > 0
      ? `<p class="card__badges">${x.badges[0].text}</p>`
      : "";

  card.innerHTML = `
    <a class="grid__card">
      <div class="grid__card--img">
        <img src="${contextualPictures}">
        ${badges}
        <i class="card__heart fa-regular fa-heart"></i>
      </div>
      <div class="grid__card--info">
        <div class="card__top">
          <span class="card__title">${title}</span>
          <span class="card__rate">${avgRatingLocalized}</span>
        </div>
        <p class="card__primaryLine">${primaryLine}</p>
        <p class="card__mapSecondaryLine">${mapSecondaryLine}</p>
        <p class="card__reviewSnippet">${reviewSnippet}</p>
        <p><span class="card__price">${price}</span> <span class="qualifier">${qualifier}</span></p>
      </div>
    </a>
  `;

  card.addEventListener("click", (e) => {
    location.href = `PJT/index.html?id=${id}`;
  });
  gridCardList.appendChild(card);

  camp.addEventListener("click", (e) => {
    gridCardList.innerHTML = "";
    const card = data.filter(
      (x) => Number(x.listingParamOverrides.categoryTag.split(":")[1]) == 634
    );

    card.forEach((v) => {
      const card = document.createElement("a");
      card.classList.add("grid__card");

      const contextualPictures = v.contextualPictures.map((p) => p.picture); // 여러 이미지 처리
      const title = v.listing.title;
      const primaryLine = v.listing.structuredContent.primaryLine[0].body;
      const mapSecondaryLine =
        v.listing.structuredContent.mapSecondaryLine[0].body;
      const price = v.structuredDisplayPrice.primaryLine.price;
      const qualifier = v.structuredDisplayPrice.primaryLine.qualifier;
      const avgRatingLocalized =
        String(v.avgRatingLocalized) != "null"
          ? `<i class="fa-solid fa-star"></i> ` + v.avgRatingLocalized
          : "";
      const badges =
        v.badges.length > 0
          ? `<p class="card__badges">${v.badges[0].text}</p>`
          : "";

      card.innerHTML = `
        <div class="grid__card--img">
          ${
            createSlide(contextualPictures).outerHTML
          } <!-- Insert the slider -->
          ${badges}
          <i class="card__heart fa-regular fa-heart"></i>
        </div>
        <div class="grid__card--info">
          <div class="card__top">
            <span class="card__title">${title}</span>
            <span class="card__rate">${avgRatingLocalized}</span>
          </div>
          <p class="card__primaryLine">${primaryLine}</p>
          <p class="card__mapSecondaryLine">${mapSecondaryLine}</p>
          <p><span class="card__price">${price}</span> <span class="qualifier">${qualifier}</span></p>
        </div>
      `;

      card.addEventListener("click", (e) => {
        location.href = `PJT/index.html?id=${id}`;
      });

      gridCardList.appendChild(card);
    });
  });

  view.addEventListener("click", (e) => {
    gridCardList.innerHTML = "";
    const card = data.filter(
      (x) => Number(x.listingParamOverrides.categoryTag.split(":")[1]) == 8536
    );

    card.forEach((v) => {
      const card = document.createElement("a");
      card.classList.add("grid__card");

      const contextualPictures = v.contextualPictures.map((p) => p.picture); // 여러 이미지 처리
      const title = v.listing.title;
      const primaryLine = v.listing.structuredContent.primaryLine[0].body;
      const mapSecondaryLine =
        v.listing.structuredContent.mapSecondaryLine[0].body;
      const price = v.structuredDisplayPrice.primaryLine.price;
      const qualifier = v.structuredDisplayPrice.primaryLine.qualifier;
      const avgRatingLocalized =
        String(v.avgRatingLocalized) != "null"
          ? `<i class="fa-solid fa-star"></i> ` + v.avgRatingLocalized
          : "";
      const badges =
        v.badges.length > 0
          ? `<p class="card__badges">${v.badges[0].text}</p>`
          : "";

      card.innerHTML = `
        <div class="grid__card--img">
          ${
            createSlide(contextualPictures).outerHTML
          } <!-- Insert the slider -->
          ${badges}
          <i class="card__heart fa-regular fa-heart"></i>
        </div>
        <div class="grid__card--info">
          <div class="card__top">
            <span class="card__title">${title}</span>
            <span class="card__rate">${avgRatingLocalized}</span>
          </div>
          <p class="card__primaryLine">${primaryLine}</p>
          <p class="card__mapSecondaryLine">${mapSecondaryLine}</p>
          <p><span class="card__price">${price}</span> <span class="qualifier">${qualifier}</span></p>
        </div>
      `;

      card.addEventListener("click", (e) => {
        location.href = `PJT/index.html?id=${id}`;
      });

      gridCardList.appendChild(card);
    });
  });

  hanok.addEventListener("click", (e) => {
    gridCardList.innerHTML = "";
    const card = data.filter(
      (x) => Number(x.listingParamOverrides.categoryTag.split(":")[1]) == 8653
    );

    card.forEach((v) => {
      const card = document.createElement("a");
      card.classList.add("grid__card");

      const contextualPictures = v.contextualPictures.map((p) => p.picture); // 여러 이미지 처리
      const title = v.listing.title;
      const primaryLine = v.listing.structuredContent.primaryLine[0].body;
      const mapSecondaryLine =
        v.listing.structuredContent.mapSecondaryLine[0].body;
      const price = v.structuredDisplayPrice.primaryLine.price;
      const qualifier = v.structuredDisplayPrice.primaryLine.qualifier;
      const avgRatingLocalized =
        String(v.avgRatingLocalized) != "null"
          ? `<i class="fa-solid fa-star"></i> ` + v.avgRatingLocalized
          : "";
      const badges =
        v.badges.length > 0
          ? `<p class="card__badges">${v.badges[0].text}</p>`
          : "";

      card.innerHTML = `
        <div class="grid__card--img">
          ${
            createSlide(contextualPictures).outerHTML
          } <!-- Insert the slider -->
          ${badges}
          <i class="card__heart fa-regular fa-heart"></i>
        </div>
        <div class="grid__card--info">
          <div class="card__top">
            <span class="card__title">${title}</span>
            <span class="card__rate">${avgRatingLocalized}</span>
          </div>
          <p class="card__primaryLine">${primaryLine}</p>
          <p class="card__mapSecondaryLine">${mapSecondaryLine}</p>
          <p><span class="card__price">${price}</span> <span class="qualifier">${qualifier}</span></p>
        </div>
      `;

      card.addEventListener("click", (e) => {
        location.href = `PJT/index.html?id=${id}`;
      });

      gridCardList.appendChild(card);
    });
  });
});
