const addButton = document.querySelector("#addButton button");
const cards = document.querySelector(".cards");

let counter = 1;
function addACard() {
  console.log(cards.children);

  const newDiv = document.createElement("div");
  const newTextArea = document.createElement("textarea");
  newDiv.classList.add("card");
  newDiv.dataset.id = counter++;

  newDiv.appendChild(newTextArea);

  cards.insertBefore(newDiv, cards.firstChild);
}

function removeCard(idToRemove) {

  let array  = [...cards.children];
  for(let i=0;i<array.length-1;i++){

    let currID = +array[i].dataset.id;
    console.log(currID);

    if(currID === +idToRemove){
      array[i].remove();
      console.log("array index deleted : " ,i)
      break;
    }
  }

  //now assign new values from array length to 0 
  const len = [...cards.children].length;
  console.log("length : " ,len);
  
  array = [...cards.children];

  for (let i = 0; i < array.length; i++) { // Not array.length - 1
    array[i].dataset.id =`${i}`;
  }

  console.log(array);
  console.log([...cards.children]);
}

cards.addEventListener("dblclick", (e) => {
  //double click on a card and hide that bitch
  console.log("doubleCLick");
  const id = e.target.parentNode.dataset.id;

  removeCard(id);
});
addButton.addEventListener("click", () => {
  addACard();
});
