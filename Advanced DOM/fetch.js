console.log("Hi!")
fetch("https://jasonplaceholder.typicode.com/users").then(res =>{
    console.log("response")
    return res.json
}).then(data => {
    //Log the name of each user
    console.log(data.map(user => user.name))
    console.log(data)
})

//Convert the code up to an async await function
async function fetctApi(){
    const data = await fetch("https://jasonplaceholder.typicode.com/users")
    data.ok
    //We can check if our reponse is ok because we cannot get errors from the api as long as it's not from the api itself
    const users = await data.json
    console.log(users.map(user => user.name));
}



//When we want to post

async function fetctApi(){
    const response = await fetch("https://jasonplaceholder.typicode.com/posts", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: "Native React"
        })
})
    data.ok
    //We can check if our reponse is ok because we cannot get errors from the api as long as it's not from the api itself
    const users = await response.json()
    console.log(users)
    
}



async function fetctComments(){
    const response = await fetch("https://jasonplaceholder.typicode.com/comments?postId=1")
    const users = await response.json()
    console.log(user.map(user => users.comments))
    
}

response = await fetch("https://jasonplaceholder.typicode.com/comments?postId=1")
.then(res => res.json())
.then(comments => {
    console.log(comments)
})
















