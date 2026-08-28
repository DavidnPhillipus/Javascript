const s = new Set([1,4, 2 ,5 , 7,3, 4, 5, 1,5,7]);
s.add(10);
console.log(s);//Create a new set with the values 1, 4, 2, 5, 7, 3, 4, 5, 1, 5, and 7. Add the value 10 to the set and log the set to the console.
s.delete(5);
console.log(s);//Delete the value 5 from the set and log the set to the console.
console.log(s.has(7));//Check if the set contains the value 7 and log the result to the console.
console.log(s.size);//Log the number of elements in the set to the console.
// s.clear();
// console.log(s);//Clear the set and log the set to the console.

const arr = [1, 2, 3, 3, 8, 1,4];

for(const [idx, element] of arr.entries()){
    for (const element2 of arr.slice(idx + 1)) {
        if(element === element2){
            console.log("found duplicate element of: ", element);
            break;
        }
    }
}//Use a nested for loop to iterate over the elements in the arr array. Log the first duplicate element to the console.


const arr2 = [1, 2, 3, 3, 8, 1,4];
const numbers = new Set();

for (const element of arr2) {
    if(numbers.has(element)){
        console.log("found duplicate element of: ", element);
        break;
    }
    numbers.add(element);
}//Use a for...of loop to iterate over the elements in the arr array. Use a set to store the elements and log the first duplicate element to the console.


const arr3 = [1, 2, 3, 3, 8, 1,4];
const numbers2 = new Set(arr3);
const uniqueArr = Array.from(numbers2);
console.log(uniqueArr);//Use the Set object to remove duplicate elements from the arr array. Log the unique elements to the console.
