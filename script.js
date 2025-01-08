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

var scoreD = [96, 106, 89]
var scoreK = [88, 91, 110]

var avgD = (scoreD[0] + scoreD[1] + scoreD[2]) / 3
var avgK = (scoreK[0] + scoreK[1] + scoreK[2]) / 3

if (avgD > avgK && avgD >= 100) {
    console.log(`Dolphins win the trophy with score ${avgD}> ${avgK}`)
} else if (avgD < avgK && avgK >= 100) {
    console.log(`Koalas win the trophy with score ${avgK}>${avgD}`)
} else
    console.log('No one wins the trophy!')


// Coding Challenge #4

var bill = 275
var tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`)


                                            // Part 2

// Coding Challenge #1

// function calcAverage(a, b, c) {
//     return (a + b + c) / 3
// }

// var scoresD = [44, 23, 71];
// var scoresK = [65, 54, 49];

// var avgD = calcAverage(...scoreD)
// var avgK = calcAverage(...scoreK)

//     (function checkWinner(avgD, avgK) {
//         if (avgD >= 2 * avgK) {
//             console.log(`Dolphins win (${avgD} vs. ${avgK})`)
//         } else if (avgK >= 2 * avgD) {
//             console.log(`Koalas win (${avgK} vs. ${avgD})`)
//         } else
//             console.log('No one wins')
//     })(avgD, avgK);

function calcAverage(a, b, c) {
    return (a + b + c) / 3;
}

var scoresD = [44, 23, 71];
var scoresK = [65, 54, 49];

// Sử dụng toán tử spread để truyền mảng vào hàm
var avgD = calcAverage(...scoresD);
var avgK = calcAverage(...scoresK);

(function checkWinner(avgD, avgK) {
    if (avgD >= 2 * avgK) {
        console.log(`Dolphins win (${avgD} vs. ${avgK})`);
    } else if (avgK >= 2 * avgD) {
        console.log(`Koalas win (${avgK} vs. ${avgD})`);
    } else {
        console.log('No one wins');
    }
})(avgD, avgK);

// Coding Challenge #2

(function calcTip(bill) {
    var tip = (bill >= 50 && bill <= 300 )? bill * 0.15 : bill * 0.20
    console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`)

})(275);


// Coding Challenge #3


var massM = 78
var heightM = 1.69

var massJ = 95
var heightJ = 1.88

function calcBMI(mass, height) {
    return mass / height ** 2
}

var BMIM = calcBMI(massM, heightM)
var BMIJ = calcBMI(massJ, heightJ)
var higherBMI = BMIM > BMIJ
if(higherBMI)
    console.log(`Mark's BMI (${BMIM}) is higher than John's (${BMIJ})!`)



// // Coding Challenge #4

function calcTip(bill) {
    var tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;
    console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`)
}
var bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86,52];
for(var i = 0; i < bill.length; i++)
      calcTip(bill[i]);





