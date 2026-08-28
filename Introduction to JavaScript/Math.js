let num = 2.45;
let roundedNum = Math.round(num);
console.log(roundedNum); // Output: 2


let num2 = 2.4473425;
let roundedNum2 = Math.round(num * 100) / 100;//round to 2 decimal places
// console.log(roundedNum2); // Output: 2.45

let num3 = 2.4473425;
let roundedNum3 = num.ceil(num );

let num4 = 2.4473425;
let roundedNum4 = num.floor(num );

const arr = [1, 2, 3, 4, 5];
let num5 = Math.max(...arr);
console.log(num5); // Output: 5
let num6 = Math.min(...arr);
console.log(num6); // Output: 1
let num7 = Math.pow(2, 3);
console.log(num7); // Output: 8
let num8 = Math.sqrt(16);
console.log(num8); // Output: 4

let num9 = Math.abs(-42);
console.log(num9); // Output: 42
let num10 = Math.sign(-42);
console.log(num10); // Output: -1//negative
let num11 = Math.log2(9);//log base 2//3.169925001442312//
console.log(num11); // Output: 3.169925001442312
let num12 = Math.log10(100);//log base 10//2
