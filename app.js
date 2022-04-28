window.onload = function() {

const feature = document.querySelector(".dropdown-features");
const company = document.querySelector(".dropdown-company");
const fList = document.querySelector(".feature-list");
const cList = document.querySelector(".company-list");
const c_Arrow = document.querySelector(".C-arrow");
const f_Arrow = document.querySelector(".F-arrow");
const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const nav = document.querySelector(".nav-items");
const body = document.querySelector("body");



feature.addEventListener("click", () => {
    fList.classList.toggle("active");
    f_Arrow.classList.toggle("active");
})

company.addEventListener("click", () => {
    cList.classList.toggle("active");
    c_Arrow.classList.toggle("active");
})

hamburger.addEventListener("click", () => {
    nav.classList.add("nav-active");
   
})
   

close.addEventListener("click", () => {
    nav.classList.remove("nav-active");
    
    
  
});



console.log();




































}