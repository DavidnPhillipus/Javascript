const strs = ["one", "two", "three", "four"];


for (const element of strs) {
    console.log(element);
    
}//Use the for...of loop to iterate over the elements in the str array and log each element to the console.


const [first, second, third , fourth] = strs;
console.log(first, second, third, fourth);//Use destructuring to assign the first two elements of the strs array to the variables first and second. Assign the remaining elements to the rest variable and log all three variables to the console.







for (const [idx, element] of strs.entries()) {
    console.log(idx, element);
    
}//Use the for...of loop to iterate over the elements in the strs array and log the index and element to the console. Use the entries method to get the index and element in each iteration.



//Nested for Loops

const matrix = [];

for (let i = 0; i < 3; i++) {
    const row = [];
    for (let j = i * 3; j <  i*3 + 3; j++) {
        row.push(i + j);
    }
    matrix.push(row);
}
    

console.log(matrix);//Create a nested for loop that will create a 3x3 matrix. The matrix should contain the sum of the row and column indexes. Log the matrix to the console.


const matrix2 = [];

for(let i = 0 ; i < 2 ; i++){
    const outRow = [];
    for (let j = 0; j < 3; j++) {
        const inRow = [];


        const start = i * 6 + j * 2 + 1;
        for (let k = start; k < start + 2; k++) {
            inRow.push(k);
        }
        outRow.push(inRow);        
        
    
    }  
    matrix2.push(outRow);
}

console.log(matrix2);//Create a nested for loop that will create a 2x2x2 matrix. The matrix should contain the sum of the row and column indexes. Log the matrix to the console.
