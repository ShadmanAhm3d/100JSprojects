function getDiceFace(rollResult) {
  switch (rollResult) {
    case 1:
      return "&#9856;";
    case 2:
      return "&#9857;";
    case 3:
      return "&#9858;";
    case 4:
      return "&#9859;";
    case 5:
      return "&#9860;";
    case 6:
      return "&#9861;";
    default:
      return "";
  }
}

let globalCounter = 1;
const diceArea = document.getElementById("dice-area");
const resultArea = document.querySelector(".result")
console.log(resultArea)
function displayFace(result) {
  diceArea.innerHTML = `<p> ${result} </p>`;

  const newDiv= document.createElement("div");
  newDiv.className="newClass";
  const pright = document.createElement("p");
  const pleft = document.createElement("p");

  pleft.innerText = `Roll : ${globalCounter}`;
  pright.innerHTML = ` ${result} `;
  pright.style.fontSize="70px"



  newDiv.appendChild(pleft);
  newDiv.appendChild(pright);


  resultArea.appendChild(newDiv);
  globalCounter++;

  
}

const RollBtn = document.getElementById("btntoRoll");
RollBtn.addEventListener("click", () => {
  //generate a number between 1 to 6

  const face = Math.floor(Math.random() * 6) + 1;
  const result = getDiceFace(face);
  displayFace(result);
});
