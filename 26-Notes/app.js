const addButton = document.querySelector("#addButton button");
const cards = document.querySelector(".cards");

let counter = 1;
function addACard(where, elem) {
  console.log("ELEM : ", elem)
  const newDiv = document.createElement("div");
  const newTextArea = document.createElement("textarea");
  newDiv.classList.add("card");
  newTextArea.id = "textArea-text";
  if (where === "DOM") {
    let content = elem.content;
    let id = elem.id;
    console.log("Content : ", content);
    console.log("ID : ", id);

    newDiv.dataset.id = +id;
    newTextArea.textContent = content;
  } else {
    newDiv.dataset.id = counter++;
  }

  newDiv.appendChild(newTextArea);
  cards.insertBefore(newDiv, cards.firstChild);
  //Create a object for that specific card and push it to the LocalSotrage
}

function sortAndRenameStorage() {
    // Get all items from localStorage and convert to array of key-value pairs
    const items = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith('Content-')) {
            const value = JSON.parse(localStorage.getItem(key));
            items.push({ key, value });
        }
    }

    // Sort items based on the id in the value
    items.sort((a, b) => {
        const idA = parseInt(a.value.id);
        const idB = parseInt(b.value.id);
        return idA - idB;
    });

    // Clear existing Content- items from localStorage
    for (let i = localStorage.length - 1; i >= 0; i--) {
        const key = localStorage.key(i);
        if (key.startsWith('Content-')) {
            localStorage.removeItem(key);
        }
    }

    // Add items back with new keys and sequential IDs
    items.forEach((item, index) => {
        const newKey = `Content-${index + 1}`;
        const newValue = {
            id: (index + 1).toString(),
            content: item.value.content
        };
        localStorage.setItem(newKey, JSON.stringify(newValue));
    });

    return items.length; // Return number of items processed
}

// Example usage:
// sortAndRenameStorage();
/*
// To verify the results:
function displayStorage() {
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith('Content-')) {
            console.log(`${key}: ${localStorage.getItem(key)}`);
        }
    }
} */




function retainInfo() {}

function pushStorage(e) {
  //get data from specific textarea

  const content = e.target.value;
  const id = e.target.parentElement.dataset.id;

  let object = {
    id: id,
    content: content,
  };

  localStorage.setItem(`Content-${id}`, JSON.stringify(object));
}

document.addEventListener("input", () => {
  const textArea = document.querySelector("#textArea-text");
  textArea.addEventListener("input", function (e) {
    console.log("Value ", e.target.value);
    console.log("Parent ID : ", e.target.parentElement.dataset.id);

    pushStorage(e);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  //loop through the fucking localstorage and display a card for everyone of it
  const l = localStorage.length;
  for (let i = 0; i < l; i++) {

    // console.log( JSON.parse(localStorage.getItem(`Content-${i+1}`)));
    addACard("DOM", JSON.parse(localStorage.getItem(`Content-${i+1}`)));
  }
});

function removeCard(idToRemove) {
  let array = [...cards.children];
  for (let i = 0; i < array.length - 1; i++) {
    let currID = +array[i].dataset.id;

    if (currID === +idToRemove) {
      array[i].remove();
      localStorage.removeItem(`Content-${currID}`);
      break;
    }
  }

  //now assign new values from array length to 0

  array = [...cards.children];

  for (let i = 0; i < array.length; i++) {
    // Not array.length - 1
    array[i].dataset.id = `${i}`;
    console.log(array[i]);
  }

   
  //loop through the localstroage and rearrange the Content ID 
  sortAndRenameStorage();
  displayStorage();




}

cards.addEventListener("dblclick", (e) => {
  //double click on a card and hide that bitch
  const id = e.target.parentNode.dataset.id;

  removeCard(id);
});
addButton.addEventListener("click", () => {
  addACard();
});
