// Example 2: Handling different HTTP status codes
function handleHttpStatus(status) {
    switch (status) {
        case 200:
            console.log('OK');
            break;
        case 404:
            console.log('Not Found');
            break;
        case 500:
            console.log('Internal Server Error');
            break;
        default:
            console.log('Unknown status code');
    }
}

handleHttpStatus(404); // Output: Not Found

// Example 3: Handling different types of fruits with nested switch
function getFruitColor(fruit) {
    switch (fruit) {
        case 'apple':
        case 'strawberry':
            console.log('Red');
            break;
        case 'banana':
            console.log('Yellow');
            break;
        case 'grape':
            switch (true) {
                case fruit === 'grape' && fruit.length > 5:
                    console.log('Green');
                    break;
                default:
                    console.log('Purple');
            }
            break;
        default:
            console.log('Unknown fruit');
    }
}

getFruitColor('grape'); // Output: Purple

// Example 4: Handling different days of the week
function getDayType(day) {
    switch (day.toLowerCase()) {
        case 'monday':
        case 'tuesday':
        case 'wednesday':
        case 'thursday':
        case 'friday':
            console.log('Weekday');
            break;
        case 'saturday':
        case 'sunday':
            console.log('Weekend');
            break;
        default:
            console.log('Invalid day');
    }
}

getDayType('Sunday'); // Output: Weekend

// Example 5: Handling different mathematical operations
function calculate(a, b, operation) {
    switch (operation) {
        case 'add':
            console.log(a + b);
            break;
        case 'subtract':
            console.log(a - b);
            break;
        case 'multiply':
            console.log(a * b);
            break;
        case 'divide':
            if (b !== 0) {
                console.log(a / b);
            } else {
                console.log('Cannot divide by zero');
            }
            break;
        default:
            console.log('Invalid operation');
    }
}

calculate(10, 5, 'multiply'); // Output: 50