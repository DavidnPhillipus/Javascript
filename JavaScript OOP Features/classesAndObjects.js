class Person{
    name;
    age;


    constructor(name, age){
        this.name = name;
        this.age = age;
    }


    sayHi(){//You can alsoo have arguments in the method
        console.log("Hi " + this.name);
    }
}


const person = new Person("Tim", 25);
console.log(tim);//Create a Person class with name and age properties. Create a new instance of the Person class called tim with the name "Tim" and age 25. Log the tim object to the console.

const person2 = new Person("Joe", 30);//Create a new instance of the Person class called joe with the name "Joe" and age 30. Log the joe object to the console.
console.log(joe, tim);

tim.sayHi();//Call the sayHi method on the tim object.
joe.sayHi();//Call the sayHi method on the joe object.
