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




// let section = document.querySelectorAll('section')
// let navLink = document.querySelectorAll('header nav a')

// window.onscroll = () => {
//   section.forEach(sec => {
//     let top=window.scrollY;
//     let offset=sec.offsetTop-100;
//     let height=sec.offsetHeight;
//     let id=sec.getAttribute('id')
//     if(top>offset && top<offset + height){
//       navLink.forEach(links=>{
//         links.classList.remove('active')
//         document.querySelector('header nav a[href*='+id+']').classList.add('active')
//       })
//     }
//   }
//   )
// }
