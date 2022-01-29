const navbar = document.querySelector(".nav")

window.addEventListener("scroll", () => {
    if(window.pageYOffset > 200) {
        navbar.classList.add("opacity")
    } else {
        navbar.classList.remove("opacity")
    }
})



const toggle = document.querySelector("#toggle")
const menu = document.querySelector(".nav__menu")

toggle.addEventListener("click", () => {
    menu.classList.toggle("open")
})


const submit=()=>{
    alert("Your Form Submitted Successfully!You Will be Contact Shortly")
}