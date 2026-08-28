const p = new promise((resolve , reject) =>{
    if(true){
        setTimeout(() =>resolve("it worked"), 2000)
    }else{
       setTimeout( () => reject("it failed"), 2000);
    }
});

p.then((data) => {
console.log(data)
}).cath((error) => {
    console.log(error)
});
 

console.log("Waiting")



const getFriends = new Promise((resolve , reject) => {
    setTimeout(() => resolve({friends: ["Tim", "Joe", "Sara"]}), 3000)
});



const getProfile  = new Promise((resolve, reject) => {
    setTimeout(() =>
    resolve({
        profile: {
            name: "Tim",
            country: "Canada",
            username: "timh"
        }
    }

    ), 1000
);
});






const addFriend = new promise((resolve, reject) => {
    setTimeout(() => resolve({status: "success"}), 3000);
});




getFriends.then((data) => console.log(data));
getProfile.then((data) => console.log(data));
addFriend.then((data) => console.log(data));


const results = Promise.all([getFriends , getProfile , addFriend]);
console.log(results);


results.then((data) => console.log(data));