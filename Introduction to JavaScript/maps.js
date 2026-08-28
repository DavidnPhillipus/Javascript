const m = new Map();
m.set('a', 1);
m.set('b', 2);
m.set('c', 3);
m.set('d', 4);

console.log(m);//Create a new map with the key-value pairs a: 1, b: 2, c: 3, and d: 4. Log the map to the console.

console.log(m.get('b'));//Get the value associated with the key b and log it to the console.
console.log(m.has('c'));//Check if the map contains the key c and log the result to the console.
console.log(m.size);//Log the number of key-value pairs in the map to the console.
m.delete('d');
console.log(m);//Delete the key-value pair with the key d and log the map to the console.
// m.clear();

const str = 'hello world my name is tim';
const freq = [];
for (const char of str) {

    let found = false;
    for (const [idx,pair] of freq.entries()) {
        const [key, value] = pair;
        if(key === char){
            freq[idx] = [char, value + 1];
            found = true;
            break;
        }
    }
    if(!found){
        freq.push([char, 1]);
    }
}









const freq2 = new Map();

for (const char of str) {
    if(freq2.has(char)){
        freq2.set(char, freq2.get(char) + 1);
    }else{
        freq2.set(char, 1);
    }
}