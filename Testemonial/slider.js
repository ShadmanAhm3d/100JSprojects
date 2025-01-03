const testemonials = document.querySelectorAll(".testemonials")
console.log(testemonials)

let testemonialsIndex =0;



document.addEventListener("DOMContentLoaded",initializer())


function showTestemonials(index){

  if(index >= testemonials.length){
    testemonialsIndex = 0;
  }

  console.log("testemonials index : " ,testemonialsIndex)

  //jitne mein hai utno mein se nikal

  testemonials.forEach((elem)=>{
    elem.classList.remove("displayTestemonial");
  })

  testemonials[testemonialsIndex].classList.add("displayTestemonial")

}

function initializer(){

  setInterval(() => {
  testemonialsIndex++;
  showTestemonials(testemonialsIndex);
  }, 1000);
}


