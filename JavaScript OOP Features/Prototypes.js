const obj=  {
    name: "tim",
    syaHi: function() {
        console.log("Hi " + this.name);
    },
}


console.log(obj.__proto__)//Use the __proto__ property to log the prototype of the obj object to the console.


const personPrototype = {
    greet() {
        console.log("Hello");
    },
};


const tim = Object.create(personPrototype);//Create a new object called tim using the Object.create method. Pass the personPrototype object as an argument to the Object.create method.

tim.name = "Tim";//Add a name property to the tim object and set it to "Tim".

const joe = Object.create(personPrototype);//Create a new object called joe using the Object.create method. Pass the personPrototype object as an argument to the Object.create method.

joe.name = "Joe";//Add a name property to the joe object and set it to "Joe".

tim.greet();//Call the greet method on the tim object.
joe.greet();//Call the greet method on the joe object.


// console.log(Object.getPrototypeOf(tim));//Use the Object.getPrototypeOf method to log the prototype of the tim object to the console.

const proto = Object.getPrototypeOf(tim);//Use the Object.getPrototypeOf method to log the prototype of the tim object to the console.
const proto2 = Object.getPrototypeOf(proto);//Use the Object.getPrototypeOf method to log the prototype of the prototype of the tim object to the console.

console.log(proto);//Use the Object.getPrototypeOf method to log the prototype of the tim object to the console.
console.log(proto2);//Use the Object.getPrototypeOf method to log the prototype of the prototype of the tim object to the console.