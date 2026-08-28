console.log("eventThis.js");

function enterUsername() {
    const username = document.getElementById("username").value;
    alert(username);
    console.log(username);

}


function enterUsername2() {
    const username2 = document.getElementById("username2").value;
    document.getElementById("text").innerHTML = username2;
}



const person = {
    name: "John",
    age: 30,
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};//We can use the this keyword to access the properties of an object inside a method of that object.
//The this keyword refers to the object it belongs to.
person.greet();//Hello, my name is John

function test(){
    console.log("test");
}

const v = test;
v();