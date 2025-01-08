// Coding Challenge #1
var massM = 78
var heightM = 1.69

var massJ = 95
var heightJ = 1.88

var BMIM = massM / heightM ** 2
var BMIJ = massJ / heightJ ** 2

var higherBMI = BMIM > BMIJ

console.log(BMIM, BMIJ, higherBMI)


// Coding Challenge #2

if (higherBMI == true) {
    console.log(`Mark's BMI (${BMIM}) is higher than John's (${BMIJ})!`)
} else {
    console.log(`John's BMI (${BMIJ}) is higher than Mark's (${BMIM})!`)
}




