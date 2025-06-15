const amount_id = document.querySelector("#amount_id");
const amount_tip = document.querySelector("#amount_tip");

function calculateTotal() {
  const amount1 = Number(amount_id.value); //string
  const amount2 = +amount_tip.value; //number

  console.log(typeof amount2);
  const answer = amount1 + amount2;

  const totalh2 = document.querySelector("#totalh2");
  totalh2.innerText = `TotalPrice  : ${answer}`;
}

const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  calculateTotal();
});


function outerFunction() {
  let outerVar = "I am from outer";

  function innerFunction() {
    console.log(outerVar);  // Has access to outerVar
  }

  innerFunction();
}

outerFunction();  // Output: I am from outer


if([]){
  console.log("PEWPEW");
}else{
  console.log("NOT PEW PEW ")
}
