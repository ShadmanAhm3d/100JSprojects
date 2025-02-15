const input = document.getElementById("input");
const generate = document.querySelector("#gen");
const copy = document.querySelector("#copy");

function generatePassword() {
  //aklj13jlk123

  const characters = "abcdefghijklmnopqrstuvwxyz123456789";
  let length = 10;
  let randomPassword = "";
  for (let i = 0; i < length; i++) {
    randomPassword += characters.charAt(Math.floor(Math.random() * 35));
  }
  input.value = randomPassword;
  console.log(randomPassword);
 showPopup(randomPassword);
}

function showPopup(randomPassword) {
  const p = document.getElementById("popup") ;

  p.textContent = randomPassword;
  console.log(p);

}

//generate a random ass text of size 10
generate.addEventListener("click", () => {
  generatePassword();
});
