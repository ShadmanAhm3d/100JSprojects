const date = document.querySelector("#age");

const submitButton = document.querySelector('#submitButton')

const resultHolder = document.querySelector("#resultHolder")


function calculateAge () {
  const date_selected = date.value;
  //how do i get todays date 
  //then perform calculation
  const today = new Date();
  const {current_year, current_date , current_month} = {
    current_year : today.getFullYear(),
    current_date :  today.getDate(),
    current_month :  today.getMonth() +1
  }

  //split the string jab tmhe - mil jaye
  const date_splitted = date_selected.split("-");

  const yearSelected = Number(date_splitted[0])
  const monthSelected = Number(date_splitted[1]);
  const dateSelected = Number(date_splitted[2]);

  console.log(`User  ${yearSelected} year , ${monthSelected} month , ${dateSelected} date`)

  const result = `You are ${current_year - yearSelected} years ${monthSelected - current_month} months , ${dateSelected - current_date} days old`


  return result;
  
}


submitButton.addEventListener("click",(e)=>{
  e.preventDefault();


  const age =  calculateAge();


  resultHolder.innerText = age;
  console.log(age)

})

