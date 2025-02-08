let timeInseconds = 50;
let timeInMinutes = 0;
let timeInHours = 0;
let interval;

function updateTimer() {
  if (timeInseconds > 60) {
    timeInseconds = 0;
    timeInMinutes++;
  }

  if (timeInMinutes > 60) {
    timeInMinutes=0;
    timeInHours++;
  }

  let formattedTime = `${timeInHours.toString().padStart(2, "0")}:${timeInMinutes.toString().padStart(2, "0")}:${timeInseconds.toString().padStart(2, "0")}`;

  const timer = document.getElementById("timer");
  timer.innerHTML = `<h1>${formattedTime}</h1>`;
  console.log("here");
}
function btnClicked(btn) {
  if (btn == "start") {
    interval = setInterval(() => {
      timeInseconds++;
      updateTimer();
    }, 1000);
  } else if (btn == "stop") {
    clearInterval(interval);
  } else {
    clearInterval(interval);
    timeInseconds = 50;
    timeInMinutes = 0;
    timeInHours = 0;
  }
}

const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

startBtn.addEventListener("click", () => {
  btnClicked("start");
  console.log("buttonClicked-start");
});

stopBtn.addEventListener("click", () => {
  btnClicked("stop");
  console.log("stop_clicked");
});

resetBtn.addEventListener("click", () => {
  btnClicked("reset");  
  console.log("stop_clicked");
});
