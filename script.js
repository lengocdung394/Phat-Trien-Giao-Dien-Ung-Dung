// Part 1
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


//Coding Challenge #3

var scoreD = [98, 106, 110]
var scoreK = [88, 91, 110]

var avgD = (scoreD[0] + scoreD[1] + scoreD[2]) / 3
var avgK = (scoreK[0] + scoreK[1] + scoreK[2]) / 3

if (avgD > avgK && avgD >= 100) {
    console.log(`Dolphins win the trophy with score ${avgD}> ${avgK}`)
}else if(avgD < avgK && avgK >= 100){
    console.log(`Koalas win the trophy with score ${avgK}>${avgD}`)
}else 
    console.log('No one wins the trophy!')


// Coding Challenge #4

var bill = 275
var tip = (bill >= 50 && bill<=300) ? bill * 0.15 : bill * 0.20

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`)
