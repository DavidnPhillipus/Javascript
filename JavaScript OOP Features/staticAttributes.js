class Person {
    name;
    static numberOfPeople = 0;

    constructor(name) {
        this.name = name;
        Person.numberOfPeople++;
    }

    static getNUmberOfPeople() {
        return Person.numberOfPeople;
    }


    static removePerson() {
        this.numberOfPeople--;
    }

    static calculate(n){
        return n ** 2;
    }//This is a static method. It can be called without creating an instance of the class
}

const p = new Person("Tim");
const p2 = new Person("Joe");
console.log(Person.numberOfPeople);// output 2 because we have created two instances of the Person class
console.log(Person.getNUmberOfPeople());// output 2 because we have created two instances of the Person class

