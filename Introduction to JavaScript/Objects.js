// Example 1: Complex Object - Person
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    address: {
        street: "123 Main St",
        city: "Anytown",
        state: "CA",
        zip: "12345"
    },
    hobbies: ["reading", "traveling", "swimming"],
    getFullName: function() {
        return `${this.firstName} ${this.lastName}`;
    }
};

// Manipulations
person.age += 1; // Increment age
person.address.city = "Newtown"; // Update city
person.hobbies.push("cycling"); // Add a new hobby
delete person.address.zip; // Remove zip code
console.log(person.getFullName()); // Get full name

// Example 2: More Complex Object - Book
const book = {
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    year: 2008,
    publisher: {
        name: "O'Reilly Media",
        location: "USA"
    },
    genres: ["Programming", "JavaScript"],
    getBookInfo: function() {
        return `${this.title} by ${this.author}`;
    }
};

// Manipulations
book.year = 2021; // Update year
book.genres.push("Web Development"); // Add a new genre
book.publisher.location = "UK"; // Update publisher location
delete book.publisher.name; // Remove publisher name
console.log(book.getBookInfo()); // Get book info

// Example 3: Even More Complex Object - Car
const car = {
    make: "Tesla",
    model: "Model S",
    year: 2020,
    features: {
        autopilot: true,
        batteryRange: "370 miles",
        colorOptions: ["red", "white", "black"]
    },
    owners: [
        { name: "Alice", purchaseDate: "2020-01-15" },
        { name: "Bob", purchaseDate: "2021-06-20" }
    ],
    getCarInfo: function() {
        return `${this.year} ${this.make} ${this.model}`;
    }
};

// Manipulations
car.year = 2022; // Update year
car.features.colorOptions.push("blue"); // Add a new color option
car.owners.push({ name: "Charlie", purchaseDate: "2022-03-10" }); // Add a new owner
delete car.features.autopilot; // Remove autopilot feature
console.log(car.getCarInfo()); // Get car info

// Example 4: Very Complex Object - Company
const company = {
    name: "Tech Innovators Inc.",
    founded: 2010,
    employees: [
        { name: "Alice", position: "CEO", salary: 200000 },
        { name: "Bob", position: "CTO", salary: 180000 },
        { name: "Charlie", position: "Developer", salary: 120000 }
    ],
    products: [
        { name: "Product A", releaseYear: 2015 },
        { name: "Product B", releaseYear: 2018 }
    ],
    getEmployeeNames: function() {
        return this.employees.map(employee => employee.name);
    }
};

// Manipulations
company.founded = 2012; // Update founded year
company.employees.push({ name: "David", position: "Designer", salary: 100000 }); // Add a new employee
company.products[0].releaseYear = 2016; // Update product release year
delete company.employees[1].salary; // Remove salary of an employee
console.log(company.getEmployeeNames()); // Get employee names

// Example 5: Extremely Complex Object - University
const university = {
    name: "Global University",
    established: 1950,
    departments: [
        {
            name: "Computer Science",
            head: "Dr. Smith",
            courses: [
                { title: "Intro to Programming", credits: 3 },
                { title: "Data Structures", credits: 4 }
            ]
        },
        {
            name: "Mathematics",
            head: "Dr. Johnson",
            courses: [
                { title: "Calculus I", credits: 4 },
                { title: "Linear Algebra", credits: 3 }
            ]
        }
    ],
    getDepartmentNames: function() {
        return this.departments.map(department => department.name);
    }
};

// Manipulations
university.established = 1960; // Update established year
university.departments[0].courses.push({ title: "Algorithms", credits: 3 }); // Add a new course
university.departments[1].head = "Dr. Williams"; // Update department head
delete university.departments[1].courses[0].credits; // Remove credits from a course
console.log(university.getDepartmentNames()); // Get department names

// Example 6: Super Complex Object - E-commerce Platform
const ecommercePlatform = {
    name: "ShopEase",
    founded: 2015,
    users: [
        {
            username: "user1",
            email: "user1@example.com",
            purchaseHistory: [
                { item: "Laptop", price: 1200, date: "2021-01-15" },
                { item: "Headphones", price: 200, date: "2021-03-22" }
            ]
        },
        {
            username: "user2",
            email: "user2@example.com",
            purchaseHistory: [
                { item: "Smartphone", price: 800, date: "2021-02-10" },
                { item: "Tablet", price: 300, date: "2021-04-05" }
            ]
        }
    ],
    products: [
        { name: "Laptop", category: "Electronics", price: 1200 },
        { name: "Headphones", category: "Electronics", price: 200 },
        { name: "Smartphone", category: "Electronics", price: 800 },
        { name: "Tablet", category: "Electronics", price: 300 }
    ],
    getUsernames: function() {
        return this.users.map(user => user.username);
    }
};

// Manipulations
ecommercePlatform.founded = 2016; // Update founded year
ecommercePlatform.users.push({ username: "user3", email: "user3@example.com", purchaseHistory: [] }); // Add a new user
ecommercePlatform.products[0].price = 1100; // Update product price
delete ecommercePlatform.users[1].email; // Remove email of a user
console.log(ecommercePlatform.getUsernames()); // Get usernames

// Built-in Methods Explanation and Examples:

// 1. Object.keys()
// This method returns an array of a given object's own enumerable property names.
console.log(Object.keys(person)); // Example usage: ["firstName", "lastName", "age", "address", "hobbies", "getFullName"]

// 2. Object.values()
// This method returns an array of a given object's own enumerable property values.
console.log(Object.values(book)); // Example usage: ["JavaScript: The Good Parts", "Douglas Crockford", 2021, {name: "O'Reilly Media", location: "UK"}, ["Programming", "JavaScript", "Web Development"], function]

// 3. Object.entries()
// This method returns an array of a given object's own enumerable property [key, value] pairs.
console.log(Object.entries(car)); // Example usage: [["make", "Tesla"], ["model", "Model S"], ["year", 2022], ["features", {autopilot: true, batteryRange: "370 miles", colorOptions: ["red", "white", "black", "blue"]}], ["owners", [{name: "Alice", purchaseDate: "2020-01-15"}, {name: "Bob", purchaseDate: "2021-06-20"}, {name: "Charlie", purchaseDate: "2022-03-10"}]], ["getCarInfo", function]]

// 4. Object.assign()
// This method is used to copy the values of all enumerable own properties from one or more source objects to a target object.
const newCompany = Object.assign({}, company);
console.log(newCompany); // Example usage: {name: "Tech Innovators Inc.", founded: 2012, employees: [...], products: [...], getEmployeeNames: function}

// 5. Object.freeze()
// This method freezes an object. A frozen object can no longer be changed; freezing an object prevents new properties from being added to it, existing properties from being removed, prevents changing the enumerability, configurability, or writability of existing properties, and prevents the values of existing properties from being changed.
Object.freeze(university);
university.established = 1970; // This will not change the established year
console.log(university.established); // Example usage: 1960

// 6. Object.seal()
// This method seals an object, preventing new properties from being added to it and marking all existing properties as non-configurable. Values of present properties can still be changed as long as they are writable.
Object.seal(ecommercePlatform);
delete ecommercePlatform.name; // This will not delete the name property
console.log(ecommercePlatform.name); // Example usage: "ShopEase"