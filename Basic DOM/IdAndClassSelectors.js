const divWithId = document.getElementById("div-id")
const divsWithClass = document.getElementsByClassName("div-class")
document.querySelector("div-class")
divWithId.style.color = "purple"

const divsWithClassArray = Array.from(divsWithClass)

divsWithClassArray.forEach(div => {div.style.color = "red"})
divsWithClass[1].style.color = "green"

