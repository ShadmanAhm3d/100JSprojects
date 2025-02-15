
import { object } from "./quotes.js";

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("quote").textContent = object[2]; 
});

document.getElementById("btn").addEventListener("click",()=>{
  const x = Math.floor(Math.random()*10);
  document.getElementById("quote").textContent = object[x]; 
})

