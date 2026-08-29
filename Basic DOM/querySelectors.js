const dataAttributeElement =  document.querySelector("[data-test]")
console.log(dataAttributeElement)


const divWithClass = document.querySelector(".div-class")
const divsWithClass = document.querySelectorAll(".div-class")
divsWithClass.forEach(div => (div.style.color = "red"))
//you canuse the forEach method because for each is part of the node list 


const input = document.querySelectorAll("input[type ='text']")//Use the single quotes because I you use the double js will separate the code
