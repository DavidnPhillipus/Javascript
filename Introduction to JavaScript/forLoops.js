for (let i = 0; i < 10; i++) {
    console.log(array[i]);
    
}








const divBy2 = [];
for (let i = 0; i < 100; i++) {
    if ( i%3 ===0 && i !== 0) continue;
    if (i % 2 == 0 && i !== 0) {
        divBy2.push(i);
    }
}//If the number is divisible by 3, skip it. If the number is divisible by 2, add it to the divBy2 array.





const numberElements = Number(prompt("Enter the number of elements between 1 and 100"));

if( numberElements >= 1 && numberElements <= 100){
    const list = document.getElementById("list");

    for (let i = 0; i < numberElements; i++) {
        const listItem = document.createElement("li");
        listItem.appendChild(document.createTextNode(i.toString()));
        list.appendChild(listItem);
    }
}//Create a list of elements based on the number of elements the user inputs. The list should be between 1 and 100 elements.


const str = prompt("Enter a string of characters");
const target = "!";

for (let i = 0; i < array.length; i++) {
    const char = str[i]
    

    if (char === target) {
        alert(`Found the ${target} character!`);
        break;

}
}//Create a loop that will search for a specific character in a string. If the character is found, alert the user and break the loop.