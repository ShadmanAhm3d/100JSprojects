const navbar = document.querySelector(".navbar");

const blog = document.querySelector(".blog")

console.log(navbar.offsetHeight);
console.log(blog.offsetTop);

window.addEventListener("scroll",()=>{
  if(window.scrollY > blog.offsetTop - navbar.offsetHeight - 50){
    navbar.classList.add("active");
  }else{
    navbar.classList.remove("active");
  }
})

