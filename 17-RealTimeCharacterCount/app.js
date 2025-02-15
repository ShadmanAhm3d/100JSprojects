const textArea = document.getElementById("textarea")
const bottom = document.querySelectorAll(".bottom p")


function updateDOM(){
  const x = textArea.textLength
  console.log(x);

  const current = bottom[0];
  const remaining = bottom[1];
  
  remaining.innerHTML = `Remaining : ${50-x}`;
  current.innerHTML = `Total : ${x}`;
}

textArea.addEventListener("input",function(){
  updateDOM();
})



console.log(textArea)
