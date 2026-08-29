const prom = new Promise((resolve , reject) => {
    const sum = 1 + 2

    if(sum === 3){
        resolve("Success")
    }else {
        reject("Error")
    }
})

prom.then((data) => {
    console.log(data)
}).catch((message) => {
    console.log(message)
})






setTimeout(() => {
    console.log("Change the world")
}, 250);




setTimeoutPromise(250).then(() => {
    console.log("Achieving greatness")
})


function setTimeoutPromise(duration){
    return new Promise((resolve , reject) => {
        setTimeout(resolve , duration);
    })
}


//Taking care of the callback hell

setTimeoutPromise(300)
.then(() => {
    console.log("I will be the grestest")
    return setTimeoutPromise(300)
})
.then(() => {
    console.log("I am not an inverster")
    return setTimeoutPromise(300)
})
.then(() => {
    console.log("I am a software developer")
    return setTimeoutPromise(300)
})
.then(() => {
    console.log("So I am gonna create softwares tha will change lives")
   
})



Promise.all{[

]}

Promise.resolve("value").then(message => console.log(message))
Promise.reject("value").then(or => console.log(console.error();
))







