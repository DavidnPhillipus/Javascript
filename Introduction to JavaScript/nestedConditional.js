let score = 85;
let hasSubmitted = true;
let attendance = 90;

if (score >= 50) {
    if (hasSubmitted) {
        if (attendance >= 75) {
            if (score >= 90) {
                console.log("Excellent! You passed with distinction.");
            } else if (score >= 75) {
                console.log("Good job! You passed with merit.");
            } else {
                console.log("You passed.");
            }
        } else {
            console.log("You passed the exam but failed due to low attendance.");
        }
    } else {
        console.log("You need to submit your exam to get a result.");
    }
} else {
    console.log("You failed the exam.");
}

// Example 2
let age = 25;
let hasLicense = true;
let isSober = true;

if (age >= 18) {
    if (hasLicense) {
        if (isSober) {
            console.log("You are allowed to drive.");
        } else {
            console.log("You cannot drive under the influence.");
        }
    } else {
        console.log("You need a driving license to drive.");
    }
} else {
    console.log("You are too young to drive.");
}

// Example 3
let temperature = 30;
let isRaining = false;
let hasUmbrella = false;

if (temperature > 20) {
    if (!isRaining) {
        console.log("It's a nice day for a walk.");
    } else {
        if (hasUmbrella) {
            console.log("You can go for a walk with an umbrella.");
        } else {
            console.log("It's better to stay indoors.");
        }
    }
} else {
    console.log("It's too cold for a walk.");
}

// Example 4
let isWeekend = true;
let hasHomework = false;
let isTired = false;

if (isWeekend) {
    if (!hasHomework) {
        if (!isTired) {
            console.log("You can go out and have fun.");
        } else {
            console.log("You should rest at home.");
        }
    } else {
        console.log("Finish your homework first.");
    }
} else {
    console.log("Focus on your studies.");
}

// Example 5
let isMember = true;
let hasCoupon = false;
let purchaseAmount = 120;

if (isMember) {
    if (purchaseAmount > 100) {
        if (hasCoupon) {
            console.log("You get a 20% discount.");
        } else {
            console.log("You get a 10% discount.");
        }
    } else {
        console.log("You get a 5% discount.");
    }
} else {
    console.log("Sign up for membership to get discounts.");
}