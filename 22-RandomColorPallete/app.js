const container = document.querySelector(".main-container");

const generateColor = () => {
  const chars = "0123456789abcdef";
  const length = 6;

  let color = "";
  for (let i = 0; i < length; i++) {
    //generate random number
    const rn = Math.floor(Math.random() * chars.length);
    color += chars[rn];
  }

  return color;


/*   const color = randomColor(); */
  return color;
};


function randomColor() {
  const chars = "0123456789abcdef";
  const colorCodeLength = 6;
  let colorCode = "";
  for (let index = 0; index < colorCodeLength; index++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    colorCode += chars.substring(randomNum, randomNum + 1);
  }
  return colorCode;
}


function updateDOM() {
  for (let i = 0; i < 30; i++) {
    const newCard = document.createElement("div");
    newCard.classList.add("card");
    //generate Random color #ABCDEF
    const color = generateColor();
    const newH1 = document.createElement("h1");

    newH1.textContent = `#${color}`;
    newH1.id = "Content";

    newCard.style.backgroundColor = `#${color}`;
    newCard.style.color = "white";

    console.log(newH1);
    newCard.appendChild(newH1);
    container.appendChild(newCard);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  updateDOM();
});
