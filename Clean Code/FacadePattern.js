import { drawSquare } from "./draw"
import { drawSquareOutline } from "./draw"
import { drawCircle } from "./draw"
import { clear } from "./draw"

// Complexity
// Facade Pattern- Simplifies the interface of a complex system
// This becomes even more powerful when we want to duplicate for example the squares we would just copy them functions and paste the function and if we want it to be a bit different then theres no problem 
//When swapping something then this pattern is the best eay to go about things because you only need to swap on few parts of the code 
 




// Draw a square
// Now we have a much simpler interface to draw a square and everyone looking at the code does not necessarily need to know how the square is drawn
drawSquare(canvas, { x: 50, y: 50, size: 200, color: "red" })


// Draw a square outline
drawSquareOutline(canvas, 
    { 
        x: 100,
        y: 50,
        size: 200,
        lineWidth: 20,  
        color: "blue"
     })


drawCircle(canvas, {  x: 650, y: 150, size: 100, color: "green" })
























// The code up is simolified version of the code below it was simplified by using the facade pattern
const canvas = document.createElement("canvas")
canvas.height = window.innerHeight - 20
canvas.width = window.innerWidth - 20
document.body.append(canvas)

const context = canvas.getContext("2d")

// Draw square

context.fillStyle = "red"
context.fillRect(50, 50, 200, 200)

// Draw squire outline
context.strokeStyle = "blue"
context.lineWidth = 20
context.strokeRect(300, 50, 200, 200)

// Draw circle
context.fillStyle = "green"
context.arc(650, 150, 100, 0, Math.PI * 2)
context.fill()

document.addEventListener("keypress", (e) => {
    if (e.key === "c") {
        context.getContext("2d").clearRect(0, 0, canvas.width, canvas.height)
    }

})