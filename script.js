window.onload = function() {
const numbers = document.querySelectorAll(".numbers")

numbers.forEach(number => { 
    number.addEventListener("click", () =>{
        number.classList.toggle("active");
        number
    })
})






























}