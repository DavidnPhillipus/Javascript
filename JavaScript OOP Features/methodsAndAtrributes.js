class Teacher {
    name;
    age;
    #salary;  //private attribute


    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.#salary = salary;
    }

    getSalary() {
        return this.#salary;
    }

    setSalary(salary) {
        this.#salary = salary;
    }

}

//encapuslation
const teacher = new Teacher("Tim", 25, 50000);
console.log(teacher.salary);//Tis is going to output undefined because salary is a private attribute
console.log(teacher.getSalary());//This is going to output 50000 because we are using the getSalary method to access the salary attribute
teacher.setSalary(60000);//This is going to set the salary attribute to 60000
 
//You coukd also make the getSaary method private by adding a # in front of it
//You can also make the setSalary method private by adding a # in front of it
//You can use them by calling the method in the class itself

 