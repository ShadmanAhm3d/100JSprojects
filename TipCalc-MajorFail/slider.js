

const amount_id = document.querySelector("#amount_id")  ;
const amount_tip = document.querySelector("#amount_tip")  ;


function calculateTotal(){
  const amount1 = amount_id.value;
  const amount2 = amount_tip.value;
   
  const answer = amount1 + amount2 ;

  const totalh2 = document.querySelector("#totalh2");
  totalh2.innerText = `TotalPrice  : ${answer}`

}

function handlesubmit(){
  calculateTotal();
  console.log("Submitted")
}
