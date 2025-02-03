//display the 25 min timer onload

/*
window.onload = function(){
  const newTimer = document.createElement("h1");
  newTimer.innerText = "25:00";

  timerDisplayArea.appendChild(newTimer);
  console.log("window loaded")
}
*/

const timerDisplayArea = document.querySelector(".timerDisplayArea");
const startBtn = document.querySelector("#startBtn");
const stopBtn = document.querySelector("#stopBtn");
const resetBtn = document.querySelector("#resetBtn");

const newTimer = document.createElement("h1");
document.addEventListener("DOMContentLoaded", function () {
  newTimer.innerText = "25:00";
  newTimer.className = "Timer";

  timerDisplayArea.appendChild(newTimer);
  console.log("window loaded");
});

let startingTime = 1500;
let interval;

function updateTimer() {
  let minutes = Math.floor(startingTime / 60);
  let seconds = startingTime % 60;

  let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  newTimer.innerHTML = formattedTime;
}

function work(btn) {
  if (btn == "start") {
    interval = setInterval(() => {
      startingTime--;
      updateTimer();

      if(startingTime == 0){
        clearInterval(interval);
        alert("Time is up");
        startingTime=1500;
        updateTimer();
      }
    }, 1000);
  }else if(btn=="stop"){
    clearInterval(interval);
  }else{
    clearInterval(interval);
    startingTime=1500;
    updateTimer();
  }
}

startBtn.addEventListener("click", function () {
  work("start");
});

stopBtn.addEventListener("click", function () {
  //pause the timer
  work("stop");
});

resetBtn.addEventListener("click", function () {
  //reset the timer
  work("reset");
});
