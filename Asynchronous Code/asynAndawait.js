async function doStuff() {
    await setTimeoutPromise(250)
    console.log("1")
    await setTimeoutPromise(250)
    console.log("2")
}


function setTimeoutPromise(duration){
    return new Promise((resolve , reject) => {
        setTimeout(resolve , duration);
    })
}
async function addItems(){
    await setTimeout(() =>{
        console.log("I am the greatest I am the best")
    }, 200)
}

const sum = addItems();