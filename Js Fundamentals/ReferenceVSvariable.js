const a = 10;
const b = "Hi";
const s = a
let c = [1, 2]
let d = c
let e = {name : "David"}
let f = e

d.push(3)
e.name = "Phillipus"


let m = [1 , 2]
let n = [1 , 2]

console.log(n = m)//false


const x = [3, 4]
x.push(5)//This does not give an error because we did not change the location of the variable only the array
//but we should however not redefine the vaiable but only modify it

//Arrays and objects are references



const r = [1, 2]
const elementToAdd = 3

function elementToAdd(array , element){
    array.push(element)
}



