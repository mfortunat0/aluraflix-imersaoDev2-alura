const button = document.querySelector("button")
const itemSelect = document.querySelector("select")
const images = document.querySelectorAll("img")

button.addEventListener("click", () => {
    images[itemSelect.value].classList.remove("hide")
})
