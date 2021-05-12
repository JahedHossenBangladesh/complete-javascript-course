/*let js = "amazing";
if (js === "amazing") alert("The js is Nice");

console.log(2 + 2 +2 );
console.log("jahed");
 let name = "jahed";

 console.log(name);



let jsFun = true;
console.log(jsFun);

console.log(typeof true);
console.log(typeof jsFun);
console.log(typeof "jahed");
console.log(typeof 33);

jsFun = 'yes!';

console.log(jsFun);

let year;
console.log(typeof year);
year = 3333;
console.log(year);
console.log(typeof null)

let age = 30;
age = 43;
const birthYear = 1993;

lastName = "hossen";
console.log(lastName);

const now = 2031;
const ageJonas = now -1834;
const ageSarah = now -1938;
console.log(ageJonas,ageSarah);
console.log(ageJonas * 3 );

const firstName = 'Jonas';
const lastName = 'Schedtmann';
console.log(firstName+' ' + lastName);


//assingment operator
let x = 20 +4;
x +=20;
x *=4;
x++;
x--;
console.log(x);


//comparison operator;
console.log(firstName.length > lastName.length)

const isNameLengthIsBigger = firstName.length >= lastName.length;

console.log(isNameLengthIsBigger);



const now = 2031;
const ageJonas = now - 1834;
const ageSarah = now - 1938;

console.log(now - 1834 > now - 1938);

let x,y;

x = y = 25 -10 -5;
console.log(`x = ${x} and y = ${y}`);

const average = (ageJonas + ageSarah) /2;

console.log(ageJonas,ageSarah,average);
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀


const massMark = 78;
const heightMark = 1.56;
const massJohn = 92;
const heightJohn = 1.79;

const bmiMark = massMark / heightMark ** 2;
const bmiJohn = massJohn/(heightJohn * heightJohn);
const compare =  bmiMark > bmiJohn;

console.log(bmiJohn,bmiMark,compare);

if (bmiMark > bmiJohn) {
    console.log(`marks bmi is ${bmiMark} greater then ${bmiJohn} `);
} else{
    console.log(`john bmi is ${bmiJohn} greater then ${bmiMark}`);
}

const firstName = 'Jahed ';
const lastName = 'hossen';
const birthYear = 1994;
const now = 2021;

const jahed = "I'm " + firstName + "my last name is " + lastName + " my age is " +(now - birthYear);

const jahedNew =`I'm ${firstName} ${lastName} . my age is ${now - birthYear}`;

console.log(jahed)
console.log(jahedNew)



const age = 14;
const isOldEnough = age >=18;

if(isOldEnough){
    console.log('yes you can get the licence');
}
else {
    console.log(`no you cant,after ${18 - age} years you  are able to get the licence`)
}

const birthYear = 1994;

let century;

if(birthYear <= 2000){
    century = 20;
}else{
    century = 21;
}

console.log(century);

//type conversion
const lastYear = '1991';
console.log(Number(lastYear),lastYear);
console.log(lastYear+ 34);
console.log(String(34),34);

//type coercion
console.log('I am' + 30 + 'years old');
console.log('34'-'23' - 3);
console.log('34'*4);
console.log('43'/'4');
console.log('34' > '11')

let n = '1'+1;
n = n -1;
console.log(n);

// 5 falsy values : 0 ,'',undefine,null,Nan

console.log(Boolean(0));
console.log(Boolean('jon'));
console.log(Boolean(undefined));
console.log(Boolean({}));
console.log(Boolean(''));

let money = 0;
if(money){
    console.log('you have money')
}else {
    console.log('you should get a job')
}
let height ;
if(height){
    console.log('you height is define')
}else {
    console.log('height is undefined')
}

//conditional
let age = '18';
if(age ===18){
    console.log('you are 18');
}
if(age == 18){
    console.log('lose equal operator')
}
const favourite = Number(prompt('what is your likeable number'));
console.log(favourite);
console.log(typeof favourite);

if(favourite === 23){
    console.log('23 is coool');
}else if(favourite === 7){
    console.log('7 is also cool number')
}else if(favourite === 9){
    console.log('9 is cool')
}else {
    console.log(' the number is not 23,7,9')
}

if(favourite !== 23){console.log('write 23')}


const hasDrivenLicence = true ;
let hasVision;
let isTried = true

if( hasDrivenLicence && hasVision && !isTried){
    console.log('he is a good driver');
}else{
    console.log('he is not a good driver')
}


// Coding Challenge #3


There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀 */

const dolphinsScore = [96,108,89];
const dolphinsAverage = (dolphinsScore[0] + dolphinsScore[1] + dolphinsScore[2])/(dolphinsScore.length) ;
const koalasScore = [88,91,110];
const koalasAverage = (koalasScore[0] + koalasScore[1] + koalasScore[2])/(koalasScore.length ) ;
console.log(koalasAverage);

if(dolphinsAverage > koalasAverage){
    console.log('Dolphins is win')
}else if(koalasAverage > dolphinsAverage){
    console.log('koalas is win')
}else {
    console.log('what is draw')
}