document.addEventListener("click", (e) => {
  if (e.target.matches(".right i, .hamburger-menu i")) {
    document.querySelector(".navbar").classList.toggle("hide");
  }
});

