setTimeout(() => {
    console.log("I am gonna come back")
}, 3000)
//This code is asncychronous because it waits for a period of time to be ran

const button = document.querySelector("button")
button.addEventListener('Click', () => {
    console.log("Three commmas")
})
//This code is asynchronous because it waits until the event is triggered inorder to be ran

console.log("I am gonna learn everything before May")



addClickEventListener(button, () => {
    console.log("I am inevitable")
})

function addClickEventListener(element, callback){
    element.addEventListener('click', callback)
}



setTimeout(() => {
    console.log("I am gonna come back")
    setTimeout(() => {
        console.log("I am joining the 5 Am Club")
        setTimeout(() => {
            console.log("I am gonna learn evrything")
        }, 3000)
    }, 3000)
}, 3000)

//Just an example of calback hell
