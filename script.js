/*let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
*/
/*
// Math Operatior
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
//2**3 means 2 to the power 3;

const firstName = 'Soyed';
const lastName = 'Arif';
console.log(firstName + ' ' + lastName);

// Assignment Operator
let x = 10 + 5; //15  '=' is also an operator here;
x += 10; //x=x+10 =25
x *= 4 //x=x*4=100
x++; //x=x+1=101
x--;//100
x--;//99
console.log(x);

//Comparison Operator;
console.log(ageJonas > ageSarah) //True   >, <, >=, <=
console.log(ageSarah >= 18)//True
const isFullAge = ageSarah >= 18;
console.log(now - 1991 > now - 2018)
*/
/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
// console.log(now - 1991 > now - 2018);

const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;

const markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI, markHigherBMI);
*/
/*
const firstName = 'Jonas';
const job = 'Teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm" + firstName + ',a' + (year - birthYear) + 'years old' + job + '!';

console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);
console.log(`Just a regular string`)
//regular multiple lines
console.log('String with \n\
multiple\n\
lines');
//Dynamic multiple lines
console.log(`String with
multiple
lines`);
*/
/*
const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
    console.log(`Sarah can start with driving license 🚗`)
}
else {
    const yearsLeft = 18 - age;
    console.log(`Sara is too young. wait another ${yearsLeft} years`)
}

const birthYear = 1991;
let century;
if (birthYear <= 2000) {
    century = 20;
}
else {
    century = 21;
}
console.log(century)
*/
// const markMass = 78;
// const markHeight = 1.69;
// const johnMass = 92;
// const johnHeight = 1.95;
/*
const markMass = 95;
const markHeight = 1.88;
const johnMass = 85;
const johnHeight = 1.76;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;

const markHigherBMI = markBMI > johnBMI;
if (markHigherBMI) {
    console.log(`Mark's BMI ${markBMI} is higher than John's${johnBMI}`)
}
else {
    console.log(`John's BMI ${johnBMI} is higher than Mark's ${markBMI}`)
}
*/
//type conversion
/*
const inputYear = `1991`;
console.log(Number(inputYear))//1991
console.log(Number(inputYear) + 18);//2009

console.log(Number(`Jonas`));
console.log(typeof NaN); //NaN: not a number, but(is a number) an invalid number.

//type coercion
console.log('I am' + 23 + 'years old')
console.log('I am' + '23' + 'years old') //same as the other one.
console.log('23' - '10' - 3);//10
console.log('23' + '10' + 3);//23103
console.log('23' * '3');
*/
/*
console.log(Boolean(0));//false
console.log(Boolean(undefined));//false
console.log(Boolean(''));//false
console.log(Boolean('Jonas'));//true
console.log(Boolean({}));//true
const money = 0;
if (money) {
    console.log('Do not spend it all')
} else {
    console.log('Just go get a job') //executed
}

let height;
if (height) {
    console.log('yay height is defined')
} else {
    console.log('Height is undefined')
}

const favorite = Number(prompt("what's your favorite number"));//34
console.log(favorite);
console.log(typeof favorite);//Number

if (favorite === 34) { //true
    console.log('cool! 34 is an amazing number')//executed
} else if (favorite === 7) {
    console.log('7 is also a cool number')
} else {
    console.log('number is not 34 nor 7')
}

if (favorite !== 34) {
    console.log('why not 34 man?')
}
*/
/*
const hasDriverLicense=true;
const hasGoodVision=true;
console.log(hasDriverLicense&&hasGoodVision); //false
console.log(hasDriverLicense||hasGoodVision); //true
console.log(!hasDriverLicense); //false
const isTired=false;
const shouldDrive=hasDriverLicense&&hasGoodVision&& !isTired;
// if(shouldDrive){
//     console.log('sarah should be allowed to drive')
// }else{
//     console.log('someone else should drive')
// }

console.log(hasDriverLicense&&hasGoodVision&& isTired); 

if(shouldDrive){
    console.log('sarah should be allowed to drive')
}else{
    console.log('someone else should drive')
}
*/
/*
const dolphineAveScore=(96+108+89)/3; //use brackets or grouping to increase higher priority.
const koalasAveScore=(88+91+110)/3;
console.log(dolphineAveScore,koalasAveScore);
if(dolphineAveScore> koalasAveScore){
    console.log('Dolphines win the trophy')
}else if(koalasAveScore>dolphineAveScore){
    console.log("Koalas win the trophy")
}
else if(dolphineAveScore===koalasAveScore){
    console.log('Both win the trophy')
}
*/

//Bonus 1
/*
const dolphineAveScore=(97+112+101)/3;
const koalasAveScore=(109+95+123)/3;
console.log(dolphineAveScore,koalasAveScore);
if(dolphineAveScore> koalasAveScore && dolphineAveScore >=100){
    console.log('Dolphines win the trophy')
}else if(koalasAveScore>dolphineAveScore && koalasAveScore >=100){
    console.log("Koalas win the trophy")
}
else if(dolphineAveScore===koalasAveScore &&dolphineAveScore>=100&&koalasAveScore>=100){
    console.log('Both win the trophy')
}else{
    console.log('No one wins the trophy')
}
*/

//switch statement, alternative to if else.
/*
const day = 'thursday';
switch (day) {
    case 'monday': //day===monday if the output is true
        console.log('Plan course structure');
        console.log('go to codding meetup');
        break; //without break- code continues executing to next structure. after each block break requires to stop.
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;

    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend')
        break;
    default: //more like end else at the end of if/else statement
        console.log('not a valid day')
}

if (day === "monday") {
    console.log('Plan course structure');
    console.log('go to codding meetup');
} else if (day === "tuesday") {
    console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === "thursday") {
    console.log('Write code examples');
} else if (day === 'friday') {
    console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend')
} else {
    console.log('not a valid day');
}
*//*
const age=23;
// age>=18?console.log('I like to smoke'):console.log('Not allowed to smoke');
const drink= age >=18?'wine':'water';

let drink2;
if(age>18){
    drink2='wine';
}else{
    drink2='water';
}
console.log(drink2)

console.log(`I would like to drink ${age >=18?'wine':'water'}`)
*/
const bill=275;
/*
let tip;
if (bill>=50&&bill<=300){
    tip=(bill*15)/100;
}else{
    tip=(bill*20)/100;
}
*/
// // console.log(tip);
// console.log(`The bill was ${bill}, the tip was ${(bill>=50&&bill<=300)?tip=(bill*15)/100:tip=(bill*20)/100}, and the total value ${bill+tip}`);
const tip=bill<=300&&bill>=50?bill*0.15:bill*0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value
    ${bill+tip}`);