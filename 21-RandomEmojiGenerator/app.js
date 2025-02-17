const btn = document.getElementById("id-btn");

let response = [];

document.addEventListener("DOMContentLoaded", async () => {
  /* response = await fetch(
    "https://emoji-api.com/emojis?access_key=e8e3b9a983facb9e9e361dbf44c04294f0e2365a",
  ).then((data) => data.json()); */

  const myPromise = new Promise((resolve, reject) => {
    fetch(
      "https://emoji-api.com/emojis?access_key=e8e3b9a983facb9e9e361dbf44c04294f0e2365a",
    )
      .then((data) => data.json())
      .then((emojies) => resolve(emojies))
      .catch((error) => reject("Erorrjl,", error));
  });

  try {
    response = await myPromise;
  } catch (error) {
    console.log("error", error);
  }
});

async function updateDOM() {
  const pTag = document.querySelector("#id-btn p");
  const randomNumber = Math.floor(Math.random() * 1857);
  pTag.textContent = `${response[randomNumber].character}`;
  console.log(response[randomNumber]);

  const pTagDesc = document.querySelector("#content");
  console.log(pTagDesc);
  pTagDesc.innerText = `${response[randomNumber].unicodeName}`;
}

btn.addEventListener("click", () => {
  console.log("Clikced");
  updateDOM();
});
