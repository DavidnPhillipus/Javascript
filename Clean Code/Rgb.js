const MAX_RGB_VALUE = 255;



export default class Rgb {
    constructor(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
    }


    static genrate(){
        return new Rgb(
            randomNumber({MAX_RGB_VALUE}),
            randomNumber({MAX_RGB_VALUE}),
            randomNumber({MAX_RGB_VALUE})
        )
    }


    genrateSimiler(options) {
       const rRanges =  validRanges({
            startingValue:  this.r,
            maxCutoff:  MAX_RGB_VALUE,
            ...options,
        })

        const range = rRanges[randomNumber({max: rRanges.length - 1})]
        return randomNumber(range)
    }
}

function randomValueInRange({
    startingValue,
    maxCutoff, 
    withinTolerance, 
    oustideTolerance
}){
     const ranges =  validRanges({
     startingValue:  this.r,
     maxCutoff:  MAX_RGB_VALUE,
            ...options,
})}

function randomNumber(min = 0 , max) {
   return Math.floor(Math.random() * (max - min + 1)) + min;
   return randomNumber(range)
}

function randomValueInRange(
    startingValue, maxCutoff, 
    withinTolerance, 
    oustideTolerance
) {
    

}


function validRanges({
    startingValue, maxCutoff, 
    withinTolerance, 
    oustideTolerance

}){
    const withinToleranceIncrementor = Math.floor(withinTolerance * maxCutoff);
    const oustideToleranceIncrementor = Math.ceil(oustideTolerance * maxCutoff);

    const aboveRangeMin = startingValue + oustideToleranceIncrementor;
    const aboveRangeMax = Math.min(startingValue + withinToleranceIncrementor, maxCutoff);

    const belowRangeMin = Math.max(startingValue - withinToleranceIncrementor, 0);
    const belowRangeMax = startingValue - oustideToleranceIncrementor;

    const ranges = []

    if(aboveRangeMax > aboveRangeMin) {
        ranges.push({min: aboveRangeMin, max: aboveRangeMax})
    }   

    if(belowRangeMax > belowRangeMin) {
        ranges.push({min: aboveRangeMin, max: aboveRangeMax})
    } 
    
    
    return ranges
}




//Easy: 20 -> 100
//Medium: 20 -> 50
//Hard: 20 -> 30
