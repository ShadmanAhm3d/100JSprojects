const mouseX = document.querySelector("#mouse-x");
const mouseY = document.querySelector("#mouse-y");
const valX = document.querySelector("#val-x");
const valY = document.querySelector("#val-y");

const updateDOM = (e) => {

  valX.textContent = `${e.clientX}`
  valY.textContent = `${e.clientY}`

};

document.addEventListener("mousemove", (e) => {
  updateDOM(e);
});
