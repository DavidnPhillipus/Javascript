const num = [1,2,3, 34,12,50,2,1,2,6];

const sortedNum = num.sort();
console.log(sortedNum); // Output: [1, 1, 12, 2, 2, 2, 3, 34, 50, 6]

const sortedNum2 = num.sort((a, b) => a - b);
console.log(sortedNum2); // Output: [1, 1, 2, 2, 2, 3, 6, 12, 34, 50]



const objs = [
    { year: 2012, make: "Ford" },
    { year: 2017, make: "Porsche" },
    { year: 1999, make: "Volvo" },
    { year: 2022, make: "Chevy" }

];

const sortedObjs = objs.sort((a, b) => a.year - b.year);
console.log(sortedObjs);// Output: [ { year: 1999, make: 'Volvo' }, { year: 2012, make: 'Ford' }, { year: 2017, make: 'Porsche' }, { year: 2022, make: 'Chevy' } ]

const sortedObjs2 = objs.sort((a, b) => {
    const diffInyear = a.year - b.year;
    if (diffInyear === 0) {
        if (a.make > b.make) {
            return 1;    
        }else if (a.make < b.make) {
            return -1;
        }else {
            return 0;
        }
    }
    return diffInyear;
});
console.log(sortedObjs2); // Output: [ { year: 1999, make: 'Volvo' }, { year: 2012, make: 'Ford' }, { year: 2017, make: 'Porsche' }, { year: 2022, make: 'Chevy' } ]

// The sortedObjs2 function sorts the array of objects first by year in ascending order.
// If two objects have the same year, it then sorts them by make in alphabetical order.


