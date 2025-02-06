import data from "../data/data.js";

const url = window.location.href;
const idNum = url.split("=")[1];
const newData = data.filter((x) => x.listing.id == idNum);
newData.forEach((x) => {
  const id = x.listing.id;
  console.log(id);
});
