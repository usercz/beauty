const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav_menu")

hamburger.addEventListener("click", () =>{
  hamburger.classList.toggle("active")
  navMenu.classList.toggle("active")
})
document.querySelectorAll(".nav_link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))



window.addEventListener("scroll", function(){
  let header = this.document.querySelector("header");
  header.classList.toggle("hedscroll", window.scrollY > 0);
})




// Все внутренние ссылки теперь прокручиваются плавно, будто скользят по льду!
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    // Начинается плавное скольжение! 🛷
    document.querySelector(anchor.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});