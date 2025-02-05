import campdata from "./data/campdata.js";
const gridCardList = document.getElementById("grid__card--list");

campdata.forEach((x) => {
  const card = document.createElement("div");
  const title = x.listing.title;
  const primaryLine = x.listing.structuredContent.primaryLine[0].body;
  const mapSecondaryLine = x.listing.structuredContent.mapSecondaryLine[0].body;
  const accessibilityLabel =
    x.structuredDisplayPrice.primaryLine.accessibilityLabel;
  const contextualPictures = x.contextualPictures[0].picture;
  card.innerHTML = `
      <div class="grid__card">
        <div class="grid__card--img">
            <img src="${contextualPictures}" alt="card__img"/>
        </div>
        <span class="card__title">제목: ${title}</span>
        <span class="card__primaryLine">거리: ${primaryLine}</span>
        <span>날짜: ${mapSecondaryLine}</span>
        <span>가격: ${accessibilityLabel}</span>
      </div>
    `;

  gridCardList.appendChild(card);
});
