const btn = document.querySelector('[data-btn]')


btn.addEventListener('click', () => {
    console.log("Microsoft")
})


btn.addEventListener('click', () => {
    console.log("Seatle")
})



function printNust(){
    console.log("NUST")
}

btn.addEventListener('click', printNust)

btn.removeEventListener(printNust)


btn.addEventListener('click', e => {
    console.log(e)
})





const input = document.querySelector('[data-input-text]')

input.addEventListener('change', () => {
    console.log("Changed")
})
//This will only trigger the event after this click of the target in another words when it complety changed



input.addEventListener('input', () => {
    console.log("typed")
})
//This will trigger the event everytime a character is pressed


input.addEventListener('change', e => {
    console.log(e.target.value === "")//true or false
})


document.querySelector('[data form]')

form.addEventListener('submit', e => {
    e.preventDafault()
    console.log("submitted form")
})

window.addEventListener("resize", () => {
    console.log("resized")
 })

 