const p = document.querySelectorAll(".para");

const plus = document.querySelectorAll(".top");
const bottom = document.querySelectorAll(".bottom");

let id1;
let id2;
let id3;

function updateDOM(id) {
  if (id == 1) {
    bottom[0].classList.toggle("hide");
  } else if (id == 2) {
    bottom[1].classList.toggle("hide");
  } else {
    bottom[2].classList.toggle("hide");
  }
}

plus.forEach((curr) => {
  curr.addEventListener("click", (e) => {
    if (e.target.matches("p")) {
      console.log(e.target.id);

      updateDOM(e.target.id);
    }
  });
});
