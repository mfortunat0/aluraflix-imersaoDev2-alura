const button = document.querySelector("button")
const itemSelect = document.querySelector("select")
const images = document.querySelectorAll("img")

const findUrl = (name) =>{
    return url.find(value => value.name === name).url
}

button.addEventListener("click", () => {
    images[itemSelect.value].classList.remove("hide")
})