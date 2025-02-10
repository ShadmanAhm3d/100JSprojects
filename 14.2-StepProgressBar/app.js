const buttonsContainer = document.querySelector(".buttons");
const balls = document.querySelectorAll(".balls .ball");
const lines = document.querySelectorAll(".line");

console.log(lines);

let currindex = 0; // Start from 0 to match the first ball
let linesIndex = 0;

function updateDom(call) {
  if (call === "right") {
    if (currindex < balls.length - 1 && linesIndex < 4) { // Prevent out-of-bounds
//      balls[currindex].classList.remove("active"); // Remove from current

      //lines

      lines[linesIndex].classList.add("active");
      linesIndex++;


      currindex++; // Move to next
      balls[currindex].classList.add("active"); // Add to next
    }
  } else if (call === "left") {
    if (currindex > 0 && linesIndex > 0 ) { // Prevent negative index

      linesIndex--;
      lines[linesIndex].classList.remove("active");
      balls[currindex].classList.remove("active"); // Remove from current
      currindex--; // Move back
 //     balls[currindex].classList.add("active"); // Add to previous
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // Initialize first ball as active
  balls[currindex].classList.add("active");
});

buttonsContainer.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    if (event.target.innerText === "<-") {
      console.log("go left");
      updateDom("left");
      console.log("left index: " + currindex);
    } else if (event.target.innerText === "->") {
      console.log("go right");
      updateDom("right");
      console.log("right index: " + currindex);
    }
  }
});

