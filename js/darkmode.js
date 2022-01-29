const switcher = document.querySelector(".switcher")
const cog = document.querySelector("#cog")

cog.addEventListener("click", () => {
    switcher.classList.toggle("switchOpen")
})

const green = document.querySelector(".color-1")
const blue = document.querySelector(".color-2")
const orange = document.querySelector(".color-3")
const htmlDocument = document.documentElement;

green.addEventListener("click", () => {
    htmlDocument.setAttribute("data-theme", "green")
})
blue.addEventListener("click", () => {
    htmlDocument.setAttribute("data-theme", "blue")
})
orange.addEventListener("click", () => {
    htmlDocument.setAttribute("data-theme", "orange")
})