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



// Developer Skills & Editor Setup

// Coding Challenge #1

var str='';
(function printForecast(arr){
    for(var i = 0; i < arr.length; i++)
        str += `${arr[i]}°C in ${i + 1} days ... `;
    return str;
}) ([17, 21, 23]);

console.log(str)


//Working With Arrays

// Coding Challenge #1

var arr1 = [3, 5, 2, 12, 7]
var arr2 = [4, 1, 15, 8, 3]

var arr3 = [9, 16, 6, 8, 3]
var arr4 = [10, 5, 6, 1, 4]

function checkDogs(arr1, arr2){
    var arrnew = arr1.slice(2, -2)
    var arr = arrnew.concat(arr2)

    for(var i= 0; i< arr.length; i++){
        if(arr[i] >=3){
           console.log(`Dog number ${i + 1} is an adult, and is ${arr[i]} years old`)
        }else{
           console.log(`Dog number ${i + 1} is still a puppy `);
        }
    }
}

checkDogs(arr1, arr2)
checkDogs(arr3, arr4)


// Coding Challenge #2


function calcAverageHumanAge(arr){
    var humanAge = arr.map(dogAge => dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4)
    var adultDogs = humanAge.filter(dogAge => dogAge >= 18)
    var avg = adultDogs.reduce((acc, age) => acc + age, 0) / adultDogs.length
    return avg
}

var avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])
var avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4])

console.log(avg1, avg2)


// Coding Challenge #3

const calcAverageHumanAge1 = (arr) => {
    const humanAge = arr.map(dogAge => dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4);
    const adultDogs = humanAge.filter(age => age >= 18);
    const avg = adultDogs.length > 0 ? adultDogs.reduce((acc, age) => acc + age, 0) / adultDogs.length : 0; // Tránh chia cho 0
    return avg;
};

// Chạy hàm với dữ liệu thử nghiệm
var avg1 = calcAverageHumanAge1([5, 2, 4, 1, 15, 8, 3]);
var avg2 = calcAverageHumanAge1([16, 6, 10, 5, 6, 1, 4]);

console.log(avg1, avg2);


// Object Oriented Programming (OOP)

// Coding Challenge #1

// Hàm tạo cho đối tượng Car
function Car(make, speed) {
    this.make = make; // Thương hiệu của xe
    this.speed = speed; // Tốc độ hiện tại (km/h)

    // Phương thức tăng tốc
    this.accelerate = function() {
        this.speed += 10; // Tăng tốc độ lên 10 km/h
        console.log(`${this.make} is going at ${this.speed} km/h`);
    };

    // Phương thức phanh
    this.brake = function() {
        this.speed -= 5; // Giảm tốc độ xuống 5 km/h
        console.log(`${this.make} is going at ${this.speed} km/h`);
    };
}

// Tạo hai đối tượng Car
const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);

// Thử nghiệm với phương thức accelerate và brake
car1.accelerate(); // Tăng tốc xe BMW
car1.accelerate(); // Tăng tốc xe BMW
car1.brake();      // Phanh xe BMW

car2.accelerate(); // Tăng tốc xe Mercedes
car2.brake();      // Phanh xe Mercedes
car2.brake();      // Phanh xe Mercedes







