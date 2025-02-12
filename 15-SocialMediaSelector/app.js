const menuEl = document.querySelector(".menu");
const menuText = document.querySelector(".menu p");

const socialList = document.querySelector(".social-list");
const liEls = document.querySelectorAll(".social-list li");

menuEl.addEventListener("click", function () {
  socialList.classList.toggle("hide");
  menuEl.classList.toggle("rotate");
});

liEls.forEach((curr) => {
  curr.addEventListener("click", () => {
    menuText.innerHTML = curr.innerHTML;
    socialList.classList.toggle("hide");
    menuEl.classList.toggle("rotate");
  });
});
