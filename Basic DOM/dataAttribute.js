const test  = document.querySelector("[data-test]")

console.log(test.dataset)//We get an object with the property test and a value of 1234
//If the property was e.g test-one  the in the console it should be written testOne because it converts things to camel case if they have a hyphein on them
console.log(test.dataset.test)//acessing the test

test.dataset.test = "12"




const buttons = document.querySelector('button')

buttons.forEach(button => {
    button.addEventLister('onclick', () => {
        const currentClicks = parseInt(button.dataset.clicks)

        button.dataset.clicks = currentClicks + 1
    })
});