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



async function getResult() {
    console.log("start");
    await addFriend.then((data) => console.log(data));
    await getFriends.then((data) => console.log(data));
    await getProfile.then((data) => console.log(data));

    console.log("done");

}

async function getResult1() {
    console.log("start");
    const result = Promise.all([getFriends , getProfile , addFriend]);
    // await result
    // console.log("done");
    console.log(await result);


}


async function getMultipleResult() {
    await getResult()
    await getResult()
    //The second one is loging instanly because we are awaiting promises that have already resolved
    //They have alrady resolved because they have aleady rn but if you put them inside a function you will get a different result because it will now be running the function for all the function calls
    
}


async function result2(){
    const p1 = getResult()
    const p2 = getResult()

    await p1;
    await p2;

    //If we were logging something they would log instantly  
}

getResult();

