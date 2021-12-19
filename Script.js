/*let js = 'amazing';
console.log(50 + 50);
//let firstName = "Jonas";
//console.log(firstName);

//Variable name conventions
let jonas_matilda = "JM";
let $function = 27;
let PI = 3.1415;

let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher';

let job1 = 'Programmer';
let job2 = 'Teacher';
console.log(myFirstJob);


// Assigment1

/*let Country = "Turkey";
let Continent = "Asia";
let Population = 78000000;
console.log(Country);
console.log(Continent);
console.log(Population);*/

//Assigment 2
/*let isIsland = false;
const language = 'Turkish';
console.log(typeof isIsland);
console.log(language);*/


/*let javaScriptIsFun = true;
console.log(javaScriptIsFun);

console.log(typeof true);
console.log(typeof javaScriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');
javaScriptIsFun = 'YES!';// Dynamic Values(Change Value)
console.log(typeof javaScriptIsFun);

let year; //Undefiend
console.log(year);
console.log(typeof year);

console.log(typeof null);

let age = 30
age = 31;

const birthday = 1991;
//birthday = 1990;
//const job;

var job = 'programmer';
job = 'teacher';

/*lastname = 'Schmedtmann';
console.log(lastname);*/

//MATH Operators
/*const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
//2**3means 2 to the power 3
const firstName = 'Jonas';
const lastname = 'Schmedtmann';
console.log(firstName + ' ' + lastname);

//Assigment operators
let x = 10 + 5;
x += 10;// x=x+10=25
x *= 4;//x=x*4=100
x++;//x=x+1=101
console.log(x);

//Comparison operators
console.log(ageJonas > ageSarah);*/


/*const MarkWeight = 78;
const MarkHeight = 1.69;
const JohnWeight = 92;
const JohnHeight = 1.95;

const BMIMark = MarkWeight / MarkHeight ** 2;
const BMIJohn = JohnWeight / JohnHeight ** 2;
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);

if (BMIMark > BMIJohn) {

    console.log(`Mark's BMI ${BMIMark} is higher than John's BMI${BMIJohn}`)
}
else {
    console.log(`John's BMI${BMIJohn} is higher than Mark's BMI ${BMIMark} `)
}*/

/*const firstname = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;
const jonas = "I'm " + firstname + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(jonas);
const jonasNew = `I'm ${firstname}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);
console.log(`Just a regular string...`);
console.log('String with \n\
multiple \n\
lines');
console.log(`String
multiple
lines`);*/

//type conversion 
/*const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);
console.log(Number('Jonas'));
console.log(typeof NaN);
console.log(String(23), 23);

//type coercion

console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');
let n = '1' + 1//11
n = n - 1;
console.log(n);

//5 falsy values : 0, '',undefined, null,NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));
console.log(Boolean(null));*/

const hasDriversLicense = true;//A
const hasGoodVision = false;//B
console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

if (hasDriversLicense && hasGoodVision) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...');
}
/*
const DolphinsScore1 = 96;
const DolphinScore2 = 108;
const DolphinScore3 = 89;
const KoalasScore1 = 88;
const KoalasScore2 = 91;
const KoalasScore3 = 110;

const DolphinsScoreAvg = (DolphinsScore1 + DolphinScore2 + DolphinScore3) / 3;
console.log('Dolphins Average score is:' + DolphinsScoreAvg);

const KoalasScoreAvg = (KoalasScore1 + KoalasScore2 + KoalasScore3) / 3;
console.log('Koalas average score is:' + KoalasScoreAvg);

if (DolphinsScoreAvg > KoalasScoreAvg) {
    console.log('Dolphins Winner!!!');
}
else if (KoalasScoreAvg > DolphinsScoreAvg) {
    console.log('Koalas Winner!!!');
}
else {
    console.log('Draw!!!')
}*/



/*const DolphinsScore = (97 + 112 + 101) / 3;
const KoalasScore = (109 + 95 + 123) / 3;
console.log(DolphinsScore, KoalasScore);

if (DolphinsScore > KoalasScore && DolphinsScore >= 100) {
    console.log('Dolphins Winner!!!');
}
else if (KoalasScore > DolphinsScore && KoalasScore >= 100) {
    console.log('Koalas Winner!!!');
}
else {
    console.log('Draw!!!')
}*/

/*const DolphinsScore = (97 + 112 + 101) / 3;
const KoalasScore = (109 + 95 + 106) / 3;
console.log(DolphinsScore, KoalasScore);
if (DolphinsScore > KoalasScore && DolphinsScore >= 100) {
    console.log('Dolphins Winner!!!');
}
else if (KoalasScore > DolphinsScore && KoalasScore >= 100) {
    console.log('Koalas Winner!!!');
}
else if (DolphinsScore === KoalasScore && DolphinsScore >= 100 && KoalasScore >= 100) {
    console.log('Draw!!!')
}
else {
    console.log('No one wins the tropjy 😢');
}*/

/*const day = 'tuesday';

switch (day) {
    case 'monday':
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;

    //...
}

const age = 15;
age >= 18 ? console.log('I like to drink wine')
    : console.log('I like to drink water');

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'wine';

}
else {
    drink2 = 'water';
}
console.log(drink2);

console.log(`I like drink ${age >= 18 ? 'wine' : 'water'}`);*/

const money = 430;

const tip = money >= 50 && money <= 300 ? (money * 15) / 100 : (money * 20) / 100;
console.log(tip);

console.log(`The Bill was ${money}, the tip was ${tip} and the total value ${money + tip}`);