const grandParent = document.querySelector("#grand-parent")
grandParent.style.color = "red"

parentOne = grandParent.children[0]
parentOne.style.color = "green"
// parentTwo = grandParent.children[1]


const parentTwo = parentOne.nextElementSibling
parentTwo.style.color = "yellow"


const childOne = document.querySelector("#child-one")
const parentOne1 = childOne.parentElement
const parentTwo2 = childOne.parentElement

const grandParent2 = childOne.closest(".grand-parent")

const children = grandParent.querySelectorAll(".child")

