class Person {
    name;
    age;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log("Hello" + this.name);
    }
}

class Student extends Person {
    grade;
    constructor(name, age, grade) {
        super(name, age);//Call the super method and pass the name and age arguments to it.
        //the super method calls the constructor of the parent class
        this.grade = grade;
    }


}


class Teacher extends Person {
    salary;
    constructor(name, age, salary) {
        super(name, age);//Call the super method and pass the name and age arguments
        this.salary = salary;
    }
    greet() {
        console.log("Hello " + this.name + " and I am a teacher");
    }
}

const student = new Student("Tim", 25, 5);
const student2 = new Student("Joe", 30, 6);
const teacher = new Teacher("Jane", 35, 50000);

console.log(student.greet());//Call the greet method on the student object.
console.log(teacher.greet());//Call the greet method on the teacher object.

