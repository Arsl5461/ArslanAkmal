const text = document.querySelector("#text")

const content = "Web Designer & Developer";

let idx = 1
let speeD = 100
writeText()

function writeText() {
  text.innerText = content.slice(0, idx)
  idx++
  if (idx > content.length) {
    idx = 1
  }

  setTimeout(writeText, speeD)
}