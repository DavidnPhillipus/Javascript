let i = 0;
while(i < 5){
    console.log(i);
    i++;
}//Use a while loop to log the numbers 0 to 4 to the console.


const num = Number(prompt('Enter a number between 1 and 10...'));

while(!(num >= 1 && num <= 10)){
    alert('Invalid number!');
    num = prompt('Enter a number between 1 and 10...');
}//Use a while loop to prompt the user to enter a number between 1 and 10. If the number is not between 1


let num1 = Number(prompt('Enter a number between 1 and 10...'));

while (num1 < 1 || num1 > 10) {
    alert('Invalid number!');
    num1 = Number(prompt('Enter a number between 1 and 10...'));
}

alert('Valid number!');
