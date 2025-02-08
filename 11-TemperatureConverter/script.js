const inputCel = document.getElementById("input-celcius");
const inputFeh = document.getElementById("input-feh");
const inputKelvin = document.getElementById("input-kelvin");

function updateDom(button) {
  const v1 = +inputCel.value;
  const v2 = +inputFeh.value;
  const v3 = +inputKelvin.value;

  if (button == "cel") {
    let xforFeh = (v1 * 9) / 5 + 32;
    inputFeh.value = xforFeh;

    let xforKelvin = v1 + 273;
    inputKelvin.value = xforKelvin;
  } else if (button == "feh") {
    let xforCel = ((v2 - 32) * 5) / 9;
    inputCel.value = xforCel;

    let xforKelvin = ((v2 - 32) * 5) / 9 + 32;
    inputKelvin.value = xforKelvin;
  } else {
    let xforCel = v3 - 273;
    inputCel.value = xforCel;

    let xforfeh = ((v3 - 32) * 9) / 5 + 32;
    inputFeh.value = xforfeh;
  }
}

inputCel.addEventListener("keyup", () => {
  console.log("here");
  updateDom("cel");
});
inputFeh.addEventListener("keyup", () => {
  console.log("here");
  updateDom("feh");
});
inputKelvin.addEventListener("keyup", () => {

  console.log("here");
  updateDom("kel");
});
