const imageHolder = document.querySelector(".image-container");

const loadMore = document.getElementById("loadMore");

console.log(loadMore);

async function updateDOM() {
  const res = await fetch("https://picsum.photos/300");
  console.log(res);
  console.log("here");

  const div = document.createElement("div");
  const x = document.createElement("img");
  div.className = "image";
  x.className = "actualImage";
  x.src = res.url;
  console.log(x);

  div.appendChild(x);
  imageHolder.appendChild(div);
}

loadMore.addEventListener("click", () => {
  for (let i = 0; i < 10; i++) {
    updateDOM();
  }
});



document.addEventListener("DOMContentLoaded", () => {
  for (let i = 0; i < 10; i++) {
    updateDOM();
  }
});
