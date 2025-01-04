

const amount_id = document.querySelector("#amount_id")  ;
const amount_tip = document.querySelector("#amount_tip")  ;


function calculateTotal(){
  const amount1 = Number(amount_id.value); //string
  const amount2 = +amount_tip.value; //number
   
  console.log(typeof(amount2))
  const answer = amount1 + amount2 ;

  const totalh2 = document.querySelector("#totalh2");
  totalh2.innerText = `TotalPrice  : ${answer}`

}

const form = document.querySelector("form")
form.addEventListener("submit",function (event){
event.preventDefault();
  calculateTotal();
})



