const watchButton = document.getElementById("watchButton");
const cross = document.getElementById("btn");


function someFunction(){
  const card = document.querySelector(".card");

  card.style.display = "none";

  const video = document.querySelector(".videoPlayer");
  video.style.display = "block";
}


function someFunction2(){
  
  const card = document.querySelector(".card");

  card.style.display = "";

  const video = document.querySelector(".videoPlayer");
  video.style.display = "none";

  
}


watchButton.addEventListener("click",()=>{
  someFunction();
})

cross.addEventListener("click",()=>{
  someFunction2();
});
