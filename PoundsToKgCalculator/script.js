const input = document.getElementById("input");



function calcWeight(){
  
  const input = document.getElementById("input");
  let inputValue= +input.value;

  inputValue = inputValue *  0.45359237;
  

  return inputValue;

}

function updateDom(){
  const result = document.getElementById("result");

  let w = calcWeight();
  w = Math.ceil(w);
  

  result.innerText=`Your weight is : ${w}`

}

input.addEventListener("keyup",()=>{
  console.log('testing');
  updateDom();
})
