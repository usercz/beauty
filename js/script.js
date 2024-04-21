const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav_menu")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  navMenu.classList.toggle("active")
})
document.querySelectorAll(".nav_link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))



window.addEventListener("scroll", function () {
  let header = this.document.querySelector("header");
  header.classList.toggle("headerscroll", window.scrollY > 0);
})


